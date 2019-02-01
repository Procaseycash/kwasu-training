import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../Interfaces/istudent";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public studentInfo: IStudent = {
    name: '',
    city: '',
    profession: '',
    feeStatus: ''
  };

  public student: IStudent = {
    name: '',
    city: '',
    profession: '',
    feeStatus: ''
  };

  constructor() {
  }


  createOrUpdateStudent(values) {
    console.log('StudentInfo', this.studentInfo, values);
  }

  create(values) {
    console.log('Student=', this.student, values);
  }

  ngOnInit() {
  }

}

