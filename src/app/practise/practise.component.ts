import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {

  public title = "Practising Angular"
  public titleID = "titleID123"
  public paragraphID = "paragraphID456"
  public inputID = "inputID789"
  // public inputID2 = "inputID7892"
  // public inputID3 = "inputID7893"

  public onDisabled = true;
  public notDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
