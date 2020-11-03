import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
  `<div>
    <h2 [class]=successText >Color is green</h2>
    <h2 [class.text-danger]="hasError"> ERROR CODE!</h2>
    <h2 [ngClass]="messageClasses" >OBJECT DIRECTIVE</h2>
  </div>`,
  styles: [
    `
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {
  
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public successText = "text-success"

  constructor() { }

  ngOnInit(): void {
  }
}
