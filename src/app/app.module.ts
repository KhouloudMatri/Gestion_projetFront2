import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FooterModule } from './admin/shared/footer/footer.module';
import { NavbarModule } from './admin/shared/navbar/navbar.module';
import { SidebarModule } from './admin/sidebar/sidebar.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddCompetenceComponent } from './admin/add-competence/add-competence.component';
import { AddPhaseComponent } from './admin/add-phase/add-phase.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { CompetenceComponent } from './admin/competence/competence.component';
import { ComposantComponent } from './admin/composant/composant.component';
import { EditCompetenceComponent } from './admin/edit-competence/edit-competence.component';
import { EditPhaseComponent } from './admin/edit-phase/edit-phase.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';

import { PhaseComponent } from './admin/phase/phase.component';

import { RessourceComponent } from './admin/ressource/ressource.component';
import { RoleComponent } from './admin/role/role.component';
import { LoginComponent } from './admin/login/login.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ComposantComponent,
    AddProjectComponent,
    EditProjectComponent,
    CompetenceComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,
    PhaseComponent,
    AddPhaseComponent,
    EditPhaseComponent,
   LoginComponent,
    RessourceComponent,
    RoleComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
