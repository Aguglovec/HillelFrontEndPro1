import $ from 'jquery';
import EventEmitter from '../EventEmitter';

export default class TodosForm extends EventEmitter {
    static template = `
    <div id="errorMsg" class="error"></div>
        <form class="row">
            <div class="eight columns"><input type="hidden" name="id" /><input type="text" name="title" /></div>
            <div class="four columns"><button type="submit" id="addBtn">Save</button></div>
        </form>`;

    static ERROR_SELECTOR = '#errorMsg';
    static SAVE_BTN_SELECTOR = '#addBtn';
    
    constructor() {
        super();

        this.init();
    }

    init() {
        this.$el = $(TodosForm.template);
        this.$el.on('submit', (e) => {
            e.preventDefault();
            const formData = this._getFormData();
            this.trigger('save', formData);
            this.reset();
        });
        this.$el.on('input', (e) => {
            e.preventDefault();
            this.isValid(e.target.value)
            }
        );

        this._$inputs = this.$el.find('input');
    }

    _getFormData() {
        const formData = {};

        this.$el
            .serializeArray()
            .forEach(({ name, value }) => {
                    formData[name] = value
                });
            return formData
    }

    reset() {
        this._$inputs.each((_, input) => {
            input.value = '';
        });
    }

    isValid (string) {
        if (string.length < 4) {
            this.errorMsg(string + ' is too short');
            $(TodosForm.SAVE_BTN_SELECTOR).prop( "disabled", true);
            return false;
        } 
    
        $(TodosForm.SAVE_BTN_SELECTOR).prop( "disabled", false);
        this.errorMsg("");
        return true;
    }
    
    errorMsg(error) {
        $(TodosForm.ERROR_SELECTOR).html(error);
    }


}
