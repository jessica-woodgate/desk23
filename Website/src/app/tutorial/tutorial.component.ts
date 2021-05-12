import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  infoShown: boolean = true;

  spinShown: boolean = false;

  zoomShown: boolean = false;

  clickShown: boolean = false;

  slideShown: boolean = false;

  keysShown: boolean = false;

  showTut: boolean = false;

  hideTut: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  startTutorial() {
    this.hideTut = true;
    this.showTut = false;
    this.infoShown = false;
    this.zoomShown = false;
    this.clickShown = false;
    this.slideShown = false;
    this.keysShown = false;
    this.spinShown = true;
  }

  hideTutorial() {
    this.spinShown = false;
    this.infoShown = false;
    this.zoomShown = false;
    this.clickShown = false;
    this.slideShown = false;
    this.keysShown = false;
    this.hideTut = false;
    this.showTut = true;
  }

  showInfo() {
    this.infoShown = true;
  }

  hideInfo() {
    this.infoShown = false;
    this.spinShown = true;
  }

  hideSpin() {
    this.spinShown = false;
    this.zoomShown = true;
  }

  hideZoom() {
    this.zoomShown = false;
    this.clickShown = true;
  }

  hideClick() {
    this.clickShown = false;
    this.slideShown = true;
  }

  hideSlide() {
    this.slideShown = false;
    this.keysShown = true;
  }

  hideKeys() {
    this.keysShown = false;
    this.showTut = true;
    this.hideTut = false;
  }
}
