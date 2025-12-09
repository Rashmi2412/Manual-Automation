const{test, expect} = require('@playwright/test');
test('Verify the GUI elementsform', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/#');
await expect(page.locator('.titlewrapper')).toHaveText('Automation Testing Practice');
await expect(page.getByRole('heading', {name: 'GUI Elements'})).toBeVisible();
// await expect(page.getByRole('label',{name: 'Name'})).toBeVisible();
await page.getByPlaceholder('Enter Name').fill('Rashmi');
await page.getByPlaceholder('Enter EMail').fill('rashmi@gmail.com');
await page.getByPlaceholder('Enter Phone').fill('987654321');
await page.locator('#textarea').fill('Indore');
await page.getByRole('radio', { name: 'Female' }).check();
await page.getByRole('checkbox', { name: 'Sunday' }).check();
// await page.selectOption('#dropdown','India');
await page.selectOption('#multiple','India');
await page.waitForTimeout(2000);

})