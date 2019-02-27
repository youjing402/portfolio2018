import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, HostListener} from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { Favicons} from '../favicons.service';


@Component({
  selector: 'app-echoes',
  templateUrl: './echoes.component.html',
  styleUrls: ['./echoes.component.scss']
})
export class EchoesComponent implements OnInit {
  private favicons: Favicons;
  @ViewChild('wrapper') wrapper: ElementRef;
  isNavbarCollapsed = true;
  private _albums: Array<{src: string, thumb: string}> = [];
  private _ids: Array<string> = [];
  isScrolled1 = false;
  isScrolled2 = false;
  isScrolled3 = false;
  isScrolled4 = false;
  isScrolled5 = false;
  isScrolled6 = false;

  constructor(private _lightbox:Lightbox, private _lightboxConfig: LightboxConfig, favicons: Favicons) {
  	//_lightboxConfig.fitImageInViewPort = false;
  	//_lightboxConfig.disableScrolling = true;
    this.favicons = favicons;
    this.favicons.activate( "purple" );
  }

  ngOnInit() {
    //this.resetFavicon();
  }

  // I reset the favicon to use the "default" item.
  public resetFavicon() : void {

    //console.log( "Resetting favicon" );
    //this.favicons.reset();
    //this.favicons.activate( "purple" );

  }


  ngAfterContentInit() {
  	this.lightboxImages();
  }

  lightboxImages() {
  	let images = this.wrapper.nativeElement.querySelectorAll('img');
  	//return images;
  	for (let image of images) {
  		let albumEntry = {src: image.src, thumb: image.src};
  		this._albums.push(albumEntry);
  		this._ids.push(image.id);
  	}
    console.log(images);
    console.log(this._albums);
    console.log(this._ids);
  }

  open(id: string): void {
  	let index = this._ids.indexOf(id);
  	console.log(index);
  	this._lightbox.open(this._albums, index);
  }

  close(): void {
  	this._lightbox.close();
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

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
