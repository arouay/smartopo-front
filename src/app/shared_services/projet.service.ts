import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Projet } from 'app/models/projet';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private projet:Projet;
  constructor(private _http:Http) { }

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getProjets(){
    return this._http.get(this.baseUrl+'/projets/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createProjet(projet:Projet){
    return this._http.post(this.baseUrl+'/projets/new', JSON.stringify(projet), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatProjet(projet:Projet){
    return this._http.put(this.baseUrl+'/projets/update', JSON.stringify(projet), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteProjet(id:number){
    return this._http.delete(this.baseUrl+'/projets/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  setter(projet:Projet){
    this.projet = projet;
  }
  getter(){
    return this.projet;
  }
}
