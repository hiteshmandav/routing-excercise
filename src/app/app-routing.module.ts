import { NotAuthorizedComponent } from './admin/not-authorized/not-authorized.component';
import { PermisionGaurdService } from './guards/permision-gaurd.service';
import { AutherizationGaurdService } from './guards/autherization-gaurd.service';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AutherizationGaurdService],
    children: [
      {
        path: '',
        canActivateChild: [PermisionGaurdService],
        children: [
          {
            path: 'add-user',
            component: AddUserComponent
          },
          {
            path: 'add-product',
            component: AddProductComponent
          },
        ]
      },
      {
        path: 'view-product',
        component: ViewProductComponent
      },
      {
        path: 'not-autherized',
        component: NotAuthorizedComponent
      }
    ]
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
