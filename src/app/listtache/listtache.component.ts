import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'app/models/tache';
import { TacheService } from 'app/shared_services/tache.service';
import { Phase } from 'app/models/phase';
import { PhaseService } from 'app/shared_services/phase.service';

@Component({
  selector: 'app-listtache',
  templateUrl: './listtache.component.html',
  styleUrls: ['./listtache.component.scss']
})
export class ListtacheComponent implements OnInit {
  private concernedTaches:Tache[]=[];
  private allTaches:Tache[];
  private phase:Phase;

  constructor(private _router:Router, private _tacheService:TacheService, private _phaseService:PhaseService) { }

  ngOnInit() {
    this.phase = this._phaseService.getter();
    this._tacheService.getTaches().subscribe(
      (response)=>{
        this.allTaches = response;
        this.allTaches.forEach(element => {
          if(element.phase.id == this.phase.id){
            this.concernedTaches.push(element);
          }
        });
      }
    );    
  }
  newTache(){
    this._router.navigate(['formtache']);
  }
  updateTache(){

  }
  deleteTache(){
    if(confirm("Etes-vous sur de vouloir supprimer la tâche ? ( Cette opération est irréversible ! )")){
      //test sur avancement de la tache si avancement encors 0% la tache peut être supprimée
    }
  }

}
