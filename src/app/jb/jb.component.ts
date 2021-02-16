import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-jb',
	templateUrl: './jb.component.html',
	styleUrls: ['./jb.component.scss']
})
export class JbComponent implements OnInit {
	isNavbarCollapsed = true;
	isExpanded = false;

	isScrolled1 = false;
	isScrolled2 = false;
	isScrolled3 = false;
	isScrolled4 = false;
	isScrolled5 = false;

	mobile = false;

	constructor() { }

	ngOnInit() {
		if (window.screen.width <= 576) { // 768px portrait
			this.mobile = true;
		}
		console.log(window.screen.width);
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
