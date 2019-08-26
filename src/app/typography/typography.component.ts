import { Component, OnInit } from '@angular/core';
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
}
