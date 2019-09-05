import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'app/shared_services/employe.service';
import { Employe } from 'app/models/employe';
import { Router } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { Admin } from 'app/models/admin';
import { AdminService } from 'app/shared_services/admin.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  private username:string;
  private password:string;
  private allEmployes:Employe[];
  private allAdmins:Admin[];

  constructor(private _router:Router, private _employeService:EmployeService, private _adminService:AdminService) { }

  ngOnInit() {
    this._employeService.getEmployes().subscribe(
      (response)=>{
        this.allEmployes = response;
      }, (error)=>{        
        console.log(error);
      });
    this._adminService.getAdmins().subscribe(
      (response)=>{
        this.allAdmins = response;
      }, (error)=>{
        console.log(error);
      }
    );
  }
  processForm(){
    if(this.allEmployes.find((i=>i.email == this.username) && (i=>i.mdp == this.password)) != null){
      sessionStorage.setItem('employe',this.username);                             
      window.location.href = 'dashboard';
    }else if(this.allAdmins.find((i=>i.login == this.username) && (i=>i.mdp == this.password)) != null){
      sessionStorage.setItem('admin',this.username);
      window.location.href = 'dashboard';
    }else{
      this.username = '';
      this.password = '';
      alert("Login ou mot de passe incorrecte !");
    }   
  }
}
