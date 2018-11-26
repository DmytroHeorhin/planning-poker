import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-selector',
  templateUrl: './room-selector.component.html'
})
export class RoomSelectorComponent implements OnInit {
  @Input() roomName: string;

  constructor() { }

  ngOnInit() {
  }
}
