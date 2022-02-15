import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AddUserComponent,
    AddProductComponent,
    ViewProductComponent,
    NotAuthorizedComponent,
  ]
})

export class AdminModule { }
