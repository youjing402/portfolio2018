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

	selectStage(id: number) {
		this.isSelected1 = false;
		this.isSelected2 = false;
		this.isSelected3 = false;
		this.isSelected4 = false;

		if (id == 1) {
			this.isSelected1 = true;
		} else if (id == 2) {
			this.isSelected2 = true;
		} else if (id == 3) {
			this.isSelected3 = true;
		} else if (id == 4) {
			this.isSelected4 = true;
		}
	}

}
