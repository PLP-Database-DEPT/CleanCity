from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import time

def test_log_in():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    
    try:
        driver.get("http://localhost:3000")

        log_in_link = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Login"))
        )
        log_in_link.click()
        time.sleep(5)

        input_email_address = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-email"))
        )
        input_email_address.send_keys("sibiyasa24@gmail.com")
        time.sleep(2)
        
        input_password_login = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-password"))
        )
        input_password_login.send_keys("M@sango78")
        time.sleep(2)
        
        print("Current URL:", driver.current_url)
        assert "http://localhost:3000" in driver.current_url,"URL does not contain 'localhost:3000/login'"

        
        log_in_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "login-btn"))
        )
        
        log_in_button.click()
        
        WebDriverWait(driver, 10).until(
        lambda d: ("profile" in d.current_url) or ("dashboard" in d.current_url))
        current_url = driver.current_url
        print(f"Redirected to: {current_url}")
        assert ("profile" in current_url) or ("dashboard" in current_url), f"Unexpected redirect URL: {current_url}"

        
    except TimeoutException:
        print(f"Timeout waiting for sign-in button, current URL: {driver.current_url}")
        driver.quit()
        assert False, "Sign-in button not found or not clickable"       
    finally: 
        driver.quit()
        print("Test completed, browser closed.")   
        
test_log_in()        