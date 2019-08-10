import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Employe } from 'app/models/employe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private employe:Employe;
  constructor(private _http:Http) { }

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getEmployes(){
    return this._http.get(this.baseUrl+'/employes/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createEmploye(employe:Employe){
    return this._http.post(this.baseUrl+'/employes/new', JSON.stringify(employe), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatEmploye(employe:Employe){
    return this._http.put(this.baseUrl+'/employes/update', JSON.stringify(employe), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteEmploye(id:number){
    return this._http.delete(this.baseUrl+'/employes/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  setter(employe:Employe){
    this.employe = employe;
  }
  getter(){
    return this.employe;
  }
}
