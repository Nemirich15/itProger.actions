import registrationPage from "../pageobjects/registration.page";

describe('registration page', () => {
    
    it('open page', async() => {
        registrationPage.open();
        await browser.pause(2000);
    });

    it('play video', async() => {
        registrationPage.videoBtnClick();
        await browser.pause(2000);
    });

    it('choise money', async() => {
        registrationPage.choiseMoneyClick();
        await browser.pause(2000);
    });

    it('case one', async() => {
        registrationPage.caseOneClick();
        await browser.pause(2000);
    });

    it('case two', async() => {
        registrationPage.caseTwoClick();
        await browser.pause(2000);
    });

    it('case three', async() => {
        registrationPage.caseThreeClick();
        await browser.pause(2000);
    });

    it('case four', async() =>{
        registrationPage.caseFourClick();
        await browser.pause(2000);
    });
});