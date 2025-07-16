from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from webdriver_manager.chrome import ChromeDriverManager
from helpers import fill_schedule_form
from datetime import date, timedelta

def login_user(driver, email="user1@test.com", password="TestPass123"):
    log_in_link = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.LINK_TEXT, "Login"))
    )
    log_in_link.click()

    email_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "login-email"))
    )
    email_input.send_keys(email)

    password_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "login-password"))
    )
    password_input.send_keys(password)

    login_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "login-btn"))
    )
    login_button.click()


def test_schedule_pickup_without_description():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    try:
        driver.get("http://localhost:3000")
        login_user(driver)
        link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Schedule Pickup"))
        )
        link.click()
        fill_schedule_form(driver, with_desc=False)
    finally:
        driver.quit()

def test_schedule_pickup_with_description():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    try:
        driver.get("http://localhost:3000")
        login_user(driver)
        link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Schedule Pickup"))
        )
        link.click()
        fill_schedule_form(driver, with_desc=True)
    finally:
        driver.quit()
        
if __name__ == "__main__":
    test_schedule_pickup_without_description()
    test_schedule_pickup_with_description()
        
