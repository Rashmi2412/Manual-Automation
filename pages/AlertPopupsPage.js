export class AlertPopupPage{
constructor(page){
this.page = page;
this.simpleALT= page.locator('#alertBtn');
this.ConfirmALT = page.locator('#confirmBtn');
this.promptAlt= page.locator('#promptBtn');
this.newTabBtn = page.getByRole('button', {name: 'New Tab'});
this.popupWinBtn= page.getByRole('button', {name:'Popup Windows'});
}

async SimpleAlrt(){
       page.on('dialog', dialog => {
      expect(dialog.message()).toContain("I am an alert box!");
      dialog.accept();
     });     
      await this.SimpleALT.click();
}

async ConfirmAlrtPass(){
    page.on('dialog', dialog => {
      expect(dialog.message()).toContain("Press a button!");
      dialog.accept();
     }); 
     await this.ConfirmALT.click();
     await expect(page.locator('#demo')).toBeVisible('You pressed OK!'); 
}

async ConfirmAlrtFail(){
     page.on('dialog', dialog => {
      expect(dialog.message()).toContain("Press a button!");
      dialog.dismiss();
     }); 
     await this.ConfirmALT.click();
     await expect(page.locator('#demo')).toBeVisible('You pressed Cancel!'); 
}

async promptAlrtPass(){
     page.on('dialog', dialog => {
      expect(dialog.message()).toContain("Please enter your name:");
      dialog.accept();
     }); 
     await this.promptAlt.click();
     await expect(page.locator('#demo')).toBeVisible('Hello Harry Potter! How are you today?'); 
}

async promptAlrtCncl(){
     page.on('dialog', dialog => {
      expect(dialog.message()).toContain("Please enter your name:");
      dialog.dismiss();
     }); 
     await this.promptAlt.click();
     await expect(page.locator('#demo')).toBeVisible('User cancelled the prompt.'); 
}

async newTabBtn(){
   await this.newTabBtn.click();
   await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/#');
   // await expect(page.locator('#main-message')).toBeVisible('It looks like www.pavantestingtools.com closed the connection.');
}

async popupWinBtn(){
   await this.popupWinBtn.click();
   await expect(page).toHaveURL('https://www.selenium.dev/');
}
}
 module.exports = { AlertPopupPage };
