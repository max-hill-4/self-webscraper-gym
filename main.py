from selenium.webdriver.common.by import By
from selenium import webdriver
from details import EMAIL, PASSWORD
driver = webdriver.Chrome("chromedriver")
from datetime import datetime

class GymApi:

    def login():
        driver.get("https://members.energiefitness.com/Login")
        driver.find_element(By.XPATH, '//*[@id="Email"]').send_keys(EMAIL)
        driver.find_element(By.XPATH, '//*[@id="Password"]').send_keys(PASSWORD)
        driver.find_element(By.CSS_SELECTOR, 'button.mainbutton').click()

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

while True:
    if datetime.now():
    if not GymApi.check_login():
        GymApi.login()
    print(GymApi.get_people())
    

