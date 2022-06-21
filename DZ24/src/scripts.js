"use strict";

import './styles.css';
import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';
import './index.html';
import {fetchPhotoList, photosApi} from './photolist.js';
import RespApi from '../../common/js/RestApi.js';
import interpolate from '../../common/js/utils.js';

const ALBUM_CLASS = 'album-item';
const albumsApi = new RespApi('https://jsonplaceholder.typicode.com/albums/');
const albumListEL = document.querySelector("#albumList");
const albumTemplate = document.querySelector("#albumItemTemplate").innerHTML;
albumListEL.addEventListener("click", onAlbumClick);
let albumList = [];

init();

function onAlbumClick(e) {
    const id = +getItemId(e.target, ALBUM_CLASS);
    setPhotosApi (id); 
    console.log(photosApi._baseUrl);
    fetchPhotoList();
}

export default function init() {
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

export function getItemId(el, listClass) {
    const itemEl = el.closest('.'+listClass);
    return itemEl.dataset.itemId;
}

export function renderList(list, listEL, htmlTempalate) {
    listEL.innerHTML = list.map((e) => interpolate(htmlTempalate, e)).join('\n');
}
