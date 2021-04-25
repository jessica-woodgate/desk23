import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from "d3"; 
import * as topojson from "topojson-client";

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
   let sensitivity = 100;
   const jsonTarget = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

   var projection = d3.geoOrthographic()
   .scale(300)
   .rotate([0,-30])
   .translate([width/2 , height/2]);
   const initialScale = projection.scale();
   var path = d3.geoPath().projection(projection);
   
   let svg = d3.select("#mapContainer")
   .append("svg")
   .attr("width", width)
   .attr("height", height);

  let globe = svg.append("circle")
    .attr("id", "globe")  
    .attr("fill", "")
    .attr("stroke", "")
    .attr("stroke-width", "")
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("r", initialScale);
  
    const graticule = d3.geoGraticule();
   
    svg.append("path")
      .datum(graticule())
      .attr("class", "graticule")
      .attr("d", path)
      .attr('fill', 'none')
      .attr('stroke', '#cccccc')
      .attr('stroke-width', '0.5px');

      var map = svg.append("g");

      d3.json(jsonTarget)
      .then(data => {
          const countries = topojson.feature(data, data.objects.countries);
          map.append("g");
          map.selectAll('path').data(countries.features)
          .enter().append('path')
          .attr('class', 'country')
          .attr('d', 'path')
          .append('title')
          .text(data => data.properties.name); 
      });
  }

}
