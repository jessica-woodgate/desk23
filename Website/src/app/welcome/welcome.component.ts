import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  enterShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showEnter() {
    this.enterShown = true;
  }

}
