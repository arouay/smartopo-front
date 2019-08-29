import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Materiel } from 'app/models/materiel';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private materiel:Materiel;
  constructor(private _http:Http) { }

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getMateriels(){
    return this._http.get(this.baseUrl+'/materiels/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createMateriel(materiel:Materiel){
    return this._http.post(this.baseUrl+'/materiels/new', JSON.stringify(materiel), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatMateriel(materiel:Materiel){
    return this._http.put(this.baseUrl+'/materiels/update', JSON.stringify(materiel), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteMateriel(id:number){
    return this._http.delete(this.baseUrl+'/materiels/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  setter(materiel:Materiel){
    this.materiel = materiel;
  }
  getter(){
    return this.materiel;
  }
}
