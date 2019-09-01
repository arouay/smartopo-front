import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/listeemployes', title: 'Gestion des employés',  icon:'playlist_add', class: '' },
    { path: '/listmateriel', title: 'Gestion du materiel',  icon:'build', class: '' },
    { path: '/listprojets', title: 'Tous les projets',  icon:'library_books', class: '' }, 
    { path: '/mestaches', title: 'Mes tâches', icon:'library_books', class:''}           
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];  
  constructor() { }

  ngOnInit() {        
    if(sessionStorage.getItem('employe') != null){      
      this.menuItems = ROUTES.filter(menuItem => menuItem); 
      this.menuItems.splice(1,3);     
    }else if(sessionStorage.getItem('admin') != null){      
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.menuItems.splice(4,1);      
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
