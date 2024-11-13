import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './offers-components/job-details/job-details.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
    
  { path: 'annonces/:id', component: JobDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
