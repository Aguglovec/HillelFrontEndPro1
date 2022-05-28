"use strict";

class MemoList {
    
    constructor(baseUrl, listEL, template, itemClass, delBtnClass, newMemoSelector) {
        this.init(baseUrl, listEL, template, itemClass, delBtnClass, newMemoSelector);
    }

    init (baseUrl, listEL, template, itemClass, delBtnClass, newMemoSelector) {
        this._api = new RespApi(baseUrl);

        this.delBtnClass = delBtnClass;
        this.itemClass = itemClass;
        
        this.$listEL = $(listEL);
        this.$newMemoBtnEl = $(newMemoSelector);
        this.$tempEL = $(template).html();

        this.$listEL.on('click', '.' + this.delBtnClass, (e) => this.onDelClick(e));
        this.$listEL.on('input', debounce((e) => this.onItemUpdate(e)));
        this.$newMemoBtnEl.on('click', () => this.onAddNewClick());
        
        this._list = [];

        this.fetchList();
    }


    onDelClick(e) {
        const $el = $(e.target);
        const id = this.getItemId($el);
        this._api.delete(id)
            .then (() => {
                e.target.closest('.' + this.itemClass).remove();
                console.log('Item #' + id + ' deleted successfully');
        })
}

    onItemUpdate (e) {
        const $el = $(e.target);
        const id = this.getItemId($el);
        const item = this.findItem(id)
        item.description = $el.val();
        this._api.update(item)
        .then(() => {
            console.log('Item #' + id + ' updated successfully');
        })
        .catch(() => {
            console.log('Update on item #' + id + ' failed');
        });
    }

    onAddNewClick () {
        const obj =  {
            description: 'new memo',
        };
        this._api.create(obj)
        .then ((data) =>{
            this._list.push(data);
            this.$listEL.append(this.generateItemHtml(data));
            console.log('item #' + data.id + ' created successfully');
        })
    }

    fetchList() {
        return this._api.getList()
        .then ((data) => {
            this._list = data;
            this.renderList();
        })
    } 
    
    getItemId($el) {
        const $itemEl = $el.closest('.' + this.itemClass);
        return String($itemEl.data('itemId'));
    }

    findItem(id) {
        return this._list.find((obj) => obj.id === id);
    }

    renderList() {
        this.$listEL.html(this._list.map((e) => this.generateItemHtml(e)).join('\n'));
    }
    
    generateItemHtml (item) {
    return interpolate (this.$tempEL, item)
    }

    deleteItem(id) {
        const element = $(`[data-note-index="${this.getItemId(id)}"]`);
    
        element && element.remove();
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

