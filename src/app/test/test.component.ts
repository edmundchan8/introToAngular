import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  //creating new property
  public title = "Angular Task 01"

  public a ="apples"
  public b = "bananas"

  constructor() { }
  printTwoWords(first, second){
    return "We will combine two words, the first is " + first + " and the second is " + second + "." ;
  }

  ngOnInit(): void {
  }
}
