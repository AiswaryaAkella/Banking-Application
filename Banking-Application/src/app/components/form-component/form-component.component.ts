import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit{
  containers = [1, 2, 3];
  formForm!: FormGroup;

  ngOnInit(): void {
    this.formForm = new FormGroup({
      currency: new FormControl(''),
      amount: new FormControl(''),
      interest: new FormControl(''),
      accountType: new FormControl(''),
      period: new FormControl('')
    });
  }

  onSubmit() {
    console.log('Form', 'submitted:', this.formForm.value);
  }

}