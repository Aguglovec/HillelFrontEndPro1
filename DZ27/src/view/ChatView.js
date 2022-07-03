import $ from 'jquery';
import MsgForm from './MsgForm';
import MsgList from './MsgList';

export default class ChatView {
    static template = '<div class="u-full-width u-full-height"></div>';
    constructor($container, chat) {

        this._chat = chat;
        this.init();
        this.$el.appendTo($container);

        this._$listView = new MsgList(this._chat);
        this.$el.append(this._$listView.$el);

        this._$formView = new MsgForm();
        this.$el.append(this._$formView.$el);

        this._$formView.on('save', this.sendMsg);
        this._chat.on('msg', this.incomingMsg);

    }

    init() {
        this.$el = $(ChatView.template);
    }

    sendMsg = (data) => {
        this._chat.sendMsg(data);
    };

    incomingMsg = (data) =>  {
        this._$listView.renderMsg(data);
    }


}
