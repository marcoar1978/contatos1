import { Http, Headers, Response } from '@angular/http';
import { Contato } from './contato.service';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

@Injectable()
export class ContatoDAO {

    http: Http;
    headers: Headers;

    constructor(http: Http) { 
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        }

    cadastra(contato:Contato):Observable<Response>{
        return this.http.post("/contato/cadastra", JSON.stringify(contato),{ headers: this.headers });  
        }    

}