import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'jad-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<FormComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data?: any) {
    this.form = this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    return this.formBuilder.group({
name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      website: new FormControl(''),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        suite: new FormControl(''),
        city: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required]),
        geo: new FormGroup({
          lat: new FormControl(''),
          lng: new FormControl('')
        })
      }),
      company: new FormGroup({
        name: new FormControl('', [Validators.required]),
        catchPhrase: new FormControl(''),
        bs: new FormControl('')
      })
    });
  }

  onSubmit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
