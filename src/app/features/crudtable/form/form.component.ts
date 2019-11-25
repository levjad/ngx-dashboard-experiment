import { AfterContentChecked, ChangeDetectorRef, Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'jad-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterContentChecked {
  mode: string;
  form: any;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<FormComponent>,
              public cdr: ChangeDetectorRef,
              @Optional() @Inject(MAT_DIALOG_DATA) public data?: any) {
      this.form = this.createForm();
   }

  ngOnInit() {
    this.patchData();
  }

  ngAfterContentChecked() {

  }

  createForm() {
    this.mode = 'create';
    return this.formBuilder.group({
      id: new FormControl(''),
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

  patchData() {
    if (this.data) {
      this.mode = 'edit';
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
