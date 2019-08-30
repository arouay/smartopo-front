import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Tache } from 'app/models/tache';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private tache:Tache;

  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getTaches(){
    return this._http.get(this.baseUrl+'/taches/all', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createTache(tache:Tache){
    return this._http.post(this.baseUrl+'/taches/new', JSON.stringify(tache), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updateTache(tache:Tache){
    return this._http.post(this.baseUrl+'/taches/update', JSON.stringify(tache), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteTache(id:number){
    return this._http.delete(this.baseUrl+'/taches/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getter(){
    return this.tache;
  }
  setter(tache:Tache){
    this.tache = tache;
  }
}
