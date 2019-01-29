import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echoes',
  templateUrl: './echoes.component.html',
  styleUrls: ['./echoes.component.scss']
})
export class EchoesComponent implements OnInit {
	isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {

  }

}
