import $ from 'jquery';
import EventEmitter from '../EventEmitter';

export default class MsgForm extends EventEmitter {
    static template = `
    <div id="errorMsg" class="error"></div>
        <form class="row">
            <div ><input type="text" name="author" class="two columns" /><input type="text" name="message" class="eight columns"/></div>
            <div class="two columns"><button type="submit" id="sendBtn">Send</button></div>
        </form>`;

    static ERROR_SELECTOR = '#errorMsg';
    static SEND_BTN_SELECTOR = '#sendBtn';
    static INPUT_MSG_SELECTOR = "input[name=message]";
    static INPUT_NAME_SELECTOR = "input[name=author]";
    
    constructor() {
        super();

        this.init();
    }

    init() {
        this.$el = $(MsgForm.template);

        this.$el.on('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const formData = this._getFormData();
            this.trigger('save', formData);
            this.reset();
        });

        this.$el.on('input', (e) => {
            e.preventDefault();
            this.isValid(e.target.value)
            }
        );

        this.$el.find(MsgForm.INPUT_NAME_SELECTOR).val(prompt('What is your name?'));
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
        $(MsgForm.INPUT_MSG_SELECTOR).val('');
    }

    isValid (string) {
        if (string.length < 1) {
            this.errorMsg('Message is too short');
            $(MsgForm.SEND_BTN_SELECTOR).prop( "disabled", true);
            return false;
        } 
    
        $(MsgForm.SEND_BTN_SELECTOR).prop( "disabled", false);
        this.errorMsg("");
        return true;
    }
    
    errorMsg(error) {
        $(MsgForm.ERROR_SELECTOR).html(error);
    }


}
