import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette';


@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private recette:Recette;
  constructor(private _http:Http) { }

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getRecettes(){
    return this._http.get(this.baseUrl+'/recettes/all', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createRecette(recette:Recette){
    return this._http.post(this.baseUrl+'/recettes/new', JSON.stringify(recette), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteRecette(id:number){
    return this._http.delete(this.baseUrl+'/recettes/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
}
