import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'app/models/projet';
import { ProjetService } from 'app/shared_services/projet.service';
import { PhaseService } from 'app/shared_services/phase.service';
import { TacheService } from 'app/shared_services/tache.service';
import { Phase } from 'app/models/phase';
import { Tache } from 'app/models/tache';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  avancement:number = 0;
  projet:Projet;
  taches:Tache[];
  concernedTaches:Tache[]=[];
  avancements:number=0;
  nbConcernedTaches:number=0;

  constructor(private _router:Router,private projetService:ProjetService, private _phaseService:PhaseService, private _tacheService:TacheService) { }

  ngOnInit() {
    this.projet = this.projetService.getter();
    this._tacheService.getTaches().subscribe(
      (response)=>{
        this.taches = response;
        this.taches.forEach(tache => {
          if(tache.phase.projet.id == this.projet.id){
            this.avancements+=tache.avancement;
            this.nbConcernedTaches++;
            this.concernedTaches.push(tache);            
          }          
        });
        this.avancement = this.avancements / this.nbConcernedTaches;
        console.log(this.avancement);
        console.log(this.avancements);
        console.log(this.nbConcernedTaches);
      }, (error)=>{
        console.log(error);
      }
    );
  }
  delete(){
    if(confirm("Etes-vous sur de vouloir supprimer le projet ? ( Cette opération est irréversible ! )")){
      this.projetService.deleteProjet(this.projet.id).subscribe(
        (response)=>{
          console.log(response);
          this._router.navigate(['listprojets']);
        },(error)=>{
          console.log(error);
        }
      );
    }
  }
  update(){
    this._router.navigate(['formeprojet']);
  }
  managePhases(){
    this._router.navigate(['listphases']);
  }
}
