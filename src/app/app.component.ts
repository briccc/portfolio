import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements  OnInit {

  title = 'portfolio';
  @ViewChild('mobileLayout') mobileLayout!: ElementRef;

  isMobile: boolean = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener("resize", () => this.checkMobile());
  }

  checkMobile() {
    const mediaquery = window.matchMedia("(max-width: 768px)");
    this.isMobile = mediaquery.matches;
  }

}
