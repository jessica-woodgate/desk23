import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {


  tutorialShown: boolean = true;

  spinShown: boolean = true;

  zoomShown: boolean = false;

  clickShown: boolean = false;

  slideShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
  }

  showTutorial() {
    this.tutorialShown = true;
  }

  hideTutorial() {
    this.tutorialShown = false;
  }
}
