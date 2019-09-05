import { Component, OnInit } from '@angular/core';
import { Tache } from 'app/models/tache';
import { TacheService } from 'app/shared_services/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tacheavancementform',
  templateUrl: './tacheavancementform.component.html',
  styleUrls: ['./tacheavancementform.component.scss']
})
export class TacheavancementformComponent implements OnInit {
  private tache:Tache;
  private avancementActuel:number;
  constructor(private _tacheService:TacheService, private _router:Router) { }

  ngOnInit() {
    this.tache = this._tacheService.getter();
    this.avancementActuel = this.tache.avancement;
  }
  processForm(){
    if(this.tache.avancement > 100 || this.tache.avancement < 0){
      alert("L'avancement est un purcentage !");
    }else{
      this._tacheService.updateTache(this.tache).subscribe(
        (response)=>{
          console.log(response);          
          this._router.navigate(['mestaches']);
        }, (error)=>{
          console.log(error);
        }
      );
    }    
  }
}
