var width = 960;
var height = 960;
var sensitivity = 100;

var projection = d3.geoOrthographic()
  .scale(300)
  .rotate([0,-30])
  .translate([width / 2, height / 2]);

const jsonTarget = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const initialScale = projection.scale();
var path = d3.geoPath().projection(projection)

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

  svg.call(d3.drag().on('drag', () => {
    const rotate = projection.rotate()
    const k = sensitivity / projection.scale()
    projection.rotate([
      rotate[0] + d3.event.dx * k,
      rotate[1] - d3.event.dy * k
    ])
    path = d3.geoPath().projection(projection)
    svg.selectAll("path").attr("d", path)
  }))
    .call(d3.zoom().on('zoom', () => {
    if(d3.event.transform.k > 0.3) {
      projection.scale(initialScale * d3.event.transform.k)
      path = d3.geoPath().projection(projection)
      svg.selectAll("path").attr("d", path)
      globe.attr("r", projection.scale())
    }
    else {
      d3.event.transform.k = 0.3
    }
  }))

var map = svg.append("g");

  d3.json(jsonTarget)
  .then(data => {
      const countries = topojson.feature(data, data.objects.countries);
      map.selectAll('path').data(countries.features)
      .enter().append('path')
      .attr('class', 'country')
      .attr('d', path)
      .append('title')
      .text(data => data.properties.name); 
  });

