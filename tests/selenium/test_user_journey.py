from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from helpers import login_user, log_out_user, fill_schedule_form
import time

def test_user_journey():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    try:
        driver.get("http://localhost:3000")

        sign_up_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/header/div[2]/a[1]'))
        )
        sign_up_button.click()

        input_name = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "register-name"))
        )
        input_name.send_keys("Jane Smith")

        input_email = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "register-email"))
        )
        input_email.send_keys("janesmith@gmail.com")

        input_password = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "register-password"))
        )
        input_password.send_keys("TestPass123?")

        submit_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "register-btn"))
        )
        submit_button.click()

        WebDriverWait(driver, 10).until(
            lambda d: ("profile" in d.current_url) or ("login" in d.current_url)
        )
        assert "profile" in driver.current_url or "login" in driver.current_url

        login_user(driver, email="janesmith@gmail.com", password="TestPass123?")

        WebDriverWait(driver, 10).until(
            lambda d: "profile" in d.current_url or "home" in d.current_url
        )
        assert "profile" in driver.current_url or "home" in driver.current_url

        link_to_schedule = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Schedule Pickup"))
        )
        link_to_schedule.click()

        WebDriverWait(driver, 10).until(
            lambda d: "home" in d.current_url
        )
        assert "home" in driver.current_url

        fill_schedule_form(driver, with_desc=True)

        # print("After form submit:", driver.current_url)
        # assert "home" in driver.current_url
        

        log_out_user(driver)

        assert driver.current_url.endswith("/") or "home" in driver.current_url

        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.LINK_TEXT, "Login"))
        )

    except Exception as e:
        print("Error during user journey flow:", e)
        raise
    finally:
        driver.quit()
        
test_user_journey()        
