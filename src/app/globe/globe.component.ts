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

  //receive an input from the parent class (i.e. AppComponent)
  //@Input() name!: string;

  //'canvas' refers to the one established in the html file 
  //canvasRef is the variable we are using
  //ViewChild basically sets up where the canvas element is
  @ViewChild('canvas') canvasRef!: ElementRef;

  renderer = new THREE.WebGLRenderer;
  scene : THREE.Scene;
  camera : THREE.PerspectiveCamera;
  controls! : OrbitControls;
  mesh! : THREE.Mesh;
  light! : THREE.Light;

  windowWidth! : number;
  windowHeight! : number;

  lightGroup!: THREE.Group;
  listOfCountries:  any  = (data  as  any).default;

  private calculateAspectRatio(): number {
    /* const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight; */

    return this.windowWidth / this.windowHeight;
    
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 800/640, 0.1, 1000)

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.lightGroup = new THREE.Group();
  }

  ngAfterViewInit() {
    this.configScene();
    this.configCamera();
    this.configRenderer();
    this.configControls();

    this.createLight();
    this.createMesh();

    this.animate();

    this.changeCountry();


  }


  configScene() {

    const loader = new THREE.CubeTextureLoader();

    const texture = loader.load([
      '../../assets/images/space_right.png',
      '../../assets/images/space_left.png',
      '../../assets/images/space_top.png',
      '../../assets/images/space_bot.png',
      '../../assets/images/space_front.png',
      '../../assets/images/space_back.png',
    ])

    //this.scene.background = new THREE.Color( 0x000000 );
    this.scene.background = texture;
  }

  configCamera() {
    this.camera.aspect = this.calculateAspectRatio();
    this.camera.updateProjectionMatrix();
	  this.camera.position.set( 40, 0, 0 );
	  this.camera.lookAt( this.scene.position );
  }

  configRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });

    this.renderer.setPixelRatio(devicePixelRatio);
    // setClearColor for transparent background
    // i.e. scene or canvas background shows through
    //this.renderer.setClearColor( 0x000000, 0 );

    this.renderer.setSize(this.windowWidth, this.windowHeight);
  }

  configControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.autoRotate = false;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.minDistance = 12;
    this.controls.maxDistance = 60;
    this.controls.update();
  }

  createLight() {
    this.light = new THREE.SpotLight( 0xffffff );
	  this.light.position.set( 0, 0, 50 );
	  //this.scene.add( this.light );
    //this.camera.add(this.light);
    this.lightGroup.add(this.light);
    this.scene.add(this.lightGroup);
  }

  createMesh() {
     /*const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);  
*/
    let Emap = new THREE.TextureLoader().load('../../assets/images/earthmap4k.jpg');
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

    this.mesh = new THREE.Mesh(sphere, material);
    this.scene.add(this.mesh);
    
    //this.mesh.position.z = -10;

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
  addCoordinates (country:string, latitude: any, longitude: any) {
    let poi = new THREE.SphereGeometry(0.1,32,32);
    let lat = latitude * (Math.PI / 180);
    let lon = -longitude * (Math.PI / 180);

    const radius = 10;
    const phi = (90-lat) * (Math.PI/180);
    const theta = (lon + 180) * (Math.PI/180);

    let material2 = new THREE.MeshBasicMaterial({color:0x00ff00});

    let mesh2 = new THREE.Mesh(poi, material2);

    mesh2.position.set(
      Math.cos(lat) * Math.cos(lon) * radius,
      Math.sin(lat) * radius,
      Math.cos(lat) * Math.sin(lon) * radius
    );

    mesh2.rotation.set(0.0,-lon,lat-Math.PI*0.5);

    //mesh2.userData.country = country;

    this.mesh.add(mesh2);

}

  changeCountry() {
    for (let i = 0; i < this.listOfCountries.length; i++) {
      this.addCoordinates(this.listOfCountries[i].Country, this.listOfCountries[i].latitude, this.listOfCountries[i].longitude);
    }
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.camera.aspect = this.calculateAspectRatio();
    this.camera.updateProjectionMatrix(); 

    this.renderer.setSize(this.windowWidth, this.windowHeight);
  }

}
