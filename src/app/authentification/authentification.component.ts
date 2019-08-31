import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'app/shared_services/employe.service';
import { Employe } from 'app/models/employe';
import { Router } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  private username:string;
  private password:string;
  private allUsers:Employe[];

  constructor(private _router:Router, private _employeService:EmployeService) { }

  ngOnInit() {
    this._employeService.getEmployes().subscribe(
      (response)=>{
        this.allUsers = response;
      }, (error)=>{        
        console.log(error);
      });
  }
  processForm(){
    if(this.allUsers.find(i=>i.email == this.username /* and password later */) != null){
      sessionStorage.setItem('employe',this.username);                             
      window.location.href = 'dashboard';
    }else if(this.username == 'admin'){
      sessionStorage.setItem('admin',this.username);
      window.location.href = 'dashboard';
    }else{
      this.username = '';
      this.password = '';
      alert("Login ou mot de passe incorrecte !");
    }   
  }
}
