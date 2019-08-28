import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'app/models/projet';
import { ProjetService } from 'app/shared_services/projet.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  num:number = 30;
  projet:Projet;

  constructor(private _router:Router,private projetService:ProjetService) { }

  ngOnInit() {
    this.projet = this.projetService.getter();
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
