import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { Projet } from 'app/models/projet';
import { ProjetService } from 'app/shared_services/projet.service';
import { EmployeService } from 'app/shared_services/employe.service';
import { RecetteService } from 'app/shared_services/recette.service';
import { Employe } from 'app/models/employe';
import { TacheService } from 'app/shared_services/tache.service';
import { EmployeForChart } from 'app/models/employeForChart';
import { NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  totalRevenus:number=0;
  totalRecettes:number=0;
  nbEmployes:number=0;
  allprojets:Projet[];
  nbRecettes:number=0;
  chartTpE:any;
  chartBpM:any;
  chartBpP:any;
  employes:Employe[];
  employesForChart:EmployeForChart[]=[];
  benefits:number[]=[];

  constructor(private _router:Router,private _tacheService:TacheService, private _projetService:ProjetService, private _employeService:EmployeService, private _recetteService:RecetteService) { }

  ngOnInit() {
    this._projetService.getProjets().subscribe(
      (response)=>{
        this.allprojets = response;
        this.allprojets.forEach(projet => {
          this.totalRevenus += projet.montant_estime;
        });
      }, (error)=>{
        console.log(error);
      }
    );
    this._employeService.getEmployes().subscribe(
      (response)=>{              
        this.employes = response;
        this.employes.forEach(element => {
          this.employesForChart.push(new EmployeForChart(element.cin,element.nom+' '+element.prenom));
        });
        this.nbEmployes = response.length;                
      }, (error)=>{
        console.log(error);
      }
    );    
    this._tacheService.getTaches().subscribe(
      (response)=>{
        response.forEach(tache => {
          this.employesForChart.forEach(empl => {
            if(tache.employe_responsable.cin == empl.cin){
              empl.incNbrTache();              
            }                       
          });                
        });
      }, (error)=>{
        console.log(error);
      }
    );    
    this._recetteService.getRecettes().subscribe(
      (response)=>{
        response.forEach(recette => {
          this.nbRecettes++;
          this.totalRecettes += recette.montant;
          
        });
        
      }, (error)=>{
        console.log(error);
      }
    );
    
    if(sessionStorage.length == 0){
      this._router.navigate(['login']);
    }    
    let x:string[]=['alaoui mohamed','marwan hssisou'];
    let y:number[]=[15,42];
    this.employesForChart.forEach(element => {
      x.push(element.nom);
      y.push(element.nbrTaches);
    });
    console.log(this.employesForChart);
    console.log(x);
    console.log(y);
    this.chartTpE = new Chart('nbTacheParEmploye', {
      type: 'bar',
      data: {
        labels: x,
        datasets: [{
            label: '# of Votes',
            data: y,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    }); 
    this.chartBpM = new Chart('beneficeParMois', {
      type: 'line',
      data: {
        labels: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin','uillet',   'août',   'septembre','octobre', 'novembre', 'décembre'],
        datasets: [{
            label: '# of Votes',
            data: [1200, 1900, 3000, 5500, 2300, 3020, 9050, 5800, 2300, 2100, 900, 500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    this.chartBpP = new Chart('beneficeParProjet', {
      type: 'bar',
      data: {
        labels: ['assainissement', 'baladia', 'etc'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
