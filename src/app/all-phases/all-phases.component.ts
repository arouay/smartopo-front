import { Component, OnInit } from '@angular/core';
import { Phase } from 'app/models/phase';
import { Router } from '@angular/router';
import { PhaseService } from 'app/shared_services/phase.service';
import { ProjetService } from 'app/shared_services/projet.service';
import { Projet } from 'app/models/projet';

@Component({
  selector: 'app-all-phases',
  templateUrl: './all-phases.component.html',
  styleUrls: ['./all-phases.component.scss']
})
export class AllPhasesComponent implements OnInit {
  private phases:Phase[];
  private projets:Projet[];
  private filtredPhases:Phase[]=[];

  constructor(private _router:Router, private phaseService:PhaseService, private projetService:ProjetService) { }
  allTaches(){
    this.phaseService.getPhases().subscribe(
      (response)=>{
        this.phases = response;
        this.filtredPhases = this.phases;
      }, (error)=>{
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.allTaches();
    this.projetService.getProjets().subscribe(
      (response)=>{
        this.projets = response;
      }, (error)=>{
        console.log(error);
      }
    );
  }
  newPhase(){
    this._router.navigate(['phaseform']);
  }
  filterByProjet(projet:Projet){
    this.filtredPhases = [];
    this.phases.forEach(element => {
      if(element.projet.id == projet.id){
        this.filtredPhases.push(element);
      }
    });
  }
}
