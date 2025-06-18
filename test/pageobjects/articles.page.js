import Page from "./page";

class Articles extends Page {

    get all() {return $('//*[@id="nesting"]/div')};
    get tasks() {return $('//*[@id="nesting"]/a[1]')};
    get articles() {return $('//*[@id="nesting"]/a[2]')};
    get best() {return $('//*[@id="nesting"]/a[3]')};

    open() {
        super.open('https://itproger.com/news')
    };

    openAll() {
        this.all.click()
    };

    openTasks() {
        this.tasks.click()
    };

    openArticles() {
        this.articles.click()
    };

    openBest() {
        this.best.click()
    };
};

export default new Articles();