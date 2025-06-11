export default class Page {

    constructor(){
        this.title= 'Name of Page'
    }

    async open(path){
        await browser.url(path)
    }

};