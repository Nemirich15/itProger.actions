import registrationPage from "../pageobjects/registration.page";

describe('registration page', () => {
    
    it('open page', async() => {
        registrationPage.open();
        await browser.pause(2000);
    });

    xit('play video', async() => {
        registrationPage.videoBtnClick();
        await browser.pause(2000);
    });

    it('choise money', async() => {
        registrationPage.choiseMoneyClick();
        await browser.pause(2000);
    });

    it('case one', async() => {
        registrationPage.scroll();
        registrationPage.caseOneClick();
        await browser.pause(3000);
        registrationPage.registr_form();
        await browser.pause(3000)
    });

    it('case two', async() => {
        registrationPage.scroll();
        registrationPage.caseTwoClick()
        await browser.pause(2000);
        registrationPage.registr_form();
        await browser.pause(2000);
    });

    it('case three', async() => {
        registrationPage.scroll();
        registrationPage.caseThreeClick();
        await browser.pause(2000);
        registrationPage.registr_form();
        await browser.pause(2000);
    });

    it('case four', async() =>{
        registrationPage.scroll();
        registrationPage.caseFourClick();
        await browser.pause(2000);
        registrationPage.registr_form();
        await browser.pause(2000);
    });
});