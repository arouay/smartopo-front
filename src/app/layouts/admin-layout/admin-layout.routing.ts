import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListeemployesComponent } from '../../listeemployes/listeemployes.component';
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
import { ListtacheComponent } from 'app/listtache/listtache.component';
import { FormtacheComponent } from 'app/formtache/formtache.component';
import { AuthentificationComponent } from 'app/authentification/authentification.component';
import { ListmestachesComponent } from 'app/listmestaches/listmestaches.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'Allprojects',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'listeemployes', component: ListeemployesComponent},
    { path: 'formemploye', component: EmployeformComponent},
    { path: 'formeprojet', component: ProjetformComponent},
    { path: 'newTypeProjet', component: TypeprojetComponent},
    { path: 'newClient', component: ClientformComponent},
    { path: 'listprojets', component:ListprojetsComponent},
    { path: 'listphases', component:ListphasesComponent},
    { path: 'phaseform', component:PhaseformComponent},
    { path: 'livrableform', component:LivrableformComponent},
    { path: 'materielform', component:MaterielformComponent},
    { path: 'listmateriel', component:ListmaterielComponent},
    { path: 'listtache', component:ListtacheComponent},
    { path: 'formtache', component:FormtacheComponent},
    { path: 'login', component:AuthentificationComponent},
    { path: 'mestaches', component:ListmestachesComponent}
];
