import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listprojets',
  templateUrl: './listprojets.component.html',
  styleUrls: ['./listprojets.component.scss']
})
export class ListprojetsComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  showDetails(){
    this._router.navigate(['Allprojects']);
  }
  newEmploye(){
    this._router.navigate(['formeprojet']);
  }
}
