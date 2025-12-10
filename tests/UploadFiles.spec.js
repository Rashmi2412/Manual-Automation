const{test,expect} = require('@playwright/test');
test('Validate Simple Alert text and accept it', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/#');
   
      page.on('dialog', dialog => {
      expect(dialog.message()).toContain("I am an alert box!");
      dialog.accept();
     });     
      await page.locator('#alertBtn').click();
})
