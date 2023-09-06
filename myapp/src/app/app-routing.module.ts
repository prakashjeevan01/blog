import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  
    { path: 'login', component: LoginComponent
  },
    { path: 'signup', component: SignupComponent
   },
    {
      path:'About',component:AboutComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
