import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-d3-globe',
  templateUrl: './d3-globe.component.html',
  styleUrls: ['./d3-globe.component.css']
})
export class D3GlobeComponent implements OnInit {
  @ViewChild('mapContainer') cReference!: ElementRef; 
  constructor() { }

  ngOnInit() {

    let width = 960;
    let height = 960; 
  }

}
