import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor() { }
  getStudents() {
    return [
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
  }
}
