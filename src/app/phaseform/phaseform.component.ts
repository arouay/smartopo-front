import { Component, OnInit } from '@angular/core';
import { Phase } from 'app/models/phase';
import { Router } from '@angular/router';
import { PhaseService } from 'app/shared_services/phase.service';
import { ProjetService } from 'app/shared_services/projet.service';
import { Projet } from 'app/models/projet';

@Component({
  selector: 'app-phaseform',
  templateUrl: './phaseform.component.html',
  styleUrls: ['./phaseform.component.scss']
})
export class PhaseformComponent implements OnInit {
  private phase:Phase;
  private projet:Projet;
  constructor(private _router:Router,private _phaseService:PhaseService,private _projetService:ProjetService) { }

  ngOnInit() {
    this.projet = this._projetService.getter();
    this.phase = new Phase();
  }
  processForm(){
    this.phase.projet = this.projet;
    this._phaseService.createPhase(this.phase).subscribe(
      (response)=>{
        console.log(response);
        this._router.navigate(['listphases']);
      },(error)=>{
        console.log(error);
      }
    );
  }
}
