import contactsPage from "../pageobjects/contacts.page";

describe('Contacts page', () => {

    it('open page', async() => {
        contactsPage.open();
        await browser.pause(3000);
    });

    it('enter name', async() => {
        contactsPage.enterName();
        await browser.pause(3000);
    });

    it('enter e-mail', async() => {
        contactsPage.enterEmail();
        await browser.pause(3000);
    });

    it('enter text', async() => {
        contactsPage.enterMessage();
        await browser.pause(3000);
    });
});