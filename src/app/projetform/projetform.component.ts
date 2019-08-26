import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeprojetService } from 'app/shared_services/typeprojet.service';
import { TypeProjet } from 'app/models/typeprojet';
import { Client } from 'app/models/client';
import { ClientService } from 'app/shared_services/client.service';
import { Projet } from 'app/models/projet';
import { ProjetService } from 'app/shared_services/projet.service';

@Component({
  selector: 'app-projetform',
  templateUrl: './projetform.component.html',
  styleUrls: ['./projetform.component.scss']
})
export class ProjetformComponent implements OnInit {
  private types:TypeProjet[];
  private clients:Client[];
  private projet:Projet;

  private clienttmp:Client;
  private typetmp:TypeProjet;
  constructor(private _router:Router,private _typeprojetService:TypeprojetService,private _clientService:ClientService, private _projetService:ProjetService) { }

  ngOnInit() {
    this.projet = new Projet();
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
  private id:any;
  processForm(){ 
    //------preparing client------- 
    this.id = this.projet.client;
    //find client
    this.clienttmp = this.clients.find(i=>i.id == this.id);
    //affect client to projet
    this.projet.client = this.clienttmp;

    //-----preparing type---------
    this.id = this.projet.typeProjet;
    //find type
    this.typetmp = this.types.find(i=>i.id == this.id);
    //affect type to projet
    this.projet.typeProjet = {
      "id":this.typetmp.id,
      "designation":this.typetmp.designation
    };
    
    //-------send projet-------
    this._projetService.createProjet(this.projet).subscribe((response)=>{  
      console.log(response);
      this._router.navigate(['listprojets']);
    },(error)=>{
      console.log(error);
    });
  }
  newClient(){
    this._router.navigate(['newClient']);
  }
  newTypeProjet(){
    this._router.navigate(['newTypeProjet']);
  }
  
}
