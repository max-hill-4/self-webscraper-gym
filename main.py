from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.common.exceptions import ElementClickInterceptedException
from details import EMAIL, PASSWORD
from datetime import date
import time
import json

class GymApi:
    def __init__(self):
        print('Creating webdriver.')
        self.logged_in = False
        self.opts = ChromeOptions()
        self.opts.add_argument("--headless")
        self.opts.add_argument("--window-size=400,800")
        self.driver = webdriver.Chrome(options=self.opts)


    def login(self) -> None:
        print('Attempting Login.')
        try:
            self.driver.get("https://members.energiefitness.com/Login")
            self.driver.find_element(By.XPATH, '//*[@id="Email"]').send_keys(EMAIL)
            self.driver.find_element(By.XPATH, '//*[@id="Password"]').send_keys(PASSWORD)
            self.driver.find_element(By.CSS_SELECTOR, 'button.mainbutton').click()
            print('Login Success.')
            self.logged_in = True
        except Exception as e:
            print((e.__doc__).strip())
            self.logged_in = False
    
    def get_people(self) -> str:
        print('Getting people')
        if self.logged_in:
            try:
                self.driver.get("https://members.energiefitness.com/lincoln-city/inthevenue")
                poeple = self.driver.find_element(By.XPATH, '/html/body/main/div/div/h1').text
                return poeple
            except Exception as e:
                return (f'error {e}, login status: {self.logged_in}')
        return 'get_people has failed.'

    def updateData(self, day:str, time:int, people:int) -> None:
        with open("gym_api/test_json.json", "r") as file:
            data = json.load(file)
            
        if day in data:
            data[day].append({ "time": time, "people": people })
        else:
            data[day] = [{ "time": time, "people": people }]

        with open("gym_api/test_json.json", "w") as file:
            json.dump(data, file, indent=2)


print('requesting...')

G = GymApi()
G.login()
print(G.get_people())
G.updateData('Monday', int(time.time()), G.get_people())

