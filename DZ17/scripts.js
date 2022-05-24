"use strict";

const ALBUM_CLASS = 'album-item';
const PHOTO_CLASS = 'photo-item';

const albumsApi = new RespApi('https://jsonplaceholder.typicode.com/albums/');
const photosApi = new RespApi('https://jsonplaceholder.typicode.com/photos?albumId=');

const albumListEL = document.querySelector("#albumList");
const photoListEL = document.querySelector("#photoList");
const bigEL = document.querySelector("#bigPhoto");

const albumTemplate = document.querySelector("#albumItemTemplate").innerHTML;
const photoTemplate = document.querySelector("#photoItemTemplate").innerHTML;
const photoBigTemplate = document.querySelector("#photoBigTemplate").innerHTML;

albumListEL.addEventListener("click", onAlbumClick);
photoListEL.addEventListener("click", onPhotoClick);
bigEL.addEventListener("click", onBigClick);

let albumList = [];
let photoList = [];

init();


function onAlbumClick(e) {
    const id = +getItemId(e.target, ALBUM_CLASS);
    setPhotosApi (id); 
    console.log(photosApi._baseUrl);
    fetchPhotoList();
}

function onPhotoClick(e) {
    const id = +getItemId(e.target, PHOTO_CLASS);
    bigEL.innerHTML = interpolate(photoBigTemplate, findPhotoItem(id));
    bigEL.classList.toggle('hidden');
}

function onBigClick(e) {
    bigEL.classList.toggle('hidden');
    bigEL.innerHTML = '';
}


function init() {
    fetchAlbumList()
}

function fetchAlbumList() {
    albumsApi.getList()
    .then ((data) => {
        albumList = data;
        renderList(albumList, albumListEL, albumTemplate);
    })
    .then  (() => {
        setPhotosApi (albumList[0].id);
        fetchPhotoList();
    })
} 

function fetchPhotoList() {
    photosApi.getList()
    .then ((data) => {
        photoList = data;
        renderList(photoList, photoListEL, photoTemplate);
    });
}

function setPhotosApi (id) {
    photosApi._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
}

function getItemId(el, listClass) {
    const itemEl = el.closest('.'+listClass);
    return itemEl.dataset.itemId;
}

function findPhotoItem(id) {
    return photoList.find((obj) => obj.id === id);
}

function renderList(list, listEL, htmlTempalate) {
    listEL.innerHTML = list.map((e) => interpolate(htmlTempalate, e)).join('\n');
}






// class ItemList {
//     constructor(baseUrl, listEL, template, itemClass) {
//         this._api = new RespApi(baseUrl);
//         this._list = [];
//         this.listEL = document.querySelector(listEL);
//         this.temp = document.querySelector(template).innerHTML;
//         this.listEL.addEventListener("click", this.onItemClick);
//         this.itemClass = itemClass;
//     }


    
//     onItemClick(e) {
//         console.log(e.target);
//         const itemCls = this.itemClass;
//         const itemEl = e.target.closest(itemCls);
//         console.log(e.target.closest(itemCls));
        
//     }

//     fetchList() {
//         this._api.getList()
//         .then ((data) => {
//             this._list = data;
//             this.renderList();
//             return this._list[0].id;
//         });
//         // .then (() => {
//         //     photoList._api._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albums._list[0].id;
//         //     photoList.fetchList();
//         // });
//     } 
    
//     getItemId(el) {
//         const itemEl = el.closest('.' + this.itemClass);
//         return itemEl.dataset.itemId;
//     }

//     findItem(id) {
//         return albumList.find((obj) => obj.id === id);
//     }

//     renderList() {
//         this.listEL.innerHTML = this._list.map((e) => this.generateItemHtml(e)).join('\n');
//     }
    
//     generateItemHtml (item) {
//     return this.interpol (item)
//     }

//     interpol (obj) {
//         let templ = this.temp;
//         for (let key in obj) {
//             templ = templ.replaceAll(`{{${key}}}`, obj[key]);
//         }
//         return templ;
//     }
    
//     setPhotoApi (id) {
//         photoList._api._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
//     }


// }

// let photoList = new ItemList (
//     'https://jsonplaceholder.typicode.com/photos?albumId=',
//     '#photoList', 
//     '#photoItemTemplate',
//     'photo-item', 
//     );

// let albums = new ItemList (
//     'https://jsonplaceholder.typicode.com/albums/',
//     '#albumList', 
//     '#albumItemTemplate',
//     'album-item', 
//     );


// function init () { new Promise (() =>
//     albums.fetchList()
//     .then(id => {
//     photoList.setPhotoApi(id);
//     photoList.fetchList();
//     })
//     // .then(() => {
//     //     photoList.fetchList();
//     //     })

// ); 
//     }

// // function init () {
// //     albums.fetchList()
// //         .then ((id) => {
// //             photoList._api._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
// //             photoList.fetchList();
// //         });
                
            
// //             }

// init();

