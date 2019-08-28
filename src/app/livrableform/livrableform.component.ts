import { Component, OnInit } from '@angular/core';
import { Livrable } from 'app/models/livrable';
import { Router } from '@angular/router';
import { LivrableService } from 'app/shared_services/livrable.service';
import { Phase } from 'app/models/phase';
import { PhaseService } from 'app/shared_services/phase.service';

@Component({
  selector: 'app-livrableform',
  templateUrl: './livrableform.component.html',
  styleUrls: ['./livrableform.component.scss']
})
export class LivrableformComponent implements OnInit {
  private livrable:Livrable;
  private livrables:Livrable[] = [];
  private concernedLivrables:Livrable[] = [];
  private phase:Phase;

  constructor(private _router:Router,private _livrableService:LivrableService, private _phaseService:PhaseService) { }

  ngOnInit() {
    this.livrable = new Livrable();
    this.phase = this._phaseService.getter();
    this._livrableService.getLivrables().subscribe(
      (response)=>{
        console.log(response);
        this.livrables = response;
        this.livrables.forEach(livrable => {
          if(livrable.phase.id == this.phase.id)
            this.concernedLivrables.push(livrable);
        });
      }, (error)=>{
        console.log(error);
      }
    );
    
  }
  processForm(){
    this.livrable.phase = this.phase;
    this._livrableService.createLivrable(this.livrable).subscribe(
      (response)=>{
        console.log(response);
        this.concernedLivrables.push(this.livrable);
      },(error)=>{
        console.log(error);
      }
    );
  }
  deleteLivrable(livrable:Livrable){
    this._livrableService.deleteLivrable(livrable.id).subscribe();
    this.concernedLivrables.splice(this.concernedLivrables.indexOf(livrable),1);
  }
}
