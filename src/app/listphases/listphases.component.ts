import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhaseService } from 'app/shared_services/phase.service';
import { Phase } from 'app/models/phase';
import { ProjetService } from 'app/shared_services/projet.service';
import { Projet } from 'app/models/projet';

@Component({
  selector: 'app-listphases',
  templateUrl: './listphases.component.html',
  styleUrls: ['./listphases.component.scss']
})
export class ListphasesComponent implements OnInit {
  private phases:Phase[];
  private concernedPhases:Phase[] = [];
  private concernedProjet:Projet;

  constructor(private _router:Router, private _phaseService:PhaseService, private _projetService:ProjetService) { }

  ngOnInit() {
    this._phaseService.getPhases().subscribe(
      (response)=>{
        console.log(response);
        this.phases = response;  
        this.concernedProjet = this._projetService.getter();
        this.phases.forEach(phase => {
          if(phase.projet.id == this.concernedProjet.id)
            this.concernedPhases.push(phase);
        });     
      }, (error)=>{
        console.log(error);
      }
    );    
  }
  newPhase(){    
    this._router.navigate(['phaseform']);
  }
  updatePhase(phase:Phase){

  }
  gestionTaches(phase:Phase){
    this._phaseService.setter(phase);
    this._router.navigate(['listtache']);
  }
  gestionLivrable(phase:Phase){
    this._phaseService.setter(phase);
    this._router.navigate(['livrableform']);
  }
  deletePhase(phase:Phase){
    if(confirm("Etes-vous sur de vouloir supprimer la phase ? ( Cette opération est irréversible ! )")){
      this._phaseService.deletePhase(phase.id).subscribe(
        (response)=>{
          console.log(response);
          this.concernedPhases.splice(this.phases.indexOf(phase),1);
        },(error)=>{
          console.log(error);
        }
      );
    }
  }
}
