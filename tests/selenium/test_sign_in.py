from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC

def test_log_in():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    
    try:
        driver.get("http://localhost:3000")

        log_in_link = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Login"))
        )
        log_in_link.click()

        input_email_address = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-email"))
        )
        input_email_address.send_keys("user2@test.com")
        
        input_password_login = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-password"))
        )
        input_password_login.send_keys("TestPass123?")
        
        log_in_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "login-btn"))
        )
        log_in_button.click()

        WebDriverWait(driver, 10).until(
            lambda d: ("profile" in d.current_url) or ("dashboard" in d.current_url)
        )
        current_url = driver.current_url
        print(f"Redirected to: {current_url}")
        assert ("profile" in current_url) or ("dashboard" in current_url), f"Unexpected redirect URL: {current_url}"

    except TimeoutException:
        print(f"Timeout during sign-in, current URL: {driver.current_url}")
        assert False, "Sign-in did not complete successfully."

    finally:
        driver.quit()

test_log_in()
