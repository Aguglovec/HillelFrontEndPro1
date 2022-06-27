import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import interpolate from '../../../common/js/utils';

export default class TodoRow extends EventEmitter {
    static template = `
        <div class="row">
        </div>
`;

    static todoTemplate = `<div class="eight columns listItem ">{{title}}</div>
    <div class="four columns">
        <button class="delete-btn">Delete</button>
    </div>`;

    static deleteButtonSelector = '.delete-btn';
    static itemSelector = '.listItem';
    static doneClass = 'taskDone'
    constructor(model) {
        super();

        this._model = model;
        console.dir(this._model);
        this._model.on('delete', this.deleteRow);
        this._model.on('update', this.updateRow);

        this.init();
    }

    init() {
        this.$el = $(TodoRow.template);
        this.renderRow();
        this.$el.on('click', TodoRow.deleteButtonSelector, () =>
            this._model.delete(),
        );
        this.$el.on('click', TodoRow.itemSelector, () =>
            this.trigger('toggle', this._model),
        );
    }

    renderRow() {
        this.$el.empty();
        this.$el.html(interpolate(TodoRow.todoTemplate, this._model));
        this._model.isDone ? this.$el.find(TodoRow.itemSelector).addClass(TodoRow.doneClass) : this.$el;
    }

    deleteRow = () => {
        this.$el.remove();
    };

    updateRow = () => {
        this.renderRow();
    };
}
