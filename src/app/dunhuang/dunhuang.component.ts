import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-dunhuang',
	templateUrl: './dunhuang.component.html',
	styleUrls: ['./dunhuang.component.scss']
})
export class DunhuangComponent implements OnInit {
	isNavbarCollapsed = true;
	isExpanded = false;

	isSelected1 = true;
	isSelected2 = false;
	isSelected3 = false;
	isSelected4 = false;

	isScrolled1 = false;
	isScrolled2 = false;
	isScrolled3 = false;
	isScrolled4 = false;
	isScrolled5 = false;
	isScrolled6 = false;

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

	@HostListener('window:scroll', ['$event'])
	checkScroll() {
		//const componentPosition = this.el.nativeElement.offsetTop;
		const scrollPosition = window.pageYOffset;
		const bodyRectTop = document.body.getBoundingClientRect().top;
		//const firstScreenRatio = 1/5;
		const sideScrollPosition = document.getElementsByClassName("banner")[0].clientHeight;
		const sideScroll2 = document.getElementsByClassName("big-part-2")[0].getBoundingClientRect().top - bodyRectTop;
		const sideScroll3 = document.getElementsByClassName("big-part-3")[0].getBoundingClientRect().top - bodyRectTop;
		const sideScroll4 = document.getElementsByClassName("big-part-4")[0].getBoundingClientRect().top - bodyRectTop;
		const sideScroll5 = document.getElementsByClassName("big-part-5")[0].getBoundingClientRect().top - bodyRectTop;
		const sideScroll6 = document.getElementsByClassName("big-part-6")[0].getBoundingClientRect().top - bodyRectTop;
		//var percentage = scrollPosition / maxScrollPosition;
		//this.blendedColor = this.blend(this.originalColor, "#ff7c7c", percentage);
		if (scrollPosition >= sideScrollPosition) {
			this.isScrolled1 = true;
		}
		if (scrollPosition < sideScrollPosition) {
			this.isScrolled1 = false;
		}

		if (scrollPosition >= sideScroll2) {
			this.isScrolled2 = true;
		}
		if (scrollPosition < sideScroll2) {
			this.isScrolled2 = false;
		}

		if (scrollPosition >= sideScroll3) {
			this.isScrolled3 = true;
		}
		if (scrollPosition < sideScroll3) {
			this.isScrolled3 = false;
		}

		if (scrollPosition >= sideScroll4) {
			this.isScrolled4 = true;
		}
		if (scrollPosition < sideScroll4) {
			this.isScrolled4 = false;
		}

		if (scrollPosition >= sideScroll5) {
			this.isScrolled5 = true;
		}
		if (scrollPosition < sideScroll5) {
			this.isScrolled5 = false;
		}

		if (scrollPosition >= sideScroll6) {
			this.isScrolled6 = true;
		}
		if (scrollPosition < sideScroll6) {
			this.isScrolled6 = false;
		}
	}

	scrollToElement($element): void {
		$element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	}

}
