import { FormsGuardService } from './guards/forms-guard.service';
import { NotAuthorizedComponent } from './admin/not-authorized/not-authorized.component';
import { PermisionGaurdService } from './guards/permision-gaurd.service';
import { AutherizationGaurdService } from './guards/autherization-gaurd.service';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m=> m.AdminRoutingModule),
    canActivate: [AutherizationGaurdService],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
