import { Component, OnInit } from '@angular/core';
import { Tache } from 'app/models/tache';
import { TacheService } from 'app/shared_services/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmestaches',
  templateUrl: './listmestaches.component.html',
  styleUrls: ['./listmestaches.component.scss']
})
export class ListmestachesComponent implements OnInit {
  private allTaches:Tache[];
  private concernedTaches:Tache[] = [];

  constructor(private _tacheService:TacheService, private _router:Router) { }

  ngOnInit() {
    this._tacheService.getTaches().subscribe(
      (response)=>{
        this.allTaches = response;
        this.allTaches.forEach(element => {
          if(element.employe_responsable.email == sessionStorage.getItem('employe')){
            this.concernedTaches.push(element);
          }
        });      
      }, (error)=>{
        console.log(error);
      }
    );
  }
  addAvancement(tache:Tache){
    
  }
  newDepenseCharge(tache:Tache){
    this._tacheService.setter(tache);
    this._router.navigate(['listdepensescharges']);
  }
}
