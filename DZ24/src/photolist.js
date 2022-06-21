"use strict";

import RespApi from '../../common/js/RestApi.js';
import interpolate from '../../common/js/utils.js';
import {renderList, getItemId} from './scripts.js';

const PHOTO_CLASS = 'photo-item';
export const photosApi = new RespApi('https://jsonplaceholder.typicode.com/photos?albumId=');
const photoListEL = document.querySelector("#photoList");
const bigEL = document.querySelector("#bigPhoto");
const photoTemplate = document.querySelector("#photoItemTemplate").innerHTML;
const photoBigTemplate = document.querySelector("#photoBigTemplate").innerHTML;
photoListEL.addEventListener("click", onPhotoClick);
bigEL.addEventListener("click", onBigClick);
let photoList = [];

function onPhotoClick(e) {
    const id = +getItemId(e.target, PHOTO_CLASS);
    bigEL.innerHTML = interpolate(photoBigTemplate, findPhotoItem(id));
    bigEL.classList.toggle('hidden');
}

function onBigClick(e) {
    bigEL.classList.toggle('hidden');
    bigEL.innerHTML = '';
}

export function fetchPhotoList() {
    photosApi.getList()
    .then ((data) => {
        photoList = data;
        renderList(photoList, photoListEL, photoTemplate);
    });
}

function findPhotoItem(id) {
    return photoList.find((obj) => obj.id === id);
}