import Page from "./page";

class Registration extends Page {
    
    get videoButton() {return $('//*[@id="content"]/div[2]/div[2]/div')};
    get choiseMouney() {return $('//*[@id="tarrifs"]/div[3]/div/div[1]/div[1]/div')};

    get caseOne() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[2]/div/div')};
    get caseTwo() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[3]/div/div')};
    get caseThree() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[4]/div/div')};
    get caseFour() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[5]/div/div')};

    get reg_email() {return $('//*[@id="user_email"]')};
    get reg_email_repeat() {return $('//*[@id="user_email_2"]')};


    open() {
        super.open('https://itproger.com/reg');
    }

    

    scroll() {
        this.caseOne.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    videoBtnClick() {
        this.videoButton.click()
    };

    choiseMoneyClick() {
        this.choiseMouney.click()
    };

    registr_form() {
        this.reg_email.setValue('nemirka15@gmail.com')
        browser.pause(2000);
        this.reg_email_repeat.setValue('namirka15@gmail.com');
        browser.pause(2000); 
    };

    caseOneClick() {
        this.caseOne.click()
        browser.pause(2000)
    };

    caseTwoClick() {
        this.caseTwo.click();
    };

    caseThreeClick() {
        this.caseThree.click();
    };

    caseFourClick() {
        this.caseFour.click();
    };

}

export default new Registration();