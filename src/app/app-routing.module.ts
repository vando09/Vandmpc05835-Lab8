import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UnitComponent } from './pages/unit/unit.component';
import { EditComponent } from './pages/unit/edit/edit.component';
import { DeleteComponent } from './pages/unit/delete/delete.component';
import { CreateComponent } from './pages/unit/create/create.component';
import { AuthGuard } from './@core/guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unit',
    canActivate: [AuthGuard],
    component: UnitComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuard],
    component: EditComponent
  },
  {
    path: 'delete/:id',
    canActivate: [AuthGuard],
    component: DeleteComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
