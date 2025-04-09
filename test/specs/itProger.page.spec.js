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
});