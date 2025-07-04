import videosPage from "../pageobjects/videos.page";

describe('Videos page', () => {

    it('Open page', async() => {
        videosPage.open();
        await browser.pause(7000);
    });

    it('Open all', async() => {
        videosPage.clickAll();
        await browser.pause(2000);
    });

    it('Open games', async() => {
        videosPage.clickGames();
        await browser.pause(2000);
    });

    it('Open web', async() => {
        videosPage.clickWeb();
        await browser.pause(2000);
    });

    it('Open design', async() => {
        videosPage.clickDesign();
        await browser.pause(2000);
    });
});