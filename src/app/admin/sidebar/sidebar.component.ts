import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
        
    { path: '/admin/projet', title: 'Gestion Projets',  icon:'pe-7s-note2', class: '' },
    { path: '/admin/competence', title: 'Gestion Compétences',  icon:'pe-7s-diamond', class: '' },
    { path: '/admin/ressource', title: 'Gestion Ressources',  icon:'pe-7s-users', class: '' },
    { path: '/admin/phase', title: 'Gestion Phases',  icon:'pe-7s-graph1', class: '' },
    { path: '/admin/role', title: 'Gestion Profils',  icon:'pe-7s-config', class: '' },


    // { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/admin/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/admin/icons', title: 'Icons',  icon:'pe-7s-science', class: '' }

    
   


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[]=[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
