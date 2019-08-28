import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs';
import { error } from 'util';
import { Livrable } from 'app/models/livrable';


@Injectable({
  providedIn: 'root'
})
export class LivrableService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private livrable:Livrable;
  constructor(private _http:Http) { }
  
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  getLivrables(){
    return this._http.get(this.baseUrl+'/livrables/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createLivrable(livrable:Livrable){
    return this._http.post(this.baseUrl+'/livrables/new', JSON.stringify(livrable), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteLivrable(id:number){
    return this._http.delete(this.baseUrl+'/livrables/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }}
