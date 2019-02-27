import { Component, OnInit } from '@angular/core';
import { Favicons} from '../favicons.service';

@Component({
  selector: 'app-poco',
  templateUrl: './poco.component.html',
  styleUrls: ['./poco.component.scss']
})
export class PocoComponent implements OnInit {
	private favicons: Favicons;
	isNavbarCollapsed = true;

  constructor(favicons: Favicons) { 
  	this.favicons = favicons;
    this.favicons.activate( "blue" );
  }

  ngOnInit() {
  	//this.favicons.activate( "blue" );
  }

}
