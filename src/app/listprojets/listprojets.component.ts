import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'app/models/projet';
import { ProjetService } from 'app/shared_services/projet.service';

@Component({
  selector: 'app-listprojets',
  templateUrl: './listprojets.component.html',
  styleUrls: ['./listprojets.component.scss']
})
export class ListprojetsComponent implements OnInit {
  private projets:Projet[];
  constructor(private _router:Router, private _projetService:ProjetService) { }

  ngOnInit() {
    this._projetService.getProjets().subscribe((projets)=>{
      console.log(projets);
      this.projets = projets;
    }, (error)=>{
      console.log(error);
    })
  }
  showDetails(projet:Projet){
    this._projetService.setter(projet);
    this._router.navigate(['Allprojects']);
  }
  newEmploye(){
    this._router.navigate(['formeprojet']);
  }
}
