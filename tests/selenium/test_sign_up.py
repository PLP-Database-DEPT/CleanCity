from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import time

def test_sign_up():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
   
    try:
        driver.get("http://localhost:3000")

        sign_up_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/header/div[2]/a[1]'))
        )
        sign_up_button.click()
        time.sleep(5) 
        
        # 		
        
        input_names = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "register-name"))
        )
        input_names.send_keys("Jane Smith")
        time.sleep(2)

        input_email_address = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "register-email"))
        )
        input_email_address.send_keys("user2@test.com")
        time.sleep(2)

        input_password = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "register-password"))
        )
        input_password.send_keys("TestPass123?")
        time.sleep(2)

        print("Current URL:", driver.current_url)
        assert "http://localhost:3000" in driver.current_url,"URL does not contain 'localhost:3000/login'"
        
        submit_button = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "register-btn"))
        )
        submit_button.click()

        WebDriverWait(driver, 10).until(
            lambda d: ("profile" in d.current_url) or ("login" in d.current_url)
        )
        current_url = driver.current_url
        print(f"Redirected to: {current_url}")
        assert ("profile" in current_url) or ("login" in current_url), f"Unexpected redirect URL: {current_url}"
    
    except TimeoutException:
        print(f"Timeout waiting for redirect, current URL: {driver.current_url}")
        driver.quit()
        assert False, "Page did not redirect to profile or login after sign-up"

    finally:
        driver.quit()

test_sign_up()
