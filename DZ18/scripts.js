"use strict";

const MEMO_CLASS = 'memo';

const memoApi = new RespApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/');
const memoListEL = document.querySelector("#memoList");
const memoTemplate = document.querySelector("#memoItemTemplate").innerHTML;
const  newMemoBtnEl = document.querySelector("#newMemoButton");

newMemoBtnEl.addEventListener('click', onAddNewClick);
memoListEL.addEventListener("click", onDelClick);
memoListEL.addEventListener('change', onItemUpdate);

let itemList = [];


init();

function onAddNewClick () {
    const obj =  {
        description: 'new memo',
    };
    memoApi.create(obj)
    .then ((data) =>{
        itemList.push(data);
        renderList(itemList, memoListEL, memoTemplate);
    })
}

function onDelClick(e) {
    if (e.target.classList.contains('deleteBtn'))
        {const id = +getItemId(e);
        memoApi.delete(id)
            .then (() => {
                fetchItemList();
            })
    }
}

function onItemUpdate (e) {
    const id = getItemId(e);
    const item = findItem(id)
    item.description = e.target.value;
    memoApi.update(item);
}

function init() {
    fetchItemList()
}

function fetchItemList() {
    memoApi.getList()
    .then ((data) => {
        itemList = data;
        renderList(itemList, memoListEL, memoTemplate);
    })
} 

function getItemId(el) {
    const itemEl = el.target.closest('.'+MEMO_CLASS);
    return itemEl.dataset.itemId;
}

function findItem(id) {
    return itemList.find((obj) => obj.id === id);
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
//         this.listEL.addEventListener('click', (e) => this.onDelClick(e));
//         this.listEL.addEventListener('change', (e) => this.onItemUpdate(e));
//         this.itemClass = itemClass;
//         this.newMemoBtnEl = document.querySelector("#newMemoButton");
//         this.newMemoBtnEl.addEventListener('click', () => this.onAddNewClick());
//     }


//     onDelClick(e) {
//         console.log (e);
//                 if (e.target.classlist.contains('.deleteBtn')) {
//             console.log (e);
//             // this.onDelBtnClick(e);
//         }
        
//     }

//     onItemUpdate (e) {
//         console.log ("change");
//         console.log (e);
//         const id = this.getItemId(e);
//         console.log (id);
//     }


//     onAddNewClick () {
//         const obj =  {
//             description: 'new memo 3',
//         };
//         this._api.create(obj)
//         .then ((data) =>{
//             this._list.push(data);
//             this.renderList();
//         })
//     }

//     itemClass (target) {
//         const clickedId = getItemId(target);
//         photoList.setApi(clickedId);
//         photoList.fetchList();
//     }

//     fetchList() {
//         return this._api.getList()
//         .then ((data) => {
//             this._list = data;
//             this.renderList();
//         })
//     } 
    
//     getItemId(el) {
//         const itemEl = el.closest('.' + this.itemClass);
//         return itemEl.dataset.itemId;
//     }

//     findItem(id) {
//         return itemList.find((obj) => obj.id === id);
//     }

//     renderList() {
//         this.listEL.innerHTML = this._list.map((e) => this.generateItemHtml(e)).join('\n');
//     }
    
//     generateItemHtml (item) {
//     return interpolate (this.temp, item)
//     }

// }





// let memoDesk = new ItemList (
//     'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/',
//     '#memoList', 
//     '#memoItemTemplate',
//     'memo', 
//     );



// init();

// function init () {
//     memoDesk.fetchList()
// }
