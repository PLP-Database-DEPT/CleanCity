from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import time
from helpers import log_out_user, login_user

def test_log_out():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    try:
        driver.get("http://localhost:3000")
        login_user(driver, email="user1@test.com", password="TestPass123?")
        log_out_user(driver)

        login_link = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.LINK_TEXT, "Login"))
        )

        assert login_link is not None, "Login link not found after logout"

    except TimeoutException:
        print(f"❌ Timeout during sign-out, current URL: {driver.current_url}")
        assert False, "Sign-out did not complete successfully."

    finally:
        driver.quit()

 
        
test_log_out()  
    