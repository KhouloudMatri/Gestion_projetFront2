import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ProjetComponent } from '../../projet/projet.component';
import { AddProjectComponent } from '../../add-project/add-project.component';
import { EditProjectComponent } from '../../edit-project/edit-project.component';
import { CompetenceComponent } from '../../competence/competence.component';
import { AddCompetenceComponent } from '../../add-competence/add-competence.component';
import { EditCompetenceComponent } from '../../edit-competence/edit-competence.component';
import { PhaseComponent } from '../../phase/phase.component';
import { AddPhaseComponent } from '../../add-phase/add-phase.component';
import { EditPhaseComponent } from '../../edit-phase/edit-phase.component';
import { RessourceComponent } from '../../ressource/ressource.component';
import { RoleComponent } from '../../role/role.component';


export const AdminLayoutRoutes: Routes = [

    
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'projet',         component: ProjetComponent },
    { path:'addProject' ,      component:AddProjectComponent},
    { path:'editProject/:id',      component:EditProjectComponent },
    { path: 'competence',         component: CompetenceComponent },
    { path:'addCompetence' ,      component:AddCompetenceComponent},
    { path:'editCompetence/:id',      component:EditCompetenceComponent },
    { path: 'phase',         component: PhaseComponent },
    { path:'addPhase' ,      component:AddPhaseComponent},
    { path:'editPhase/:id',      component:EditPhaseComponent },
    { path:'ressource',      component:RessourceComponent },
    { path:'role',      component:RoleComponent }
 

    
   
  
];
