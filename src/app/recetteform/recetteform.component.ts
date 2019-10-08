import { Component, OnInit } from '@angular/core';
import { Recette } from 'app/models/recette';
import { RecetteService } from 'app/shared_services/recette.service';
import { ProjetService } from 'app/shared_services/projet.service';
import { Projet } from 'app/models/projet';
@Component({
  selector: 'app-recetteform',
  templateUrl: './recetteform.component.html',
  styleUrls: ['./recetteform.component.scss']
})
export class RecetteformComponent implements OnInit {
  recette:Recette;
  projets:Projet[];
  idProjet:number;

  constructor(private _recetteService:RecetteService, private _projetService:ProjetService) { }

  ngOnInit() {
    this.recette = new Recette();
    this._projetService.getProjets().subscribe(
      (response)=>{
        this.projets = response;
      }, (error)=>{
        console.log(error);
      }
    );
  }
  processForm(){
    this.recette.projet = this.projets.find(i => i.id == this.idProjet);
    this._recetteService.createRecette(this.recette).subscribe(
      (response)=>{
        console.log(response);
      },(error)=>{
        console.log(error);
      }
    );
    this.recette = new Recette();
    alert("Recette bien ajoutée");    
  }
}
