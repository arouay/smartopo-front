import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Phase } from 'app/models/phase';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private phase:Phase;

  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }

  getPhases(){
    return this._http.get(this.baseUrl+'/phases/all', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  createPhase(phase:Phase){
    return this._http.post(this.baseUrl+'/phases/new', JSON.stringify(phase), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatePhase(phase:Phase){
    return this._http.post(this.baseUrl+'/phases/update', JSON.stringify(phase), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deletePhase(id:number){
    return this._http.delete(this.baseUrl+'/phases/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getter(){
    return this.phase;
  }
  setter(phase:Phase){
    this.phase = phase;
  }
}
