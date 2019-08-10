import { Component, OnInit } from '@angular/core';
import { Employe } from 'app/models/employe';
import { EmployeService } from 'app/shared_services/employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeemployes',
  templateUrl: './listeemployes.component.html',
  styleUrls: ['./listeemployes.component.scss']
})
export class ListeemployesComponent implements OnInit {
  private employes:Employe[];

  constructor(private _employeService:EmployeService, private _router:Router) { }

  ngOnInit() {
    this._employeService.getEmployes().subscribe((employes)=>{
      console.log(employes);
      this.employes = employes;
    }, (error)=>{
      console.log(error);
    })
  }
  getAge(birthday) {    
    return new Date().getFullYear() - new Date(birthday).getFullYear();
  }
  formatDate(birthday){
    return ''+new Date(birthday).getDay()+' - '+new Date(birthday).getMonth()+' - '+new Date(birthday).getFullYear();
  }
  newEmploye(){
    this._employeService.setter(null);
    this._router.navigate(['/formemploye']);
  }
  updateEmploye(employe:Employe){
    this._employeService.setter(employe);
    this._router.navigate(['/formemploye']);
  }
  deleteEmploye(employe:Employe){
    this._employeService.deleteEmploye(employe.id).subscribe((data)=>{
      this.employes.splice(this.employes.indexOf(employe),1);
    }, (error)=>{
      console.log(error);
    });
  }
}
