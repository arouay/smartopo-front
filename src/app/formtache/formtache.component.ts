import { Component, OnInit } from '@angular/core';
import { Tache } from 'app/models/tache';
import { Router } from '@angular/router';
import { TacheService } from 'app/shared_services/tache.service';
import { EmployeService } from 'app/shared_services/employe.service';
import { Employe } from 'app/models/employe';
import { PhaseService } from 'app/shared_services/phase.service';

@Component({
  selector: 'app-formtache',
  templateUrl: './formtache.component.html',
  styleUrls: ['./formtache.component.scss']
})
export class FormtacheComponent implements OnInit {
  private tache:Tache;
  private employes:Employe[];
  private employetmp:Employe;
  constructor(private _router:Router, private _tacheService:TacheService, private _employeService:EmployeService, private _phaseService:PhaseService) { }

  ngOnInit() {
    this.tache = new Tache();
    this._employeService.getEmployes().subscribe(
      (response)=>{
        this.employes = response;
      }, (error)=>{
        console.log(error);
      }
    );
  }
  private id:any;
  processForm(){    
    //find employe
    this.id = this.tache.employe_responsable;
    this.employetmp = this.employes.find(i=>i.id == this.id);    
    //affect employe to tache
    this.tache.employe_responsable = this.employetmp;
    //affect phase to tache
    this.tache.phase = this._phaseService.getter();
    //sending tache
    this._tacheService.createTache(this.tache).subscribe(
      (response)=>{
        console.log(response);
        this._router.navigate(['listtache']);
      },(error)=>{
        console.log(error);
      }
    );
  }
  newEmploye(){

  }
}
