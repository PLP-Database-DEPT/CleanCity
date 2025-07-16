from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from datetime import date, timedelta
from selenium.webdriver.common.by import By
import time

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
        
def fill_schedule_form(driver, with_desc=False):
    name_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "home-name"))
    )
    name_input.click()
    time.sleep(0.5)
    name_input.clear()
    name_input.send_keys("John Doe")

    email_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "home-email"))
    )
    email_input.click()
    time.sleep(0.5)
    email_input.clear()
    email_input.send_keys("user1@test.com")

    location_select_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "home-location"))
    )
    location_select = Select(location_select_element)
    time.sleep(2)
    location_select.select_by_visible_text("Mombasa")

    waste_select_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "home-waste"))
    )
    waste_select = Select(waste_select_element)
    time.sleep(2)
    waste_select.select_by_visible_text("General Waste")

    pickup_date = (date.today() + timedelta(days=1)).strftime("%Y-%m-%d")
    date_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "home-date"))
    )
    date_input.click()
    time.sleep(0.5)
    date_input.clear()
    date_input.send_keys(pickup_date)

    if with_desc:
        desc_input = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "home-desc"))
        )
        desc_input.click()
        time.sleep(0.5)
        desc_input.clear()
        desc_input.send_keys("Leave near garage")

    submit_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "home-btn"))
    )
    submit_button.click()
    
