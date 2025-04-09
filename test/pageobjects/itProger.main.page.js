import Page from "./page";

class itProger extends Page {

    get itprogerLink() {return $('//*[@id="logo"]/a/span')};
    get directories() {return $('//*[@id="about"]/a[1]')};
    get contacts() {return $('//*[@id="about"]/a[2]/font/font')};
    get enter() {return $('//*[@id="reg_auth"]/a[1]')};

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

};

export default new itProger();