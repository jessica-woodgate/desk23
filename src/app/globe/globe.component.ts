import { Component, AfterViewInit, ViewChild, Input, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as data from '../../data/countries.json';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})

export class GlobeComponent implements AfterViewInit {
  //'canvas' refers to the one established in the html file 
  //canvasRef is the variable we are using
  //ViewChild basically sets up where the canvas element is
  @ViewChild('canvas') cReferemce!: ElementRef;

  renderer = new THREE.WebGLRenderer;
  scene : THREE.Scene;
  camera : THREE.PerspectiveCamera;
  controls! : OrbitControls;
  globe! : THREE.Mesh;
  mainLight! : THREE.Light;

  windowWidth! : number;
  windowHeight! : number;

  lightGroup!: THREE.Group;
  listOfCountries:  any  = (data  as  any).default;

  private get aspectRatio(): number {
    return this.windowWidth / this.windowHeight;
  }

  private get canvas(): HTMLCanvasElement {
    return this.cReferemce.nativeElement;
  }

  constructor() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, this.windowWidth/this.windowHeight, 0.1, 1000)

    this.lightGroup = new THREE.Group();
  }

  ngAfterViewInit() {
    this.setScene();
    this.setCamera();
    this.setRenderer();
    this.setControls();

    this.createLightGroup();
    this.createGlobe();

    this.animate();
    this.setAllPoints();
  }


  setScene() {

    const loader = new THREE.CubeTextureLoader();

    const skyBox = loader.load([
      '../../assets/images/space_right.png',
      '../../assets/images/space_left.png',
      '../../assets/images/space_top.png',
      '../../assets/images/space_bot.png',
      '../../assets/images/space_front.png',
      '../../assets/images/space_back.png',
    ])

    this.scene.background = skyBox;
  }

  setCamera() {
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();
	  this.camera.position.set( 40, 0, 0 );
	  this.camera.lookAt( this.scene.position );
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });

    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.windowWidth, this.windowHeight);
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.autoRotate = false;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.minDistance = 12;
    this.controls.maxDistance = 60;
    this.controls.update();
  }

  createLightGroup() {
    this.mainLight = new THREE.SpotLight( 0xffffff );
	  this.mainLight.position.set( 0, 0, 50 );
    this.lightGroup.add(this.mainLight);
    this.scene.add(this.lightGroup);
  }

  createGlobe() {
 
    //maps from: http://planetpixelemporium.com/earth.html && https://www.solarsystemscope.com/textures/
    let Emap = new THREE.TextureLoader().load('../../assets/images/2k_earth_daymap.jpg');
    let Ebump = new THREE.TextureLoader().load('../../assets/images/earthbump4k.jpg');
    let Espec = new THREE.TextureLoader().load('../../assets/images/earthspec4k.jpg');

    const sphere = new THREE.SphereGeometry(10,50,50);
    const material = new THREE.MeshPhongMaterial({ 
        map : Emap,
        bumpMap : Ebump,
        bumpScale : 0.10,
        specularMap : Espec,
        specular : new THREE.Color('grey')
      });

    this.globe = new THREE.Mesh(sphere, material);
    this.scene.add(this.globe);

  }

  animate() {
    //here is the most important difference! learn why
    window.requestAnimationFrame(() => this.animate());

    this.lightGroup.quaternion.copy(this.camera.quaternion);
    this.render();
    this.controls.update();
  }

  render () {
    this.renderer.render(this.scene, this.camera);
  }
  
  //working on coordinates
  //reference: https://stackoverflow.com/questions/1185408/converting-from-longitude-latitude-to-cartesian-coordinates
  addCoordinatePoint (country:string, latitude: number, longitude: number, countryArea:number) {

    //radius of the globe
    const radius = 10;

    //convert degrees to radians 
    let globeLatRads = latitude * (Math.PI / 180);
    let globeLongRads = -longitude * (Math.PI / 180);

    //get x, y and z coordinates
    let x = Math.cos(globeLatRads) * Math.cos(globeLongRads) * radius;
    let y = Math.cos(globeLatRads) * Math.sin(globeLongRads) * radius;
    let z = Math.sin(globeLatRads) * radius;

    //create spherical shape
    let size = countryArea / 9000000; //size will need to be dynamically set based on the area per sqmile

    if (size < 0.2) {
      size = 0.2;
    }

    let poi = new THREE.SphereGeometry(size,32,32);    
    let pointMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
    let point = new THREE.Mesh(poi, pointMaterial); 


    //set the point on the globe
    point.position.set( x, z, y );

    this.globe.add(point);
}

  setAllPoints() {
    for (let i = 0; i < this.listOfCountries.length; i++) {
      this.addCoordinatePoint(this.listOfCountries[i].Country, this.listOfCountries[i].latitude, this.listOfCountries[i].longitude, this.listOfCountries[i].Area_sq_mi);
    }
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix(); 
    this.renderer.setSize(this.windowWidth, this.windowHeight);
  }

}
