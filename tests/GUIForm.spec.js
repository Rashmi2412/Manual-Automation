const{test, expect} = require('@playwright/test');
test('Verify the GUI elementsform', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/#');
await expect(page.locator('.titlewrapper')).toHaveText('Automation Testing Practice');
await expect(page.getByRole('heading', {name: 'GUI Elements'})).toBeVisible();
await page.getByPlaceholder('Enter Name').fill('Rashmi');
await page.getByPlaceholder('Enter EMail').fill('rashmi@gmail.com');
await page.getByPlaceholder('Enter Phone').fill('987654321');
await page.locator('#textarea').fill('Indore');
await page.getByRole('radio', { name: 'Female' }).check();
await page.getByRole('checkbox', { name: 'Sunday' }).check();
await page.selectOption('#country', { label: 'India' });
await page.selectOption('#colors', { label: 'Yellow' });
await page.selectOption('#animals', { label: 'Rabbit' });
await page.locator('#datepicker').fill('12/09/2025');
await page.locator('#txtDate').click('24/12/2025');
await page.locator('#start-date').fill('2025-12-11');
await page.locator('#end-date').fill('2025-12-31');
await page.locator('button[onclick="calculateRange()"]').click({ force: true });
})