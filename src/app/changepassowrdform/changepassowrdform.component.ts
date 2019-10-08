import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'app/shared_services/employe.service';
import { AdminService } from 'app/shared_services/admin.service';
import { Admin } from 'app/models/admin';
import { Employe } from 'app/models/employe';

@Component({
  selector: 'app-changepassowrdform',
  templateUrl: './changepassowrdform.component.html',
  styleUrls: ['./changepassowrdform.component.scss']
})
export class ChangepassowrdformComponent implements OnInit {
  private newpw:string;
  private newpwverif:string;
  private admins:Admin[];
  private employes:Employe[];

  constructor(private _router:Router, private _employeService:EmployeService, private _adminService:AdminService) { }

  ngOnInit() {
    if(sessionStorage.getItem('employe') != null){
      this._employeService.getEmployes().subscribe(
        (response)=>{
          this.employes = response;          
        }, (error)=>{
          console.log(error);
        }
      );
    }else if(sessionStorage.getItem('admin') != null){
      this._adminService.getAdmins().subscribe(
        (response)=>{
          this.admins = response;          
        }, (error)=>{
          console.log(error);
        }
      );
    }else {
      this._router.navigate(['']);
    }
  }
  processForm(){
    if(this.newpw != this.newpwverif){
      alert('Les deux mots de passe ne correspondent pas !');
    }else {
      if(sessionStorage.getItem('employe') != null){
        this.employes.forEach(element => {
          if(element.email == sessionStorage.getItem('employe')){  
            element.mdp = this.newpw;          
            this._employeService.updatEmploye(element).subscribe(
              (response)=>{
                alert('Mot de passe bien modifié'); 
                this.newpw = '';
                this.newpwverif = '';           
              }, (error)=>{
                console.log(error);
              }
            );
          }
        });  
      }
      if(sessionStorage.getItem('admin') != null){
        this.admins.forEach(element => {
          if(element.login == sessionStorage.getItem('admin')){    
            element.mdp = this.newpw;        
            this._adminService.updateAdmin(element).subscribe(
              (response)=>{
                alert('Mot de passe bien modifié');
                this.newpw = '';
                this.newpwverif = ''; 
              }, (error)=>{
                console.log(error);
              }
            );
          }
        });
      }
    }        
  }
}
