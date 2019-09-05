import { Component, OnInit } from '@angular/core';
import { Materiel } from 'app/models/materiel';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MaterielService } from 'app/shared_services/materiel.service';

@Component({
  selector: 'app-materielform',
  templateUrl: './materielform.component.html',
  styleUrls: ['./materielform.component.scss']
})
export class MaterielformComponent implements OnInit {
  private materiel:Materiel;
  private image:Blob;

  constructor(private _router:Router,private _http:Http,private _materielService:MaterielService) { }

  ngOnInit() {
    this.materiel = new Materiel();
    this.materiel.etat_achat = true;
  }
  onFileChange(e){
    this.image = e.target.files[0];
    //const fd = new FormData();        
    this.materiel.image_neuf = this.image;
    console.log(this.image);
        /*fd.append('image', this.image, this.image.name);
        this._http.post('', fd)
          .subscribe(res => {
            console.log(res);
          });*/    
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
