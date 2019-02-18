import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-involved',
  templateUrl: './involved.component.html',
  styleUrls: ['./involved.component.scss']
})
export class InvolvedComponent implements OnInit {
	@ViewChild('wrapper') wrapper: ElementRef;
	isNavbarCollapsed = true;
	private _albums: Array<{src: string, thumb: string}> = [];
	private _ids: Array<string> = [];

  constructor(private _lightbox:Lightbox, private _lightboxConfig: LightboxConfig) { }

  ngOnInit() {
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

}
