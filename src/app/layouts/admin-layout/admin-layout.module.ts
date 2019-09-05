import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListeemployesComponent } from '../../listeemployes/listeemployes.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { EmployeformComponent } from 'app/employeform/employeform.component';
import { ProjetformComponent } from 'app/projetform/projetform.component';
import { TypeprojetComponent } from 'app/typeprojet/typeprojet.component';
import { ClientformComponent } from 'app/clientform/clientform.component';
import { ListprojetsComponent } from 'app/listprojets/listprojets.component';
import { ListphasesComponent } from 'app/listphases/listphases.component';
import { PhaseformComponent } from 'app/phaseform/phaseform.component';
import { LivrableformComponent } from 'app/livrableform/livrableform.component';
import { MaterielformComponent } from 'app/materielform/materielform.component';
import { ListmaterielComponent } from 'app/listmateriel/listmateriel.component';
import { FormtacheComponent } from 'app/formtache/formtache.component';
import { ListtacheComponent } from 'app/listtache/listtache.component';
import { AuthentificationComponent } from 'app/authentification/authentification.component';
import { ListmestachesComponent } from 'app/listmestaches/listmestaches.component';
import { ListdepensechargeComponent } from 'app/listdepensecharge/listdepensecharge.component';
import { DepensechargeformComponent } from 'app/depensechargeform/depensechargeform.component';
import { TacheavancementformComponent } from 'app/tacheavancementform/tacheavancementform.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ListeemployesComponent,
    EmployeformComponent,
    ProjetformComponent,
    TypeprojetComponent,
    ClientformComponent,
    ListprojetsComponent,
    ListphasesComponent,
    PhaseformComponent,
    LivrableformComponent,
    MaterielformComponent,
    ListmaterielComponent,
    FormtacheComponent,
    ListtacheComponent,
    AuthentificationComponent,
    ListmestachesComponent,
    ListdepensechargeComponent,
    DepensechargeformComponent,
    TacheavancementformComponent
  ]
})

export class AdminLayoutModule {}
