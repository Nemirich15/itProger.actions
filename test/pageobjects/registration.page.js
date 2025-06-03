import Page from "./page";

class Registration extends Page {
    
    get videoButton() {return $('//*[@id="content"]/div[2]/div[2]/div')};
    get choiseMouney() {return $('//*[@id="tarrifs"]/div[3]/div/div[1]/div[1]/div')};

    get caseOne() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[2]/div/div')};
    get caseTwo() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[3]/div/div')};
    get caseThree() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[4]/div/div')};
    get caseFour() {return $('//*[@id="tarrifs"]/div[3]/div/div[16]/div[5]/div/div')};

    open() {
        super.open('https://itproger.com/reg');
    }

    videoBtnClick() {
        this.videoButton.click()
    };

    choiseMoneyClick() {
        this.choiseMouney.click()
    };

    caseOneClick() {
        this.caseOne.click()
    };

    caseTwoClick() {
        this.caseTwo.click()
    };

    caseThreeClick() {
        this.caseThree.click()
    };

    caseFourClick() {
        this.caseFour.click()
    };
};

export default new Registration();