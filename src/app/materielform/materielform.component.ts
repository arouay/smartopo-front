import { Component, OnInit } from '@angular/core';
import { Materiel } from 'app/models/materiel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materielform',
  templateUrl: './materielform.component.html',
  styleUrls: ['./materielform.component.scss']
})
export class MaterielformComponent implements OnInit {
  private materiel:Materiel;

  constructor(private _router:Router) { }

  ngOnInit() {
    this.materiel = new Materiel();
  }
  processForm(){
    
  }
}
