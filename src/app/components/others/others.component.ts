import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const randomNum = "#"+((1<<24)*Math.random()|0).toString(16); 

  document.documentElement.style.setProperty('--main-bg-color', randomNum);
  }

}
