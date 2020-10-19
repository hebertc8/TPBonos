import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from './container/main/main.component';
import { LoginGuard } from './services/guards/login.guard';
import { ValidateLoginGuard } from './services/guards/validate-login.guard';
import { PuntosComponent } from './container/puntos/puntos.component';



const routes: Routes = [
  { path: '', redirectTo: 'container', pathMatch: 'prefix' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'container',
    component: ContainerComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
        canActivate: [ValidateLoginGuard]
      }, 
      {
        path: 'puntos',
        component: PuntosComponent,
      },
    ]
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
