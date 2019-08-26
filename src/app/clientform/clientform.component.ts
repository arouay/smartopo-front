import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/shared_services/client.service';
import { Router } from '@angular/router';
import { Client } from 'app/models/client';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss']
})
export class ClientformComponent implements OnInit {
  isParticulierVisible:boolean=false;
  isSocieteVisible:boolean=false;

  private client:Client;

  constructor(private _clientService:ClientService, private _router:Router) { }

  ngOnInit() {
   this.client = new Client();
  }
  showParticulierBlock(){
    this.isParticulierVisible = true;
    this.isSocieteVisible = false;
  }
  showSocieteBlock(){
    this.isParticulierVisible = false;
    this.isSocieteVisible = true;
  }
  showNothing(){
    this.isParticulierVisible = false;
    this.isSocieteVisible = false;
  }

  processForm(){
    if(this.isParticulierVisible){
      this.client.ice = null;
      this.client.type = "particulier";
    }
    if(this.isSocieteVisible){
      this.client.cin = null;
      this.client.prenom = null;
      this.client.type = "societe";
    }
    if(!this.isParticulierVisible && !this.isSocieteVisible){
      this.client.ice = null;
      this.client.cin = null;
      this.client.prenom = null;
      this.client.type = "publicAssociation";
    }
    this._clientService.createClient(this.client).subscribe(
      (response)=>{
        console.log(response);
        this._router.navigate(['formeprojet']);
      },(error) => {
        console.log(error);
      }
    );
  }
}
