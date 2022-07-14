import { WEBSOCKET_URL } from '../config';
import WebSocketChat from '../model/WebSocketChat';
import ChatView from '../view/ChatView';

export default class ChatController {
    constructor($container) {
        console.log('controller started', $container);

        this._chat = new WebSocketChat(WEBSOCKET_URL);
        this._view = new ChatView($container, this._chat);

    }
}
