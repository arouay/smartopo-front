import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeprojetService } from 'app/shared_services/typeprojet.service';
import { TypeProjet } from 'app/models/typeprojet';
import { Client } from 'app/models/client';
import { ClientService } from 'app/shared_services/client.service';

@Component({
  selector: 'app-projetform',
  templateUrl: './projetform.component.html',
  styleUrls: ['./projetform.component.scss']
})
export class ProjetformComponent implements OnInit {
  private types:TypeProjet[];
  private clients:Client[];

  constructor(private _router:Router,private _typeprojetService:TypeprojetService,private _clientService:ClientService) { }

  ngOnInit() {
    this._typeprojetService.getTypes().subscribe((types)=>{
      console.log(types);
      this.types = types;
    }, (error)=>{
      console.log(error);
    });
    this._clientService.getClients().subscribe((clients)=>{
      console.log(clients);
      this.clients = clients;
    }, (error)=>{
      console.log(error);
    });
  }
  newClient(){
    
  }
  newTypeProjet(){
    this._router.navigate(['newTypeProjet']);
  }
}
