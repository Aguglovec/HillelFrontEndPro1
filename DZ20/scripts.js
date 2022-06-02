"use strict";

//Переписал на jQuery, добавил плагин и удалил слой с данными

const ALBUM_SELECTOR = '.album-item';
const PHOTO_SELECTOR = '.photo-item'
const PHOTOLIST_ID = '#photoList';


const albumsApi = new RespApi('https://jsonplaceholder.typicode.com/albums/');
const photosApi = new RespApi('https://jsonplaceholder.typicode.com/photos?albumId=');

const $albumListEL = $('#albumList');
const $photoListEL = $('#photoList');


const $albumTemplate = $("#albumItemTemplate").html();
const $photoTemplate = $("#photoItemTemplate").html();


$albumListEL.on("click", onAlbumClick);


init();


function onAlbumClick(e) {
    const $target = $(e.target);
    const id = getItemId($target, ALBUM_SELECTOR);
    setPhotosApi (id); 
    fetchPhotoList();
}

function init() {
    fetchAlbumList()
}

function fetchAlbumList() {
    albumsApi.getList()
    .then ((data) => {
        renderList(data, $albumListEL, $albumTemplate);
        setPhotosApi (data[0].id);
        fetchPhotoList();
    })
} 

function setPhotosApi (id) {
    photosApi._baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + id;
}

function fetchPhotoList() {
    photosApi.getList()
    .then ((data) => {
        renderList(data, $photoListEL, $photoTemplate);
        lightGallery ($(PHOTOLIST_ID)[0], {
            selector: PHOTO_SELECTOR,
            plugins: [lgZoom, lgThumbnail],
            licenseKey: 'ggg',
        });
    });
}

function getItemId($el, listSelector) {
    const itemEl = $el.closest(listSelector);
    return String(itemEl.data('itemId'));
}

function renderList(list, $listEL, $htmlTempalate) {
    $listEL.html(list.map((e) => interpolate($htmlTempalate, e)).join(''));
}
