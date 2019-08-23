import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Client } from 'app/models/client';
import { Particulier } from 'app/models/particulier';
import { Societe } from 'app/models/societe';
import { Public_association } from 'app/models/public_association';

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
  private societe:Societe;
  private public_association:Public_association;
  private particulier:Particulier;
  
  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getClients(){
    return this._http.get(this.baseUrl+'/clients/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createClientParticulier(particulier:Particulier){
    return this._http.post(this.baseUrl+'/particuliers/new', JSON.stringify(particulier), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createClientSociete(societe:Societe){
    return this._http.post(this.baseUrl+'/societes/new', JSON.stringify(societe), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createClientPublicassociation(public_association:Public_association){
    return this._http.post(this.baseUrl+'/phases_associations/new', JSON.stringify(public_association), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
}
