import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Admin } from 'app/models/admin';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private admin:Admin;  
  
  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getAdmins(){
    return this._http.get(this.baseUrl+'/admins/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updateAdmin(admin:Admin){
    return this._http.put(this.baseUrl+'/admins/update', JSON.stringify(admin), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getter(){
    return this.admin;
  }  
  setter(admin:Admin){
    this.admin = admin;
  }
}
