const{test, expect} = require('@playwright/test');
const { AlertPopupsPage } = require('../pages/AlertPopupsPage');

test.describe('test the entire application', () => {
test('Verify the functionality of all the mentioned popups', async({page}) =>{
const alertPopupsPage = new AlertPopupsPage(page);
await page.goto('https://testautomationpractice.blogspot.com/#');
await alertPopupsPage.SimpleAlrt();

});

});




test('Verify Double-click action functionality',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/#');

   await expect(page.getByRole('heading',{name: 'Double Click'})).toBeVisible();
    await expect(page.locator('#field1')).toHaveValue('Hello World!');
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();
    await expect(page.locator('#field2')).toHaveValue('Hello World!');
    await page.waitForTimeout(2000);
});