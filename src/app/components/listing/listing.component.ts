import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  payNow(studentInfo) {
    this.studentInfo = studentInfo;
    alert(`My name is ${this.studentInfo.name}, I'm about to pay for my school fees`);
    this.studentInfo.feeStatus = 'PAID';
  }

  ngOnInit() {

  }

}
