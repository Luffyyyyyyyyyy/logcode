import { Component } from '@angular/core';

@Component({ // declaration
  selector: 'app-root',  //HTML TAG
  templateUrl: './app.component.html', //HTML file we are using
  styleUrls: ['./app.component.css'] //contains css
})
// export class AppComponent { //contains properties & methods,custom methods
//   title = 'log';
// }
// it is not using ts by default so we use it like this by defining the type of variable
// export class AppComponent {
//   title: string = 'Task Tracker';
// }
// this is string interpolation {{}}

export class AppComponent {
  
}