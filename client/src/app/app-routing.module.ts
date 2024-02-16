import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { RRegisterComponent } from './Components/r-register/r-register.component';
import { JSRegisterComponent } from './Components/js-register/js-register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { RloginComponent } from './Components/rlogin/rlogin.component';
import { AddjobComponent } from './Components/addjob/addjob.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JSProfileComponent } from './Components/jsprofile/jsprofile.component';
import { RProfileComponent } from './Components/rprofile/rprofile.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { authGuard } from './Guards/auth.guard';

import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "",component: HomeComponent},
  { path: "l", component: LoginComponent },
  { path: "rr", component: RRegisterComponent }, 
  { path: "jsr", component: JSRegisterComponent },

  { path: "jobDetail/:id", component: JobDetailComponent, canActivate: [authGuard], data: { roles: ['Job Seeker', 'Recruiter'] } },
  { path: "rlogin", component: RloginComponent, canActivate: [authGuard], data: { roles: ['Recruiter'] } },
  { path: "addjob", component: AddjobComponent, canActivate: [authGuard], data: { roles: ['Recruiter'] } },
  { path: "jobList", component: JobListComponent, canActivate: [authGuard], data: { roles: ['Job Seeker', 'Recruiter'] } },
  { path: "jsProfile", component: ProfileComponent, canActivate: [authGuard], data: { roles: ['Job Seeker'] } },
  { path: "rProfile", component: ProfileComponent, canActivate: [authGuard], data: { roles: ['Recruiter'] } },
  { path: "dashboard", component: MainDashboardComponent},
  
  { path: "**", component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
