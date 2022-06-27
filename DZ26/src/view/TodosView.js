import $ from 'jquery';
import TodosForm from './TodosForm';
import TodosList from './TodosList';

export default class TodosView {
    static template = '<div class="u-full-width u-full-height"></div>';
    constructor($container, collection) {
        this._collection = collection;
        this.init();
        this.$el.appendTo($container);

        this._$listView = new TodosList(collection);
        this.$el.append(this._$listView.$el);

        this._$listView.on('toggle', this.toggleModel);

        this._$formView = new TodosForm();
        this.$el.append(this._$formView.$el);

        this._$formView.on('save', this.saveData);
    }

    init() {
        this.$el = $(TodosView.template);
    }

    saveData = (data) => {
        if (data.id) {
            const model = this._collection.get(data.id);

            model.set(data);

            model.save();
        } else {
            this._collection.createTodo(data);
        }
    };

    toggleModel = (model) => {
        this._collection.toggleTodo(model);
    };
}
