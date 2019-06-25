import RanvierInstance from './instance';
import WebSocket from 'ws';
import fs from 'fs';

const test: WebSocket = new WebSocket(
    'ws://localhost:8080/api/config/ws/StagingUsers'
);
test.on('open', (d: string)=>{
   console.log(d)
});
test.on('ping', (a: object)=>console.log(a, 'stuff'))
test.on('error', (err:any): void=>console.error(err));


interface RanvierInit {
    url: string,
    configDirectory: string
}
class Ranvier{
    private _baseUrl: string;
    private ranvierInstance: object;
    constructor(ranvierInit: RanvierInit ){
        let urlSplit: string[] = ranvierInit.url.split('');
        let url: string = urlSplit.join('') 
        if(urlSplit[urlSplit.length-1] === '/'){
            urlSplit.pop();
            url = urlSplit.join('') 
        }
        this._baseUrl = url;
    }
    private _cache: Map<string, object> = new Map
    public connect(urls:string[]){
        
        if(urls)urls.forEach((url:string, index: number): void=>{
            this.ranvierInstance[url] = new RanvierInstance(this._baseUrl, url);
            this.ranvierInstance[url]('error', (err:any)=>console.error(err));
        })
    }
    public disconnect(){

    }
    public query(query:string){

    }
};

// const client: Ranvier = new Ranvier({url:'ws:localhost:8080/api/config/', configDirectory:'/'});
