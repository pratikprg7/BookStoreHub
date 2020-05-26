import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{path: 'loginpage', component: LoginpageComponent},
{path: 'signup', component: SignupComponent},
{path: '**', redirectTo: '/loginpage'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
