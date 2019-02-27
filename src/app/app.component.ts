import { Component, OnInit } from '@angular/core';
import { TitleService } from './title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Jing 💡";

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
  	this.titleService.init();
  }
}
