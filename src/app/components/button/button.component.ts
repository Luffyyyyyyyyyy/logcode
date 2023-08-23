import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  // ! used for varaible & ? used for optional
  // here we use Input to make a property
  @Output() btnClick = new EventEmitter();
  // Event emitter is used to add custom event

  /*onClick() {
    console.log("Add")
  }*/
  onClick() {
    this.btnClick.emit()
  }

  // we dont use this bcz it show in console when we click & its a function or method , every button has different purpose
  // we want a reusable button for that we will use Output for Event emitter
}

