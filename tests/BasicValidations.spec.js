const { test, expect } = require('@playwright/test');
test.describe('Verify Scenario 01 to 03', () => {
    test('Verify Website HomePage is loading properly.', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');
        await expect(page.locator('.titlewrapper')).toHaveText('Automation Testing Practice');
        await expect(page.getByRole('heading', { name: 'GUI Elements' })).toBeVisible();
        await expect(page.locator('xpath=//*[@id="post-body-1307673142697428135"]/div[1]/label[1]')).toBeVisible();
        await expect(page.locator('xpath=//*[@id="post-body-1307673142697428135"]/div[1]/label[2]')).toBeVisible();
        await expect(page.locator('css=#post-body-1307673142697428135 > div:nth-child(8) > label:nth-child(5)')).toBeVisible();
        await expect(page.getByLabel('Address')).toBeVisible();
        await expect(page.locator('xpath=//*[@id="post-body-1307673142697428135"]/div[3]/label')).toBeVisible();
        await expect(page.locator('xpath=//*[@id="post-body-1307673142697428135"]/div[4]/label')).toBeVisible();
        await expect(page.getByLabel('Country')).toBeVisible();
        await expect(page.getByLabel('Colors')).toBeVisible();
        await expect(page.getByLabel('Sorted List')).toBeVisible();
        await expect(page.locator('xpath= //*[@id="post-body-1307673142697428135"]/div[8]/button')).toBeVisible();
    });
    test('Verify all the Header links are naviagting to the corresponding pages', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');
        await page.locator('xpath=//*[@id="PageList2"]/div/ul/li[1]/a').click();
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
        await page.getByRole('link', {name: 'Udemy Courses'}).click();
        await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/p/udemy-courses.html');
        await page.goBack();
        await page.getByRole ('link', {name: 'Online Trainings'}).click();
        await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/');
        await page.goBack();
        await page.locator('xpath= //*[@id="PageList2"]/div/ul/li[4]/a').click();
        await expect(page).toHaveURL('chrome-error://chromewebdata/');
        await page.goBack();
        await page.getByRole ('link', {name: 'PlaywrightPractice'}).click();
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    })
test('Verify user able to navigates to the correct page by clicking on the Footer Links', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');
        await page.getByText('Footer Links').scrollIntoViewIfNeeded();
        await page.locator('xpath= //*[@id="PageList1"]/div/ul/li[1]/a').click();
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
        await page.getByText('Footer Links').scrollIntoViewIfNeeded();
        await page.locator('xpath=//*[@id="PageList1"]/div/ul/li[2]/a').click();
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');
        await page.getByText('Footer Links').scrollIntoViewIfNeeded(); // for scroll down to the particular text or button
        await page.locator('xpath=//*[@id="PageList1"]/div/ul/li[3]/a').click();
         await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/download-files_25.html');
})
});