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

    get itColumn() {return $('//*[@id="hideMenu"]/a[2]')};
    get videoCourses() {return $('//*[@id="hideMenu"]/a[3]')};
    get testsAndpractices() {return $('//*[@id="hideMenu"]/a[4]')};
    get programsLerning() {return $('//*[@id="hideMenu"]/a[5]')};


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

    itColumnClick() {
        this.changeLanguige.click();
    };

    videoCoursesClick() {
        this.videoCourses.click();
    };

    testsAndpracticesClick() {
        this.testsAndpractices.click();
    };

    programsLerningClick() {
        this.programsLerning.click();
    };



};

export default new itProger();