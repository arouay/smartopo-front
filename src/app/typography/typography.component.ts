import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  num:number = 30;
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  newProjet(){
    this._router.navigate(['formeprojet']);
  }  
}
