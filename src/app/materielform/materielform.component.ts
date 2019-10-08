import { Component, OnInit } from '@angular/core';
import { Materiel } from 'app/models/materiel';
import { Router } from '@angular/router';
import { MaterielService } from 'app/shared_services/materiel.service';

@Component({
  selector: 'app-materielform',
  templateUrl: './materielform.component.html',
  styleUrls: ['./materielform.component.scss']
})
export class MaterielformComponent implements OnInit {
  private materiel:Materiel;
  private image:Blob;

  constructor(private _router:Router, private _materielService:MaterielService) { }

  ngOnInit() {
    this.materiel = new Materiel();    
    this.materiel.etat_achat = true;//checked true by default
  }
  onFileChange(e){
    this.image = e.target.files[0];         
    this.materiel.image_neuf = this.image;       
    
    //const fd = new FormData();    
    //fd.append('image', this.image);          
  }
  processForm(){
    this._materielService.createMateriel(this.materiel).subscribe(
      (response)=>{
        console.log(response);
      }, (error)=>{
        console.log(error);
      }
    );
  }
  isNew(status){
    this.materiel.etat_achat = status;    
  }
}
