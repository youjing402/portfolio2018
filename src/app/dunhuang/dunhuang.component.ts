import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dunhuang',
	templateUrl: './dunhuang.component.html',
	styleUrls: ['./dunhuang.component.scss']
})
export class DunhuangComponent implements OnInit {
	private isExpanded = false;

	private isSelected1 = true;
	private isSelected2 = false;
	private isSelected3 = false;
	private isSelected4 = false;

	constructor() { }

	ngOnInit() {
	}

	expand(): void {
		this.isExpanded = !this.isExpanded;
	}

}
