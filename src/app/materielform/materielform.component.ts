import { Component, OnInit } from '@angular/core';
import { Materiel } from 'app/models/materiel';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-materielform',
  templateUrl: './materielform.component.html',
  styleUrls: ['./materielform.component.scss']
})
export class MaterielformComponent implements OnInit {
  private materiel:Materiel;
  private image:File;

  constructor(private _router:Router,private _http:Http) { }

  ngOnInit() {
    this.materiel = new Materiel();
  }
  onFileChange(e){
    /*this.image = e.target.files[0];
    const fd = new FormData();
        fd.append('image', this.image, this.image.name);
        this._http.post('', fd)
          .subscribe(res => {
            console.log(res);
          });*/
  }
  processForm(){
    
  }
}
