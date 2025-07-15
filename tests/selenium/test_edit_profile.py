from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from helpers import login_user

def test_edit_profile():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    
    try:
        driver.get("http://localhost:3000")
        login_user(driver, email="user3@test.com", password="TestPass123")

        link_to_profile = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Profile"))
        )
        link_to_profile.click()

        link_to_edit = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[text()='Edit Profile']"))
        )
        link_to_edit.click()

        input_name = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "name"))
        )
        input_name.clear()
        input_name.send_keys("Elizabeth Smith")

        save_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[text()='Save']"))
        )
        save_button.click()

        link_to_edit_again = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[text()='Edit Profile']"))
        )
        link_to_edit_again.click()

        updated_input_name = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "name"))
        )
        current_value = updated_input_name.get_attribute("value")
        assert current_value == "Elizabeth Smith", f"Expected name to be 'Elizabeth Smith', but got '{current_value}'"


    except TimeoutException:
        print(f"❌ Timeout during editing profile. Current URL: {driver.current_url}")
        assert False, "Editing profile did not complete successfully."

    finally:
        driver.quit()

test_edit_profile()
