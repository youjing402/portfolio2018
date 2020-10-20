import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itale',
  templateUrl: './itale.component.html',
  styleUrls: ['./itale.component.scss']
})
export class ItaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
