import articlesPage from "../pageobjects/articles.page";

xdescribe('Articles page', () => {
    
    it('Open page', async() => {
        articlesPage.open();
        await browser.pause(3000);
    });

    it('open all', async() => {
        articlesPage.openAll();
        await browser.pause(3000);
    });

    it('open articles', async() => {

    articlesPage.openArticles();
    await browser.pause(3000);
    
    });

    it('open best', async() => {
        articlesPage.openBest();
        await browser.pause(3000);
    });

    it('open tasks', async() => {
        articlesPage.openTasks();
        await browser.pause(3000);
    });
});
