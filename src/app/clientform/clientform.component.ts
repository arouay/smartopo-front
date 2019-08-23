import { Component, OnInit } from '@angular/core';
import { Particulier } from 'app/models/particulier';
import { Societe } from 'app/models/societe';
import { Public_association } from 'app/models/public_association';
import { ClientService } from 'app/shared_services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss']
})
export class ClientformComponent implements OnInit {
  isParticulierVisible:boolean=false;
  isSocieteVisible:boolean=false;

  private particulier:Particulier;
  private societe:Societe;
  private association_public:Public_association;

  constructor(private _clientService:ClientService, private _router:Router) { }

  ngOnInit() {
    this.particulier = new Particulier();
    this.societe = new Societe();
    this.association_public = new Public_association();
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
      this.association_public = null;
      this.societe = null;
      this._clientService.createClientParticulier(this.particulier).subscribe((particulier)=>{
        console.log(particulier);
        this._router.navigate(['formeprojet']);
      },(error)=>{
        console.log(error);
      });
    }
    if(this.isSocieteVisible){
      this.societe.nom = this.particulier.nom;
      this.societe.ville = this.particulier.ville;
      this.particulier = null;
      this.association_public = null;
      this._clientService.createClientSociete(this.societe).subscribe((societe)=>{
        console.log(societe);
        this._router.navigate(['formeprojet']);
      },(error)=>{
        console.log(error);
      });
    }
    if(!this.isParticulierVisible && !this.isSocieteVisible){
      this.association_public.nom = this.particulier.nom;
      this.association_public.ville = this.particulier.ville;
      this.particulier = null;
      this.societe = null;
      this._clientService.createClientPublicassociation(this.association_public).subscribe((association_public)=>{
        console.log(association_public);
        this._router.navigate(['formeprojet']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
