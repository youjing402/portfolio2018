import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import {timer} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	isLoaded = false;
	isOpened = false;
	isScrolled1 = false;
	isScrolled2 = false;
	hasScrolled2Passed = false;
	hasScrolled3Passed = false;
	isScrolled3 = false;
	isScrolled4 = false;
	isScrolled5 = false;
	isNavbarCollapsed = true;
	blendedColor = "#ff5555";
	originalColor = "#ff5555";
	loadingColor = "#FCA18C";
	transparentFontOpacity = 1;
	nameZoom = 1;
	fragment = "";

	isMeSelected = true;
	isMapSelected = false;
	isCodeSelected = false;
	isAnalysisSelected = false;
	isResearchSelected = false;
	isDesignSelected = false;

	selectedPart = "me";

	meHeight = 0;

	constructor(public el: ElementRef, public route: ActivatedRoute) { }

	ngOnInit() {
		this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
		const t = timer(2000);
		const subscribe = t.subscribe(val => this.isLoaded = true);
		const t2 = timer(3000);
		const subscribe2 = t2.subscribe(val => this.isOpened = true);
	}

	/*
	ngAfterViewChecked(): void {
		try {
			if(this.fragment) {
				document.querySelector('#' + this.fragment).scrollIntoView();
				console.log("fsdafda");
			}
		} catch (e) { }
	}
	*/

	changeBGColor() {

	}

	@HostListener('window:scroll', ['$event'])
	checkScroll() {
		//const componentPosition = this.el.nativeElement.offsetTop;
		const scrollPosition = window.pageYOffset;
		const firstScreenRatio = 1/5;
		const maxScrollPosition = document.getElementsByClassName("home-opened")[0].clientHeight*(1-firstScreenRatio);
		const fullScrollPosition = document.getElementsByClassName("home-opened")[0].clientHeight;
		var percentage = scrollPosition / maxScrollPosition;
		this.blendedColor = this.blend(this.originalColor, "#ff7c7c", percentage);
		if (scrollPosition > maxScrollPosition/5) {
			this.isScrolled1 = true;
		}
		if (scrollPosition < maxScrollPosition/5) {
			this.isScrolled1 = false;
		}
		if (scrollPosition > maxScrollPosition*2/5) {
			console.log("max1 = " + scrollPosition);
			this.isScrolled2 = true;
			const t = timer(500);
			const subscribe = t.subscribe(val => this.hasScrolled2Passed = true);
		}
		if (scrollPosition < maxScrollPosition*2/5) {
			this.isScrolled2 = false;
			this.hasScrolled2Passed = false;
		}
		if (scrollPosition > maxScrollPosition*2.2/5) {
			console.log("max2 = " + maxScrollPosition);
			this.isScrolled3 = true;
			const t2 = timer(300);
			const subscribe = t2.subscribe(val => this.hasScrolled3Passed = true);
		}
		if (scrollPosition < maxScrollPosition*2.2/5) {
			this.isScrolled3 = false;
			this.hasScrolled3Passed = false;
		}
		if (scrollPosition > maxScrollPosition) {
			this.isScrolled4 = true;
			this.setHeightByChildrenHeight("side-screen-me","me-img-bg");
		}
		if (scrollPosition < maxScrollPosition) {
			this.isScrolled4 = false;
		}
		if (scrollPosition > fullScrollPosition) {
			this.isScrolled5 = true;
		}
		if (scrollPosition < fullScrollPosition) {
			this.isScrolled5 = false;
		}

		this.nameZoom = Math.max (0.6, 1 - (scrollPosition-(maxScrollPosition/3)) / 500);
		this.transparentFontOpacity = Math.max (1, 1 - (scrollPosition-(maxScrollPosition/3)) / 500);
	}

	blend(hex1, hex2, percentage) {
		var hexCode1 = hex1.split('');
		var hexCode2 = hex2.split('');
		var r1 = hexCode1[1] + hexCode1[2];
		var g1 = hexCode1[3] + hexCode1[4];
		var b1 = hexCode1[5] + hexCode1[6];
		var r2 = hexCode2[1] + hexCode2[2];
		var g2 = hexCode2[3] + hexCode2[4];
		var b2 = hexCode2[5] + hexCode2[6];

		var r3 = (parseInt("0x"+r1) + Math.ceil((parseInt("0x"+r2) - parseInt("0x"+r1))*percentage)).toString(16);
		var g3 = (parseInt("0x"+g1) + Math.ceil((parseInt("0x"+g2) - parseInt("0x"+g1))*percentage)).toString(16);
		var b3 = (parseInt("0x"+b1) + Math.ceil((parseInt("0x"+b2) - parseInt("0x"+b1))*percentage)).toString(16);

		console.log (parseInt("0x"+r1));

		if (r3.length == 1) {
			r3 = "0" + r3;
		}

		if (g3.length == 1) {
			g3 = "0" + g3;
		}

		if (b3.length == 1) {
			b3 = "0" + b3;
		}

		var hex3 = "#" + r3 + g3 + b3;
		return hex3;
	}

	setHeightByChildrenHeight(parent, child)
	{
		var height = document.getElementsByClassName("me-img-bg")[0].clientHeight;

		this.meHeight = height;
	}

	selectMap() {
		this.isMapSelected = true;
	}

	selectMe() {
		this.isMeSelected = true;
	}

	scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
