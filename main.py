from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from details import EMAIL, PASSWORD
from datetime import datetime
import time 
import json

print('setting options')
opts = ChromeOptions()
opts.add_argument("--headless")
driver = webdriver.Chrome(options=opts)


class GymApi:
    logged_in = False
    def login():
        driver.get("https://members.energiefitness.com/Login")
        driver.find_element(By.XPATH, '//*[@id="Email"]').send_keys(EMAIL)
        driver.find_element(By.XPATH, '//*[@id="Password"]').send_keys(PASSWORD)
        try:
            driver.find_element(By.CSS_SELECTOR, 'button.mainbutton').click()
            logged_in = True
            print('logged in')
        except selenium.common.exceptions.ElementClickInterceptedException:
            print('Element in the way')
    def check_login():
        try:
            driver.get("https://members.energiefitness.com/lincoln-city/inthevenue")
            driver.find_element(By.XPATH, '/html/body/main/div/div/h1').text
            return True
        except:
            return False
    
    def get_people():
        driver.get("https://members.energiefitness.com/lincoln-city/inthevenue")
        poeple = driver.find_element(By.XPATH, '/html/body/main/div/div/h1').text
        return poeple



print('requesting...')

if not GymApi.logged_in:
        GymApi.login()

if GymApi.logged_in:
    print('Amount of ppl is')
    print(GymApi.get_people()) 



while True:
    
    if not GymApi.check_login():
        GymApi.login()
    print(GymApi.get_people())
    time.sleep(60)
