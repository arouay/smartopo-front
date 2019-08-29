import { Component, OnInit } from '@angular/core';
import { Materiel } from 'app/models/materiel';
import { MaterielService } from 'app/shared_services/materiel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.scss']
})
export class ListmaterielComponent implements OnInit {
  private materiels:Materiel[];
  constructor(private _router:Router,private _materielService:MaterielService) { }

  ngOnInit() {
    this._materielService.getMateriels().subscribe(
      (response)=>{
        this.materiels = response;
      }, (error)=>{
        console.log(error);
      }
    );
  }
  newMateriel(){
    this._router.navigate(['materielform']);
  }
  updateMateriel(materiel:Materiel){

  }
  deleteMateriel(materiel:Materiel){

  }
  showDetails(materiel:Materiel){
    this._materielService.setter(materiel);
    //navigate to url
  }
}
