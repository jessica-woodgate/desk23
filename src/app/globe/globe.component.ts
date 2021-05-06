import { Component, OnInit, ViewChild, ElementRef, HostListener, Host } from '@angular/core';
import { Country } from '../models/country';
import { DataService } from '../services/data.service';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import * as data from '../../data/countries.json';
//import { Data } from '@angular/router';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})

export class GlobeComponent implements OnInit {
  //'globeCanvas' refers to the one established in the html file
  //cReference is the variable we are using
  //ViewChild basically sets up where the canvas element is
  @ViewChild('globeCanvas') cReference!: ElementRef;

  countryName! : string | null;
  literacyRate! : string | null;
  currentYear : number = 2015;
  displayType! : string;

  top! : string;
  left! : string;

  renderer = new THREE.WebGLRenderer;
  scene : THREE.Scene;
  camera : THREE.PerspectiveCamera;
  controls! : OrbitControls;
  globe! : THREE.Mesh;
  mainLight! : THREE.Light;

  windowWidth! : number;
  windowHeight! : number;

  lightGroup!: THREE.Group;
  //listOfCountries:  any  = (data  as  any).default;

  //creating an array of Country objects
  listOfCountries: Country[] = [];

  raycaster!: THREE.Raycaster;
  mouse! : THREE.Vector2;

  private get aspectRatio(): number {
    return this.windowWidth / this.windowHeight;
  }

  private get canvas(): HTMLCanvasElement {
    return this.cReference.nativeElement;
  }

  constructor(private countryService : DataService) {

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, this.windowWidth/this.windowHeight, 0.1, 1000)

    this.lightGroup = new THREE.Group();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.countryName = null;
    this.displayType = "none";

