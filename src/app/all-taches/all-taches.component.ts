import { Component, OnInit } from '@angular/core';
import { Tache } from 'app/models/tache';
import { Phase } from 'app/models/phase';
import { Router } from '@angular/router';
import { TacheService } from 'app/shared_services/tache.service';
import { PhaseService } from 'app/shared_services/phase.service';
import { Employe } from 'app/models/employe';
import { EmployeService } from 'app/shared_services/employe.service';
import { Projet } from 'app/models/projet';
import { ProjetService } from 'app/shared_services/projet.service';

@Component({
  selector: 'app-all-taches',
  templateUrl: './all-taches.component.html',
  styleUrls: ['./all-taches.component.scss']
})
export class AllTachesComponent implements OnInit {
  private taches:Tache[];
  private filtredTaches:Tache[] = [];
  private phases:Phase[];
  private employes:Employe[];
  private projets:Projet[];

  constructor(private _router:Router, private _phaseService:PhaseService, private _tacheService:TacheService, private _employeService:EmployeService, private _projetService:ProjetService) { }

  ngOnInit() {
    this._phaseService.getPhases().subscribe(
      (response)=>{
        this.phases = response;        
      }, (error)=>{
        console.log(error);
      }
    );
    this._employeService.getEmployes().subscribe(
      (response)=>{
        this.employes = response;
      }, (error)=>{
        console.log(error);
      }
    );
    this._projetService.getProjets().subscribe(
      (response)=>{
        this.projets = response;
      }, (error)=>{
        console.log(error);
      }
    );
    this.allTaches();
  }
  allTaches(){    
    this.filtredTaches = [];
    this._tacheService.getTaches().subscribe(
      (response)=>{
        this.taches = response;
        this.filtredTaches = this.taches;        
      }, (error)=>{
        console.log(error);
      }
    );
  }
  filterByPhase(phase:Phase){
    this.filtredTaches = [];
    this.taches.forEach(element => {
      if(element.phase.id == phase.id){
        this.filtredTaches.push(element);
      }
    });    
  }
  filterByEmploye(employe:Employe){
    this.filtredTaches = [];
    this.taches.forEach(element => {
      if(element.employe_responsable.id == employe.id){
        this.filtredTaches.push(element);        
      }
    });
  }
  filterByProjet(projet:Projet){
    this.filtredTaches = [];
    this.taches.forEach(element => {
      if(element.phase.projet.id== projet.id){
        this.filtredTaches.push(element);
      }
    });
  } 
  newTache(){
    this._router.navigate(['formtache']);
  }
}
