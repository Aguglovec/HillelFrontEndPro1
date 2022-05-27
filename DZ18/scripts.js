"use strict";

//Сделал 2 варианта: через функции и через класс.
// Это через функции:

// const MEMO_CLASS = 'memo';
// const DEL_CLASS = 'deleteBtn';

// const memoApi = new RespApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/');
// const memoListEL = document.querySelector("#memoList");
// const memoTemplate = document.querySelector("#memoItemTemplate").innerHTML;
// const newMemoBtnEl = document.querySelector("#newMemoButton");

// newMemoBtnEl.addEventListener('click', onAddNewClick);
// memoListEL.addEventListener("click", onDelClick);
// memoListEL.addEventListener('change', onItemUpdate);

// let itemList = [];


// init();

// function onAddNewClick () {
//     const obj =  {
//         description: 'new memo',
//     };
//     memoApi.create(obj)
//     .then ((data) =>{
//         itemList.push(data);
//         renderList(itemList, memoListEL, memoTemplate);
//     })
// }

// function onDelClick(e) {
//     if (e.target.classList.contains('DEL_CLASS'))
//         {const id = +getItemId(e);
//         memoApi.delete(id)
//             .then (() => {
//                 fetchItemList();
//             })
//     }
// }

// function onItemUpdate (e) {
//     const id = getItemId(e);
//     const item = findItem(id)
//     item.description = e.target.value;
//     memoApi.update(item);
// }

// function init() {
//     fetchItemList()
// }

// function fetchItemList() {
//     memoApi.getList()
//     .then ((data) => {
//         itemList = data;
//         renderList(itemList, memoListEL, memoTemplate);
//     })
// } 

// function getItemId(el) {
//     const itemEl = el.target.closest('.'+MEMO_CLASS);
//     return itemEl.dataset.itemId;
// }

// function findItem(id) {
//     return itemList.find((obj) => obj.id === id);
// }

// function renderList(list, listEL, htmlTempalate) {
//     listEL.innerHTML = list.map((e) => interpolate(htmlTempalate, e)).join('\n');
// }






// А это вариант через класс:
class MemoList {
    
    constructor(baseUrl, listEL, template, itemClass, delBtnClass, newMemoSelector) {
        this.init(baseUrl, listEL, template, itemClass, delBtnClass, newMemoSelector);
    }

    init (baseUrl, listEL, template, itemClass, delBtnClass, newMemoSelector) {
        this._api = new RespApi(baseUrl);
        this.delBtnClass = delBtnClass;
        this._list = [];
        this.listEL = document.querySelector(listEL);
        this.newMemoBtnEl = document.querySelector(newMemoSelector);
        this.temp = document.querySelector(template).innerHTML;
        this.itemClass = itemClass;
        this.listEL.addEventListener('click', (e) => this.onDelClick(e));
        this.listEL.addEventListener('change', (e) => this.onItemUpdate(e));
        this.newMemoBtnEl.addEventListener('click', () => this.onAddNewClick());
        this.fetchList()
    }


    onDelClick(e) {
        const target = e.target;
                if (target.classList.contains(this.delBtnClass)) {
            console.log (target.classList);
            const id = +this.getItemId(target);
            this._api.delete(id)
            .then (() => {
                this.fetchList();
        })
        
    }
}

    onItemUpdate (e) {
        const id = this.getItemId(e.target);
        const item = this.findItem(id)
        item.description = e.target.value;
        this._api.update(item)
        .then(() => {
            this.fetchList();
        });
    }


    onAddNewClick () {
        const obj =  {
            description: 'new memo',
        };
        this._api.create(obj)
        .then ((data) =>{
            this._list.push(data);
            this.renderList();
        })
    }

    fetchList() {
        return this._api.getList()
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
        return this._list.find((obj) => obj.id === id);
    }

    renderList() {
        this.listEL.innerHTML = this._list.map((e) => this.generateItemHtml(e)).join('\n');
    }
    
    generateItemHtml (item) {
    return interpolate (this.temp, item)
    }

}





let memoDesk = new MemoList (
    'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/',
    '#memoList', 
    '#memoItemTemplate',
    'memo',
    'deleteBtn', 
    "#newMemoButton",
    );

