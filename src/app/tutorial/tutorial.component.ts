import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {


  tutorialShown: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showTutorial() {
    this.tutorialShown = true;
  }

  hideTutorial() {
    this.tutorialShown = false;
  }



}
