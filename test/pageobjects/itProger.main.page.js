import Page from "./page";

class itProger extends Page {

    get itprogerLink() {return $('//*[@id="logo"]/a/span')};
    get directories() {return $('//*[@id="about"]/a[1]')};
    get contacts() {return $('//*[@id="about"]/a[2]/font/font')};
    get enter() {return $('//*[@id="reg_auth"]/a[1]')};

    get enterFormOne() {return $('//*[@id="email"]')};
    get enterFormTwo() {return $('//*[@id="password"]')};

    get registration() {return $('//*[@id="reg_auth"]/a[2]')};
    get serch() {return $('//*[@id="search"]/div')};
    get changeLanguige() {return $('//*[@id="search"]/noindex/a/i')};

    open() {
        super.open('https://itproger.com');
        browser.pause(3000);
    };

    itprogerLinkclick() {
        this.itprogerLink.click();

    };

    directoriesClick() {
        this.directories.click()
    };

    contactsClick() {
        this.contacts.click()
    };

    enterClick() {
        this.enter.click()
    };

    enterFormOneClick() {
        this.enterFormOne.setValue('nemirka15@gmail.com');
    };

    enterFormTwoClick() {
        this.enterFormTwo.setValue('15nemira15');
    };

    registrationClick() {
        this.registration.click();

    };

    serchClick() {
        this.serch.click()
    };

    changeLanguigeClick() {
        this.changeLanguige.click();
    };



};

export default new itProger();