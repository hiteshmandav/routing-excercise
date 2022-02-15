import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AdminComponent } from './admin.component';
import { AutherizationGaurdService } from '../guards/autherization-gaurd.service';
import { PermisionGaurdService } from '../guards/permision-gaurd.service';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsGuardService } from '../guards/forms-guard.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
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
            component: AddProductComponent,
            canDeactivate: [FormsGuardService],
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule{ }
