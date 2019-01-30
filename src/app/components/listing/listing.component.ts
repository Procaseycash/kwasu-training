import {Component, OnInit} from '@angular/core';
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public students: Array<object> = [
    {
      name: 'Kazeem Olanipekun',
      profession: 'Software Developer',
      city: 'Ilorin',
      feeStatus: 'PAID'
    },
    {
      name: 'Bola James',
      profession: 'Teacher',
      city: 'Ikeja',
      feeStatus: 'PARTIALLY_PAID'
    },
    {
      name: 'Segun Adeola',
      profession: 'Software Developer',
      city: 'Ilorin',
      feeStatus: 'NOT_PAID'
    }
  ];
  public studentInfo;
  public userName = 'SilentWolf';
  public counter = 0;

  constructor() {
  }

  payNow(studentInfo) {
    this.studentInfo = studentInfo;
    alert(`My name is ${this.studentInfo.name}, I'm about to pay for my school fees`);
    this.studentInfo.feeStatus = 'PAID';
  }

  getAdder(value) {
    if (this.counter < 0 || (this.counter === 0 && value < 0)) return this.counter = 0;
    this.counter = this.counter + value;
  }

  ngOnInit() {

  }

}
