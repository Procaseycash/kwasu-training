import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-event',
  templateUrl: './input-event.component.html',
  styleUrls: ['./input-event.component.css']
})
export class InputEventComponent implements OnInit {
  @Input() public studentDetail: object = null;
  constructor() { }

  ngOnInit() {
  }

}
