import { Component, OnInit } from '@angular/core';
import { TypeProjet } from 'app/models/typeprojet';
import { Router } from '@angular/router';
import { TypeprojetService } from 'app/shared_services/typeprojet.service';

@Component({
  selector: 'app-typeprojet',
  templateUrl: './typeprojet.component.html',
  styleUrls: ['./typeprojet.component.scss']
})
export class TypeprojetComponent implements OnInit {
  typeprojet:TypeProjet;
  constructor(private _router:Router, private _typeprojetService: TypeprojetService) { }

  ngOnInit() {
    this.typeprojet = new TypeProjet();
  }
  processForm(){
    this._typeprojetService.createType(this.typeprojet).subscribe((typeprojet)=>{
      console.log(typeprojet);
      this._router.navigate(['/formeprojet']);
    },(error)=>{
      console.log(error);
    });
  }
}
