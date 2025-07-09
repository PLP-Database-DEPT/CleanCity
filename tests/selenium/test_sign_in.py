from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import time

def test_sign_in():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    
    try:
        driver.get("http://localhost:3000/login")

        sign_in_button = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/header/div[2]/a[2]'))
        )
        sign_in_button.click()
        time.sleep(5)

        input_email_address = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-email"))
        )
        input_email_address.send_keys("")
        time.sleep(2)
        
    except TimeoutException:
        print(f"Timeout waiting for sign-in button, current URL: {driver.current_url}")
        driver.quit()
        assert False, "Sign-in button not found or not clickable"       
    finally: 
        driver.quit()
        print("Test completed, browser closed.")   