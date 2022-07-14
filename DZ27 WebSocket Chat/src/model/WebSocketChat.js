import EventEmitter from '../EventEmitter';


export default class WebSocketChat extends EventEmitter {
    constructor(webSocketUrl) {
        super();
        this._url = webSocketUrl;
        this.initConnection();

    }

    initConnection () {
        this.socket = new WebSocket (this._url);
        this.socket.onopen = () => {
            console.log("Connection established");
        };

        this.socket.onclose = () => {
            this.initConnection();
        };

        this.socket.onerror = () => {
            console.log("Connection error");
            this.initConnection();
            };

        this.socket.onmessage = this.onMessage;

    }        

    onMessage = ({data}) => {
        const payload = JSON.parse(data).payload;
        this.trigger('msg', payload);
    }

    sendMsg(data) {
        const msg = {
            action: 'message',
            payload: data
        }
        this.socket.send (JSON.stringify(msg));
    }

}
