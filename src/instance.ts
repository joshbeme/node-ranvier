import WebSocket from 'ws';




export default class instance{
    private ws:WebSocket;

    constructor(baseUrl: string, url: string){
        this.ws = new WebSocket(baseUrl+url);
    };
    
}