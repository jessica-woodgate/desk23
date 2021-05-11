import { Component, OnInit, ViewChild, ElementRef, HostListener, Host } from '@angular/core';
import { Country } from '../models/country';
import { DataService } from '../services/data.service';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

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
    this.camera = new THREE.PerspectiveCamera(50, this.windowWidth/this.windowHeight, 0.1, 1000);

    this.lightGroup = new THREE.Group();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.countryName = null;
    this.literacyRate = null;
    this.displayType = "none";

    this.top = "0px";
    this.left = "0px";
  }

 ngOnInit() {
    this.countryService.getCountryData().subscribe((countries) => {
      this.listOfCountries = countries;
      this.initDependencies();
    });
  } 

  
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
    const loader = new THREE.TextureLoader();
    //image from: https://line.17qq.com/articles/thrtescx.html
    const texture = loader.load(
      '../../assets/images/spaceEqui.png', 
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(this.renderer, texture);
        this.scene.background = rt.texture;
      }); 
   }

  setCamera() {
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();
	  this.camera.position.set( 35, 0, 0 ); //changed from 40 to 35
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
  
    const sphere = new THREE.SphereGeometry(10,50,50);
    const material = new THREE.MeshPhongMaterial({
        map : Emap});

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

    //radius of the globe
    const radius = 10;

    //convert degrees to radians
    let globeLatRads = latitude * (Math.PI / 180);
    let globeLongRads = -longitude * (Math.PI / 180);

    //get x, y and z coordinates
    let x = Math.cos(globeLatRads) * Math.cos(globeLongRads) * radius;
    let y = Math.cos(globeLatRads) * Math.sin(globeLongRads) * radius;
    let z = Math.sin(globeLatRads) * radius;

    //credit: https://stackoverflow.com/questions/51800598/threejs-make-meshes-perpendicular-to-the-sphere-face-its-sitting-on
    let height = litData / 18;
    let poi2 = new THREE.CylinderGeometry(0.1,0.1,height,64);
    poi2.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    let poi2Material = new THREE.MeshBasicMaterial();

    let point2 = new THREE.Mesh(poi2, poi2Material);
    point2.position.set( x, z, y);
    point2.lookAt(0,0,0);
    point2.userData.Country = country;
    point2.userData.LiteracyRate = litData;

    //yellow to red
    if (litData<20) {
      point2.material.color.set(0xFF2C05);
    }
    if (litData>=20 && litData<40) {
      point2.material.color.set(0xFD6104);
    }
    if (litData>=40 && litData<60) {
      point2.material.color.set(0xFD9A01);
    }
    if (litData>=60 && litData<80) {
      point2.material.color.set(0xFFCE03);
    }
    if (litData>=80) {
      point2.material.color.set(0xFEF001);
      
    } 
    this.globe.add(point2);
}


  setAllPoints(userSetYear: number) {

    //remove all children if any and add new ones
    while(this.globe.children.length) {
      this.globe.remove(this.globe.children[0]);
    }
    
    for (let i = 0; i < this.listOfCountries.length; i++) {
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
    event.preventDefault();

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.globe.children);

    if (intersects.length == 0) {
      this.displayType = "none";
      this.countryName = null;
      this.literacyRate = null;
    }

    for (let i = 0; i < intersects.length; i++) {
      console.log(intersects[0]);

      //show the textbox
      this.displayType = "flex";
      //position the textbox
      this.top = (event.clientY - 100) + 'px';
      this.left = (event.clientX + 20) + 'px';

      //@ts-ignore
      intersects[ 0 ].object.material.color.set( 0x52307c );
      this.countryName = intersects[0].object.userData.Country;
      this.literacyRate = intersects[0].object.userData.LiteracyRate;
    }
  }

  onSlide() {
    this.setAllPoints(this.currentYear);
  }
}
