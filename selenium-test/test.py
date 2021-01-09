from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

DRIVER_PATH = 'D:/Coding/naseemshah.dev/selenium-test/chromedriver.exe'

URL = 'https://naseemshah.dev/selenium-test/index.html'

driver = webdriver.Chrome(DRIVER_PATH)
driver.get('https://naseemshah.dev/selenium-test/index.html')

def testAddition():
    num1 =  driver.find_element_by_id('num1')
    num1.clear()
    num1.send_keys('5')
    num2 =  driver.find_element_by_id('num2')
    num2.clear()
    num2.send_keys('10')
    addBtn = driver.find_element_by_id('addBtn')
    addBtn.click()
    result = driver.find_element_by_id('result')
    if( result.text == '15'):
        print("\nTested 5 + 10 and got result 15\nAddition Test Passed!")

def testSubtraction():
    num1 =  driver.find_element_by_id('num1')
    num1.clear()
    num1.send_keys('5')
    num2 =  driver.find_element_by_id('num2')
    num2.clear()
    num2.send_keys('10')
    subBtn = driver.find_element_by_id('subBtn')
    subBtn.click()
    result = driver.find_element_by_id('result')
    if( result.text == '-5'):
        print("\nTested 5 - 10 and got result -5 \nSubtraction Test Passed!")

def testMultiplication():
    num1 =  driver.find_element_by_id('num1')
    num1.clear()
    num1.send_keys('5')
    num2 =  driver.find_element_by_id('num2')
    num2.clear()
    num2.send_keys('10')
    mulBtn = driver.find_element_by_id('mulBtn')
    mulBtn.click()
    result = driver.find_element_by_id('result')
    if( result.text == '50'):
        print("\nTested 5 * 10 and got result 50 \nMultiplication Test Passed!")

def testDivision():
    num1 =  driver.find_element_by_id('num1')
    num1.clear()
    num1.send_keys('5')
    num2 =  driver.find_element_by_id('num2')
    num2.clear()
    num2.send_keys('10')
    divBtn = driver.find_element_by_id('divBtn')
    divBtn.click()
    result = driver.find_element_by_id('result')
    if( result.text == '0.5'):
        print("\nTested 5 / 10 and got result 0.5 \nDivision Test Passed!")
             
testAddition()
testSubtraction()
testMultiplication()
testDivision()
