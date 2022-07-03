import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import MsgRow from './MsgRow';

export default class MsgList extends EventEmitter {
    static template = `<div class="list">
        <div class="row">
            <div class="two columns">User</div>
            <div class="ten columns">Message</div>
        </div>
        <div class="list-container"></div>
    </div>`;

    static containerSelector = '.list-container';

    constructor(collection) {
        super();
        this.init();
    }

    init() {
        this.$el = $(MsgList.template);
        this._$listContainer = this.$el.find(MsgList.containerSelector);
    }


    renderMsg = (model) => {
        this._$listContainer.append(this._wrapRow(model).$el);
    };

    _wrapRow(model) {
        const rowView = new MsgRow(model);

        return rowView;
    }
}
