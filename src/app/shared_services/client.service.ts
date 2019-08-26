import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Client } from 'app/models/client';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private client:Client;  
  
  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getClients(){
    return this._http.get(this.baseUrl+'/clients/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createClient(client:Client){
    return this._http.post(this.baseUrl+'/clients/new', JSON.stringify(client), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
}
