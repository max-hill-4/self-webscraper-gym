from selenium.webdriver.common.by import By
from selenium import webdriver
from details import EMAIL, PASSWORD
driver = webdriver.Chrome("chromedriver")


class GymApi:
    def login():
        driver.get("https://members.energiefitness.com/Login")
        driver.find_element(By.XPATH, '//*[@id="Email"]').send_keys(EMAIL)
        driver.find_element(By.XPATH, '//*[@id="Password"]').send_keys(PASSWORD)
        driver.find_element(By.CSS_SELECTOR, 'button.mainbutton').click()
        print("Logged in")

    def get_people():
        driver.get("https://members.energiefitness.com/lincoln-city/inthevenue")
        poeple = driver.find_element(By.XPATH, '/html/body/main/div/div/h1').text
        return poeple

GymApi.login()
print(GymApi.get_people())