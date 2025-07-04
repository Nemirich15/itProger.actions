import Page from "./page";

class Videos extends Page {

    get all() {return $('//*[@id="nesting"]/div')};
    get games() {return $('//*[@id="nesting"]/a[1]')};
    get web() {return $('//*[@id="nesting"]/a[2]')};
    get desing() {return $('//*[@id="nesting"]/a[3]')};

    open() {
        super.open('https://itproger.com/courses/');
    };

    clickAll() {
        this.all.click();
    };

    clickGames() {
        this.games.klick()
    };

    clickWeb() {
        this.web.click()
    };

    clickDesign() {
        this.desing.click()
    };
};

export default new Videos();