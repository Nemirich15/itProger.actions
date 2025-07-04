export default class Page {

    constructor(){
        this.title= 'Name of Page'
    }

    open(path){
        browser.url(path)
    }

};