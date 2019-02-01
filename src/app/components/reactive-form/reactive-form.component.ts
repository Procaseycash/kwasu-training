import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      profession: ['', Validators.required],
      feeStatus: ['', Validators.required],
    });
  }

  createOrUpdateStudent() {
    console.log('StudentData=', this.studentForm.value);
  }

  spreadOps(...data: Array<any>) {
    console.log('Data=', data);
  }

  ngOnInit() {
  this.spreadOps('lel', 'james', 'suyyusd', 'sadyus', 1, 2, 4, 5, 5);
  this.studentForm.patchValue({
    name: 'Kazeem',
    city: 'Ilorin',
    profession: 'Soft D.',
    feeStatus: 'PAID'
  })
  }

}
