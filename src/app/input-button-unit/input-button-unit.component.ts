import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title : string = '';

  @ViewChild('inputElementRef') input;

  constructor() { }

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    this.input.nativeElement.value = '';
  }
  ngOnInit() {
  }

}
