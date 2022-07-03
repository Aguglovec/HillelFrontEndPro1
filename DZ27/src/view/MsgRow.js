import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import interpolate from '../../../common/js/utils';

export default class MsgRow extends EventEmitter {
    static template = `<div class="row"></div>`;

    static msgTemplate = `<div class="two columns listItem ">{{author}}:</div>
    <div class="ten columns">{{message}}</div>`;

    static itemSelector = '.listItem';

    constructor(model) {
        super();

        this._model = model;

        this.init();
    }

    init() {
        this.$el = $(MsgRow.template);
        this.renderRow();

    }

    renderRow() {
        this.$el.empty();
        this.$el.html(interpolate(MsgRow.msgTemplate, this._model));
    }


}
