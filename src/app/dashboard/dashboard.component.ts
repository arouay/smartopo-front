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
import { DepensechargeService } from 'app/shared_services/depensecharge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  totalRevenus: number = 0;
  totalRecettes: number = 0;
  nbEmployes: number = 0;
  allprojets: Projet[];
  nbRecettes: number = 0;
  chartTpE: any;
  chartBpM: any;
  chartBpP: any;
  employes: Employe[];
  employesForChart: EmployeForChart[] = [];
  benefits: number[] = [];
  emplStar: string='--';
  emplStarVal: number=0;
  totalCharges:number=0;
  x: string[] = [];
  y: number[] = [];
  z: number[] = [];

  constructor(private _router: Router,private _depensechargeService:DepensechargeService, private _tacheService: TacheService, private _projetService: ProjetService, private _employeService: EmployeService, private _recetteService: RecetteService) { }

  calculerDepenses(){
    this.employesForChart.forEach(emplfc => {
      this._depensechargeService.getDepensecharges().subscribe(
        (depenses)=>{
          depenses.forEach(depense => {
            if(emplfc.cin == depense.tache.employe_responsable.cin){
              emplfc.calSommeDepenses(depense.montant);                            
            }            
          });
        }
      );
      //console.log(emplfc)
      this.z.push(emplfc.sommeDepenses); 
    });    
    console.log(this.z);
    this.getchartTpE(this.x,this.y,[450/1000,700/1000]);
  }

  ngOnInit() {
    this._depensechargeService.getDepensecharges().subscribe(
      (response)=>{
        response.forEach(element => {
          this.totalCharges += element.montant;
        });        
      }
    );
    this._projetService.getProjets().subscribe(
      (response) => {
        this.allprojets = response;
        this.allprojets.forEach(projet => {
          this.totalRevenus += projet.montant_estime;
        });
      }, (error) => {
        console.log(error);
      }
    );
    this._employeService.getEmployes().subscribe(
      (response) => {
        this.employes = response;
        this.employes.forEach(element => {
          this.employesForChart.push(new EmployeForChart(element.cin, element.nom + ' ' + element.prenom));
        });
        this.nbEmployes = response.length;
        this._tacheService.getTaches().subscribe(
          (response) => {
            response.forEach(tache => {
              this.employesForChart.forEach(empl => {
                if (tache.employe_responsable.cin == empl.cin) {
                  empl.incNbrTache();
                }
                
              });
            });
            this.employesForChart.forEach(element => {
              this.x.push(element.nom);
              this.y.push(element.nbrTaches);
              if (this.emplStarVal < element.nbrTaches) {
                this.emplStarVal = element.nbrTaches;
                this.emplStar = element.nom;
              }
            });
            this.getchartTpE(this.x,this.y,0);            
          }, (error) => {
            console.log(error);
          }
        );

      }, (error) => {
        console.log(error);
      }
    );


    this._recetteService.getRecettes().subscribe(
      (response) => {
        response.forEach(recette => {
          this.nbRecettes++;
          this.totalRecettes += recette.montant;

        });

      }, (error) => {
        console.log(error);
      }
    );

    if (sessionStorage.length == 0) {
      this._router.navigate(['login']);
    }

    this.getchartBpM(0);
    this.getchartBpP(0,0);
    
  }
  goToEmployes() {
    this._router.navigate(['listeemployes']);
  }


  getchartBpP(x,y){
    this.chartBpP = new Chart('beneficeParProjet', {
      type: 'bar',
      data: {
        labels: ['assainissement', 'baladia', 'etc'],
        datasets: [{
          label: 'Valeur',
          data: [12, 19, 3, 5, 2, 3],          
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
            ticks: {
              min: 0
            }
          }],
        }
      }
    });
  }
  getchartBpM(y){//l'axe des X (les mois) est static
    this.chartBpM = new Chart('beneficeParMois', {
      type: 'line',
      data: {
        labels: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        datasets: [{
          label: 'Valeur',
          data: [1200, 1900, 3000, 5500, 2300, 3020, 9050, 5800, 2300, 2100, 900, 500],
          
          borderColor: [
            'rgba(255, 99, 132, 1)',
            
            
          ],
          borderWidth: 1
        },
        {
          label: 'Valeur',
          data: [600, 650, 700, 750, 800, 850, 900, 1000, 950, 1000, 770, 720],
          
          borderColor: [
            'rgba(54, 162, 235, 1)',
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
            ticks: {
              min: 0
            }
          }],
        }
      }
    });
  }
  getchartTpE(x,y,z){
    this.chartTpE = new Chart('nbTacheParEmploye', {
      type: 'bar',
      data: {
        labels: x,
        datasets: [{
          label: 'Valeur',
          data: y,
          
          borderWidth: 1
        },
        {
          label: 'Valeur',
          data: z,
          
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,

          }],
          yAxes: [{
            ticks: {
              min: 0
            }
          }],
        }
      }
    });
  }
}
