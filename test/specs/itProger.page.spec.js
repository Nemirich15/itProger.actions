import itProgerPage from "../pageobjects/itProger.main.page";

describe('Main page', () => {

    it('Open page', async() => {
        itProgerPage.open();
        await browser.pause(3000);
    });

    it('main page', async() => {
        itProgerPage.itprogerLinkclick();
        await browser.pause(3000);
    });

    it('Directories page', async() => {
        itProgerPage.directoriesClick();
        await browser.pause(3000);
    });

    it('Contacts page', async() => {
        itProgerPage.contactsClick();
        await browser.pause(3000);
    });

    it('Enter form', async() => {
        itProgerPage.enterClick();
        await browser.pause(3000);
    });

    it('set e-mail', async() => {
        itProgerPage.enterFormOneClick();
        await browser.pause(3000);
    });

    it('set password', async() => {
        itProgerPage.enterFormTwoClick();
        await browser.pause(3000);
    });

    it('to registraration page', async() => {
        itProgerPage.registrationClick();
        await browser.pause(3000);
    });

    it('serch foarm', async() => {
        itProgerPage.serchClick();
        await browser.pause(3000);
    });

    it('change languige', async() => {
        itProgerPage.changeLanguigeClick();
        await browser.pause(3000);
    });

    it('it column page', async() => {
        itProgerPage.itColumnClick();
        await browser.pause(3000);
    });

    it('video courses', async() => {
        itProgerPage.videoCoursesClick();
        await browser.pause(3000);
    });

    it('test and practice', async() => {
        itProgerPage.testsAndpracticesClick();
        await browser.pause(3000);
    });

    it('program lerning', async() => {
        itProgerPage.programsLerningClick();
        await browser.pause(3000);
    });

});