import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public addProductForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      name: '',
      quantity: ''
    })
  }

  clearForm() {
    this.addProductForm.reset();
  }

}
