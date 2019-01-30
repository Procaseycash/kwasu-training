import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-event',
  templateUrl: './output-event.component.html',
  styleUrls: ['./output-event.component.css']
})
export class OutputEventComponent implements OnInit {
  @Output() public adder: EventEmitter<number> = new EventEmitter();

  constructor() { }

  addCounter() {
    this.adder.emit(1);
  }

  removeCounter() {
    this.adder.emit(-1);
  }

  ngOnInit() {
  }

}
