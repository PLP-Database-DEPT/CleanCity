from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

def login_user(driver, email="user1@test.com", password="TestPass123"):
    try:
        log_in_link = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Login"))
        )
        log_in_link.click()

        input_email_address = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-email"))
        )
        input_email_address.send_keys(email)
        
        input_password_login = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "login-password"))
        )
        input_password_login.send_keys(password)
        
        log_in_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "login-btn"))
        )
        log_in_button.click()

        WebDriverWait(driver, 10).until(
            lambda d: ("profile" in d.current_url) or ("dashboard" in d.current_url)
        )

    except TimeoutException:
        print(f"Timeout during sign-in, current URL: {driver.current_url}")
        assert False, "Sign-in did not complete successfully."
        
        
def log_out_user(driver):
    try:
        log_out_link = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "nav-logout"))
        )
        log_out_link.click()

        WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.LINK_TEXT, "Login"))
        )

    except TimeoutException:
        print(f"Timeout during sign-out, current URL: {driver.current_url}")
        assert False, "Sign-out did not complete successfully."