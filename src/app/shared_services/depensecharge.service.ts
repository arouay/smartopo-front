import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Depensecharge } from 'app/models/depensecharge';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepensechargeService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private depensecharge:Depensecharge;
  constructor(private _http:Http) { }

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getDepensecharges(){
    return this._http.get(this.baseUrl+'/depences_charges/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createDepensecharge(depencecharge:Depensecharge){
    return this._http.post(this.baseUrl+'/depences_charges/new', JSON.stringify(depencecharge), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatDepensecharge(depencecharge:Depensecharge){
    return this._http.put(this.baseUrl+'/depences_charges/update', JSON.stringify(depencecharge), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteDepensecharge(id:number){
    return this._http.delete(this.baseUrl+'/empldepences_chargesoyes/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  setter(depencecharge:Depensecharge){
    this.depensecharge = depencecharge;
  }
  getter(){
    return this.depensecharge;
  }
}
