from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_sign_up_page_loads_correctly(driver):
    driver.get("http://localhost:3000/sign-up")
    assert "Sign Up" in driver.title
    
def test_sign_up_form_fields(driver):
    driver.get("http://localhost:3000/sign-up")
    assert driver.find_element_by_name("siphesihle sibiya")
    assert driver.find_element_by_name("sibiyasa24@gmail.com")
    assert driver.find_element_by_name("M@sango78")
    assert driver.find_element_by_name("M@sango78")
    
def test_sign_up_button(driver):
    driver.get("http://localhost:3000/sign-up")
    sign_up_button = driver.find_element_by_xpath("//button[@type='submit']")
    assert sign_up_button.is_displayed()
    assert sign_up_button.is_enabled()
    
def test_sign_up_successful(driver):
    driver.get("http://localhost:3000/sign-up")
    driver.find_element_by_name("siphesihle sibiya").send_keys("siphesihle sibiya")
    
    
    