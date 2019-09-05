import { Component, OnInit } from '@angular/core';
import { Employe } from 'app/models/employe';
import { Router } from '@angular/router';
import { EmployeService } from 'app/shared_services/employe.service';

@Component({
  selector: 'app-employeform',
  templateUrl: './employeform.component.html',
  styleUrls: ['./employeform.component.scss']
})
export class EmployeformComponent implements OnInit {
  private employe:Employe;

  constructor(private _router:Router, private _employeService:EmployeService) { }

  ngOnInit() {
    if(this._employeService.getter() == null){
      this.employe = new Employe();
    }      
    else{
      this.employe = this._employeService.getter();
    }       
  }

  processForm(){
    if(this.employe.id==undefined){
      this.employe.mdp = "default";
      this._employeService.createEmploye(this.employe).subscribe((employe)=>{
        console.log(employe);
        this._router.navigate(['/listeemployes']);
      },(error)=>{
        console.log(error);
      });
    }else {
      this._employeService.updatEmploye(this.employe).subscribe((employe)=>{
        console.log(employe);
        this._router.navigate(['/listeemployes']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
