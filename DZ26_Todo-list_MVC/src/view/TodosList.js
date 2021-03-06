import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import TodoRow from './TodoRow';

export default class TodosList extends EventEmitter {
    static template = `<div class="list">
        <div class="row">
            <div class="eight columns">Tasks to do</div>
            <div class="four columns">Actions</div>
        </div>
        <div class="list-container"></div>
    </div>`;

    static containerSelector = '.list-container';

    constructor(collection) {
        super();
        this._collection = collection;

        this._collection.on('update', this.renderList);
        this._collection.on('add', this.renderTodo);
        this.init();
    }

    init() {
        this.$el = $(TodosList.template);
        this._$listContainer = this.$el.find(TodosList.containerSelector);
    }

    renderList = (list) => {
        console.log(list);
        this._$listContainer.append(
            list.map((model) => this._wrapRow(model).$el),
        );
    };

    renderTodo = (model) => {
        this._$listContainer.append(this._wrapRow(model).$el);
    };

    _wrapRow(model) {
        const rowView = new TodoRow(model);

        return rowView;
    }
}
