"use strict";

// const ITEM_CLASS = 'album-item';
// const PHOTO_CLASS = 'photo-item';

// const albumsApi = new RespApi(
//     'https://jsonplaceholder.typicode.com/albums/',
//     );
// const photosApi = new RespApi(
//     'https://jsonplaceholder.typicode.com/photos?albumId=',
//     );




// const albumListEL = document.querySelector("#albumList");
// const albumTemplate = document.querySelector("#albumItemTemplate").innerHTML;

// const photoListEL = document.querySelector("#photoList");
// const photoTemplate = document.querySelector("#photoItemTemplate").innerHTML;

// albumListEL.addEventListener("click", onItemCkick);
// photoListEL.addEventListener("click", onItemCkick);

// let albumList = [];
// let photoList = [];


class ItemList {
    constructor(baseUrl, listEL, template, itemClass) {
        this._api = new RespApi(baseUrl);
        this.list = [];
        this.listEL = document.querySelector(listEL);
        this.template = document.querySelector(template).innerHTML;
        this.listEL.addEventListener("click", this.onItemCkick);
        this.itemClass = itemClass;
    }

    onItemCkick(e) {
        const id = getItemId(e.target);
        console.log(id);
        
    }

    fetchList() {
        this._api.getList()
        .then ((data) => {
            this._list = data;
            this.renderList();
            console.log(this._list);
        });
    } 
    
    findItem(id) {
        return albumList.find((obj) => obj.id === id);
    }
    renderList() {
        this.listEL.innerHTML = this._list.map(this.generateItemHtml).join('\n');
    }
    
    generateItemHtml (item) {
        return this.interpolateDeeper(this.template, item)
    }
    
    getItemId(el) {
        const itemEl = el.closest('.' + this.itemClass);
        return itemEl.dataset.itemId;
    }


}

let albumL = new ItemList (
    'https://jsonplaceholder.typicode.com/albums/',
    '#albumList', 
    '#albumItemTemplate',
    'album-item', 
    );




    init();


function init() {


    albumL.fetchList();

    // let photoL = new ItemList (
    //     `'https://jsonplaceholder.typicode.com/photos?albumId='+${albumL.list[0].id}`,
    //     '#photoList', 
    //     '#photoItemTemplate',
    //     'photo-item', 
    //     );

    // photoL.fetchList();
}


// function fetchList() {
//     albumsApi.getList()
//     .then ((data) => {
//         albumList = data;
//         renderList(albumList, albumListEL);
//         console.log(albumList);
//     });
// } 

// function onItemCkick(e) {
//     const id = getItemId(e.target);
//     console.log(id);
    
// }
// function findItem(id) {
//     return albumList.find((obj) => obj.id === id);
// }
// function renderList(list, listEL) {
//     listEL.innerHTML = list.map(generateItemHtml).join('\n');
// }

// function generateItemHtml (item) {
//     return interpolateDeeper(albumTemplate, item)
// }

// function getItemId(el) {
//     const itemEl = el.closest('.'+ITEM_CLASS);
//     return itemEl.dataset.itemId;
// }

