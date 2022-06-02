"use strict";

const ALBUM_SELECTOR = '.album-item';
const PHOTO_SELECTOR = '.photo-item';

const albumsApi = new RespApi('https://jsonplaceholder.typicode.com/albums/');
const photosApi = new RespApi('https://jsonplaceholder.typicode.com/photos?albumId=');

const albumListEL = $('#albumList');
const photoListEL = $('#photoList');


const albumTemplate = $("#albumItemTemplate").html();
const photoTemplate = $("#photoItemTemplate").html();


albumListEL.on("click", onAlbumClick);

let albumList = [];
let photoList = [];

init();


function onAlbumClick(e) {
    const $target = $(e.target);
    const id = getItemId($target, ALBUM_SELECTOR);
    setPhotosApi (id); 
    console.log(photosApi._baseUrl);
    fetchPhotoList();
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

function setPhotosApi (id) {
    photosApi._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
}

function fetchPhotoList() {
    photosApi.getList()
    .then ((data) => {
        photoList = data;
        renderList(photoList, photoListEL, photoTemplate);
        lightGallery (document.getElementById('photoList'), {
            selector: '.photo-item',
            plugins: [lgZoom, lgThumbnail],
            licenseKey: '0000-0000-000-0000',
        });
    });
}

function getItemId(el, listSelector) {
    const itemEl = el.closest(listSelector);
    console.log(itemEl.data.itemId);
    return String(itemEl.data.itemId);
}

function renderList(list, listEL, htmlTempalate) {
    listEL.html(list.map((e) => interpolate(htmlTempalate, e)).join(''));
}



