import { Component } from '@angular/core';

//Metadata attached in the form of a decorator 
//-> the Component Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Class
export class AppComponent {
  title = 'Angular';
}