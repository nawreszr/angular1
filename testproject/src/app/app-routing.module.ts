import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ThedoctorsComponent } from './thedoctors/thedoctors.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent},
{path:'thedoctors', component:ThedoctorsComponent},
{path:'about', component:AboutusComponent},
{path:'contact', component:ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
