import { Component, OnInit } from '@angular/core';
import { Depensecharge } from 'app/models/depensecharge';
import { Router } from '@angular/router';
import { DepensechargeService } from 'app/shared_services/depensecharge.service';
import { Tache } from 'app/models/tache';
import { TacheService } from 'app/shared_services/tache.service';

@Component({
  selector: 'app-listdepensecharge',
  templateUrl: './listdepensecharge.component.html',
  styleUrls: ['./listdepensecharge.component.scss']
})
export class ListdepensechargeComponent implements OnInit {
  private alldepensecharges:Depensecharge[];
  private concernedDepensecharges:Depensecharge[] = [];
  private tache:Tache;

  constructor(private _router:Router,private _serviceDepensecharge:DepensechargeService, private _tacheService:TacheService) { }

  ngOnInit() {
    this.tache = this._tacheService.getter();
    this._serviceDepensecharge.getDepensecharges().subscribe(
      (response)=>{
        this.alldepensecharges = response;
        this.alldepensecharges.forEach(element => {
          if(element.tache.id == this.tache.id){
            this.concernedDepensecharges.push(element);
          }
        });
      }, (error)=>{
        console.log(error);
      }
    );
  }
  newDepensecharge(){
    this._router.navigate(['depensechargeform']);
  }
  updateDepensecharge(depensecharge:Depensecharge){

  }
  deleteDepensecharge(depensecharge:Depensecharge){

  }
}
