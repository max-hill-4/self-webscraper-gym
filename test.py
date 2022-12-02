
from selenium.webdriver.common.by import By
from selenium import webdriver
import time
driver = webdriver.Chrome("chromedriver")


def login():
    driver.get("https://members.energiefitness.com/Login")
    driver.find_element(By.XPATH, '//*[@id="Email"]').send_keys(username)

    driver.find_element(By.XPATH, '//*[@id="Password"]').send_keys(password)

    #driver.find_elements(By.CLASS_NAME, 'mainbutton angular').click()
    driver.find_element(By.CSS_SELECTOR, 'button.mainbutton').click()

time.sleep(5)
driver.quit()
