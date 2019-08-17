import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs';
import { error } from 'util';
import { TypeProjet } from 'app/models/typeprojet';

@Injectable({
  providedIn: 'root'
})
export class TypeprojetService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private typeProjet:TypeProjet;
  constructor(private _http:Http) { }
  
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  getTypes(){
    return this._http.get(this.baseUrl+'/typeprojets/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createType(typeProjet:TypeProjet){
    return this._http.post(this.baseUrl+'/typeprojets/new', JSON.stringify(typeProjet), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteType(id:number){
    return this._http.delete(this.baseUrl+'/typeprojets/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
}
