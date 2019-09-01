import { Component, OnInit } from '@angular/core';
import { Depensecharge } from 'app/models/depensecharge';
import { Router } from '@angular/router';
import { DepensechargeService } from 'app/shared_services/depensecharge.service';
import { Tache } from 'app/models/tache';
import { TacheService } from 'app/shared_services/tache.service';

@Component({
  selector: 'app-depensechargeform',
  templateUrl: './depensechargeform.component.html',
  styleUrls: ['./depensechargeform.component.scss']
})
export class DepensechargeformComponent implements OnInit {
  private depensecharge:Depensecharge;
  private tache:Tache;

  constructor(private _router:Router, private _depensechargeService:DepensechargeService, private _tacheService:TacheService) { }

  ngOnInit() {
    this.tache = this._tacheService.getter();
    this.depensecharge = new Depensecharge();
    this.depensecharge.tache = this.tache;
  }
  processForm(){
    this._depensechargeService.createDepensecharge(this.depensecharge).subscribe(
      (response)=>{
        console.log(response);
        this._router.navigate(['listdepensescharges']);
      }, (error)=>{
        console.log(error);
      }
    );
  }
  depch(type:string){
    this.depensecharge.type = type;
  }
}
