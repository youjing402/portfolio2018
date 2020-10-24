import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-itale',
  templateUrl: './itale.component.html',
  styleUrls: ['./itale.component.scss']
})
export class ItaleComponent implements OnInit {

  isNavbarCollapsed = true;

  isScreen1 = true;
  isScreen2 = false;
  isScreen3 = false;
  isScreen4 = false;

  isScrolled1 = false;
  isScrolled2 = false;
  isScrolled3 = false;
  isScrolled4 = false;
  isScrolled5 = false;
  isScrolled6 = false;

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  selectScreen(id: number) {
    this.isScreen1 = false;
    this.isScreen2 = false;
    this.isScreen3 = false;
    this.isScreen4 = false;

    if (id == 1) {
      this.isScreen1 = true;
    } else if (id == 2) {
      this.isScreen2 = true;
    } else if (id == 3) {
      this.isScreen3 = true;
    } else if (id == 4) {
      this.isScreen4 = true;
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


    console.log(scrollPosition);
    console.log("1" + this.isScrolled1);
     console.log("22" + sideScroll2);
    console.log("2" + this.isScrolled2);
  }

}