    this.top = "0px";
    this.left = "0px";
  }

 ngOnInit() {
   
    this.countryService.getCountryData().subscribe((countries) => {
      this.listOfCountries = countries;
      this.initDependencies();
    });
    
    //this.listOfCountries  = (this.listOfCountries  as  any).default;
    //console.log("Country printed in ngOnInit : " + this.listOfCountries[0].Entity);
  } 

  /* ngAfterViewInit() {

    this.setScene();
    this.setCamera();
    this.setRenderer();
    this.setControls();

    this.createLightGroup();
    this.createGlobe();

    this.animate();
    this.setAllPoints(this.currentYear);
  } */

  initDependencies() {
    this.setScene();
    this.setCamera();
    this.setRenderer();
    this.setControls();

    this.createLightGroup();
    this.createGlobe();

    this.animate();
    this.setAllPoints(this.currentYear);
  }


  setScene() {

    //const loader = new THREE.CubeTextureLoader();

    const loader = new THREE.TextureLoader();
    //image from: https://line.17qq.com/articles/thrtescx.html
    const texture = loader.load(
      '../../assets/images/spaceEqui.png', 
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(this.renderer, texture);
        this.scene.background = rt.texture;
      }); 

     /*  const texture = loader.load(
        '../../assets/images/spaceEqui2.png', 
        () => {
          const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
          rt.fromEquirectangularTexture(this.renderer, texture);
          this.scene.background = rt.texture;
        }); */

    /* const skyBox = loader.load([
      '../../assets/images/space_right.png',
      '../../assets/images/space_left.png',
      '../../assets/images/space_top.png',
      '../../assets/images/space_bot.png',
      '../../assets/images/space_front.png',
      '../../assets/images/space_back.png',
    ]); */
 
    /* Images appear to be too small in comparison to the ones previously used - let's try zooming in -yep it works */
    /* Keep testing - one or more space images is messing everything up  - bottom2.png is messing it up*/
    /* const skyBox2 = loader.load([
      '../../assets/images/temp/space_right3.png',
      '../../assets/images/temp/space_left3.png',
      '../../assets/images/temp/space_up3.png',
      '../../assets/images/temp/bottom2.png', 
      '../../assets/images/temp/space_front2.png',
      '../../assets/images/temp/space_back3.png'
    ]); */

      //this.scene.background = skyBox; 
   }

  setCamera() {
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();
	  this.camera.position.set( 35, 0, 0 ); //changed from 40 to 30
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
   // this.mainLight = new THREE.PointLight( 0xffffff, 2, 50 );
    this.mainLight = new THREE.AmbientLight( 0xffffff);
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

    this.createCountryNames();

  }

  createCountryNames() {
    let Cmap = new THREE.TextureLoader().load('../../assets/images/WorldMap.png');
    const sphere = new THREE.SphereGeometry(10.2,50,50);
    const material = new THREE.MeshPhongMaterial({
        map : Cmap,
        transparent: true,
        opacity : 1});

    let countryNames = new THREE.Mesh(sphere, material);

    this.scene.add(countryNames);
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
  addCoordinatePoint (country:string, latitude: number, longitude: number, countryArea:number, litData: number) {

    //clear all previous children if any?
    //then set up the new points based of the year value

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
    //let size = countryArea / 9000000;
    /* if (size < 0.2) {
      size = 0.2;
    } */
    //adding the spherical point
    /* let poi = new THREE.SphereGeometry(size,32,32);
    let pointMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
    let point = new THREE.Mesh(poi, pointMaterial);
    //set the point on the globe
    point.position.set( x, z, y );
    point.userData.Country = country;
    point.visible = true;
    //becomes a child of the globe
    this.globe.add(point);  */


    //let's try the above but with cuboids set perpendicular to the globe's surface
    //credit: https://stackoverflow.com/questions/51800598/threejs-make-meshes-perpendicular-to-the-sphere-face-its-sitting-on
    let height = litData / 18;
    let poi2 = new THREE.CylinderGeometry(0.1,0.1,height,64);
    poi2.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let poi2Material = new THREE.MeshBasicMaterial({color:0xcc3367});
    let point2 = new THREE.Mesh(poi2, poi2Material);
    point2.position.set( x, z, y);
    point2.lookAt(0,0,0);
    point2.userData.Country = country;
    point2.userData.LiteracyRate = litData;

    this.globe.add(point2);
}

/* 
const dbController = require('./dbController');
var CountryModel = require('./models/countryData');
 */
  setAllPoints(userSetYear: number) {

    //remove all children if any and add new ones
    while(this.globe.children.length) {
      this.globe.remove(this.globe.children[0]);
    }


    // try this instead
  /*   var results = dbController.findByYear(CountryModel, userSetYear);
    for(let i = 0; i < results.length; i++){
      this.addCoordinatePoint(results[i].toObject().Year);
   } */

    console.log("Length of list of countries is : "+this.listOfCountries.length);

      for (let i = 0; i < this.listOfCountries.length; i++) {
        //this.addCoordinatePoint(this.listOfCountries[i].Country, this.listOfCountries[i].latitude, this.listOfCountries[i].longitude, this.listOfCountries[i].Area_sq_mi);
        //console.log(this.listOfCountries[i].Entity, this.listOfCountries[i].Latitude, this.listOfCountries[i].Longitude);

        if (this.listOfCountries[i].Year == userSetYear) {
          this.addCoordinatePoint(this.listOfCountries[i].Entity, this.listOfCountries[i].Latitude, this.listOfCountries[i].Longitude, this.listOfCountries[i].Area, this.listOfCountries[i].Data);
        }
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

  @HostListener('click',['$event'])
  onMouseClick(event : any) {
    console.log("mouse clicked");
    event.preventDefault();

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.globe.children);

    if (intersects.length == 0) {
      console.log("intersects is empty!");
      this.displayType = "none";
      this.countryName = null;
    }

    for (let i = 0; i < intersects.length; i++) {
      console.log("intersected");
      console.log(intersects[0]);

      //show the textbox
      this.displayType = "flex";

      //position the textbox
      this.top = (event.clientY - 100) + 'px';

      this.left = (event.clientX + 20) + 'px';

      console.log("top is " + this.top);
      console.log("left is : " + this.left);

      //@ts-ignore
      intersects[ 0 ].object.material.color.set( 0xff0000 );
      this.countryName = intersects[0].object.userData.Country;
      this.literacyRate = intersects[0].object.userData.LiteracyRate;
    }

    //this.render();
  }

  onSlide() {
    this.setAllPoints(this.currentYear);
  }

}
