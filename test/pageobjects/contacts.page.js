import Page from "./page";

class Contacts extends Page {

    get inputName() {return $('//*[@id="name"]')};
    get inputE_mail() {return $('//*[@id="email"]')};
    get inputText() {return $('//*[@id="message"]')};

    open() {
        super.open('https://itproger.com/kontakti')
    };

    enterName() {
        this.inputName.setValue('Constantin Nemirka')
    };

    enterEmail() {
        this.inputE_mail.setValue('nemirka15@gmail.com')
    };

    enterMessage() {
        this.inputText.setValue('Hallo, I want send massage to you.')
    };

};

export default new Contacts();

