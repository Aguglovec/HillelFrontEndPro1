"use strict";

// const ALBUM_CLASS = 'album-item';
// const PHOTO_CLASS = 'photo-item';

// const albumsApi = new RespApi('https://jsonplaceholder.typicode.com/albums/');
// const photosApi = new RespApi('https://jsonplaceholder.typicode.com/photos?albumId=');

// const albumListEL = document.querySelector("#albumList");
// const photoListEL = document.querySelector("#photoList");
// const bigEL = document.querySelector("#bigPhoto");

// const albumTemplate = document.querySelector("#albumItemTemplate").innerHTML;
// const photoTemplate = document.querySelector("#photoItemTemplate").innerHTML;
// const photoBigTemplate = document.querySelector("#photoBigTemplate").innerHTML;

// albumListEL.addEventListener("click", onAlbumClick);
// photoListEL.addEventListener("click", onPhotoClick);
// bigEL.addEventListener("click", onBigClick);

// let albumList = [];
// let photoList = [];

// init();


// function onAlbumClick(e) {
//     const id = +getItemId(e.target, ALBUM_CLASS);
//     setPhotosApi (id); 
//     console.log(photosApi._baseUrl);
//     fetchPhotoList();
// }

// function onPhotoClick(e) {
//     const id = +getItemId(e.target, PHOTO_CLASS);
//     bigEL.innerHTML = interpolate(photoBigTemplate, findPhotoItem(id));
//     bigEL.classList.toggle('hidden');
// }

// function onBigClick(e) {
//     bigEL.classList.toggle('hidden');
//     bigEL.innerHTML = '';
// }


// function init() {
//     fetchAlbumList()
// }

// function fetchAlbumList() {
//     albumsApi.getList()
//     .then ((data) => {
//         albumList = data;
//         renderList(albumList, albumListEL, albumTemplate);
//     })
//     .then  (() => {
//         setPhotosApi (albumList[0].id);
//         fetchPhotoList();
//     })
// } 

// function fetchPhotoList() {
//     photosApi.getList()
//     .then ((data) => {
//         photoList = data;
//         renderList(photoList, photoListEL, photoTemplate);
//     });
// }

// function setPhotosApi (id) {
//     photosApi._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
// }

// function getItemId(el, listClass) {
//     const itemEl = el.closest('.'+listClass);
//     return itemEl.dataset.itemId;
// }

// function findPhotoItem(id) {
//     return photoList.find((obj) => obj.id === id);
// }

// function renderList(list, listEL, htmlTempalate) {
//     listEL.innerHTML = list.map((e) => interpolate(htmlTempalate, e)).join('\n');
// }





// albumListEL.addEventListener("click", onAlbumClick);
// photoListEL.addEventListener("click", onPhotoClick);
// bigEL.addEventListener("click", onBigClick);

// function onAlbumClick(e) {
//         const id = +getItemId(e.target, ALBUM_CLASS);
//         setPhotosApi (id); 
//         console.log(photosApi._baseUrl);
//         fetchPhotoList();
//     }
    
//     function onPhotoClick(e) {
//         const id = +getItemId(e.target, PHOTO_CLASS);
//         bigEL.innerHTML = interpolate(photoBigTemplate, findPhotoItem(id));
//         bigEL.classList.toggle('hidden');
//     }
    
//     function onBigClick(e) {
//         bigEL.classList.toggle('hidden');
//         bigEL.innerHTML = '';
//     }



class ItemList {
    constructor(baseUrl, listEL, template, itemClass) {
        this._baseUrl = baseUrl;
        this._api = baseUrl;
        this._list = [];
        this.listEL = document.querySelector(listEL);
        this.temp = document.querySelector(template).innerHTML;
        this.listEL.addEventListener("click", (e) => this.onItemClick);
        this.itemClass = itemClass;
    }

    onItemClick(e) {
        // console.log(e.target); // <div class="album-item" data-item-id="5">eaque aut omnis a</div>
        // console.log(itemClass()); // выводит undefined. Почему?
        // itemClass (e.target);
        // const clickedId = e.target.closest(itemClass());

        const clickedId = e.target.dataset.itemId;
        photoList.setApi(clickedId);
        photoList.fetchList();
        
    }

    itemClass (target) {
        const clickedId = getItemId(target);
        photoList.setApi(clickedId);
        photoList.fetchList();
    }

    fetchList() {
        return fetch(this._api).then((res) => res.json())
        .then ((data) => {
            this._list = data;
            this.renderList();
        })
    } 
    
    getItemId(el) {
        const itemEl = el.closest('.' + this.itemClass);
        return itemEl.dataset.itemId;
    }

    findItem(id) {
        return albumList.find((obj) => obj.id === id);
    }

    renderList() {
        this.listEL.innerHTML = this._list.map((e) => this.generateItemHtml(e)).join('\n');
    }
    
    generateItemHtml (item) {
    return this.interpol (item)
    }

    interpol (obj) {
        let templ = this.temp;
        for (let key in obj) {
            templ = templ.replaceAll(`{{${key}}}`, obj[key]);
        }
        return templ;
    }
    
    setApi (id) {
        this._api = this._baseUrl + id;
    }


}





let albums = new ItemList (
    'https://jsonplaceholder.typicode.com/albums/',
    '#albumList', 
    '#albumItemTemplate',
    'album-item', 
    );

    let photoList = new ItemList (
        'https://jsonplaceholder.typicode.com/photos?albumId=',
        '#photoList', 
        '#photoItemTemplate',
        'photo-item', 
        );


init();

function init () {
    albums.fetchList()
    .then (() => {
        photoList.setApi(albums._list[0].id);
        photoList.fetchList();
    });
}



