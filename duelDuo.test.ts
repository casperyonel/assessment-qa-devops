
import { Builder, Capabilities, By } from "selenium-webdriver"
import { TsJestTransformer } from "ts-jest/dist/ts-jest-transformer"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    
})

test('the h2 after clicking draw has the Choose 2 text displayed', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(6000)
    let displayed = await driver.findElement(By.xpath('//h2[text()="Choose 2!"]')).getText()
    expect(displayed).toBe("Choose 2!")
})

test('Add to Duo buttons are showing up on the display', async () => {
    await driver.findElement(By.id('draw')).click()
    let displayed = await driver.findElement(By.className('bot-btn')).getText()
    expect(displayed).toBe("Add to Duo")
})
