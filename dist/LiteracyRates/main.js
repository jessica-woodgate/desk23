(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hamza Qureshi\SWGroup\desk23\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = 'http://localhost:3000/countries/getCountries';
    }
    getCountryData() {
        return this.httpClient.get(this.REST_API_SERVER);
    }
    getAll() {
        //return this.httpClient.get(this.REST_API_SERVER);
        /* return [
          {
            Entity: "Afghanistan",
            Year: 2015,
            Data: 18.157681,
            Latitude: 33.93911,
            Longitude: 67.709953,
            Area: 647500
          },
          {
            Entity: "Albania",
            Year: 2015,
            Data: 343,
            Latitude: 41.153332,
            Longitude: 20.168331,
            Area: 33
          },
          {
            Entity: "Argentina",
            Year: 2015,
            Data: 51.299999,
            Latitude: -38.416097,
            Longitude: -63.616672,
            Area: 34245
          },
        ]; */
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 5, vars: 0, consts: [["routerLink", "/globe"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to our website!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click here to check out our globe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PDYX":
/*!******************************************!*\
  !*** ./src/app/globe/globe.component.ts ***!
  \******************************************/
/*! exports provided: GlobeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobeComponent", function() { return GlobeComponent; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tutorial/tutorial.component */ "PT6J");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["globeCanvas"];
//import * as data from '../../data/countries.json';
//import { Data } from '@angular/router';
class GlobeComponent {
    constructor(countryService) {
        this.countryService = countryService;
        this.currentYear = 2015;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"];
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](50, this.windowWidth / this.windowHeight, 0.1, 1000);
        this.lightGroup = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();
        this.mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
        this.countryName = null;
        this.displayType = "none";
        this.top = "0px";
        this.left = "0px";
    }
    get aspectRatio() {
        return this.windowWidth / this.windowHeight;
    }
    get canvas() {
        return this.cReference.nativeElement;
    }
    ngOnInit() {
        //this.listOfCountries = this.countryService.getAll();
        this.countryService.getCountryData().subscribe((countries) => {
            this.listOfCountries = countries;
        });
        this.listOfCountries = this.listOfCountries.default;
        //console.log("Country printed in ngOnInit : " + this.listOfCountries[0].Entity);
    }
    ngAfterViewInit() {
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
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__["CubeTextureLoader"]();
        /* const skyBox = loader.load([
          '../../assets/images/space_right.png',
          '../../assets/images/space_left.png',
          '../../assets/images/space_top.png',
          '../../assets/images/space_bot.png',
          '../../assets/images/space_front.png',
          '../../assets/images/space_back.png',
        ]);
     */
        /* Images appear to be too small in comparison to the ones previously used - let's try zooming in -yep it works */
        const skyBox2 = loader.load([
            '../../assets/images/temp/space_right3.png',
            '../../assets/images/temp/space_left3.png',
            '../../assets/images/temp/space_up3.png',
            '../../assets/images/temp/bottom2.png',
            '../../assets/images/temp/front2.png',
            '../../assets/images/temp/back2.png'
        ]);
        this.scene.background = skyBox2;
    }
    setCamera() {
        this.camera.aspect = this.aspectRatio;
        this.camera.updateProjectionMatrix();
        this.camera.position.set(35, 0, 0); //changed from 40 to 30
        this.camera.lookAt(this.scene.position);
    }
    setRenderer() {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.windowWidth, this.windowHeight);
    }
    setControls() {
        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](this.camera, this.canvas);
        this.controls.autoRotate = false;
        this.controls.enableZoom = true;
        this.controls.enablePan = false;
        this.controls.minDistance = 12;
        this.controls.maxDistance = 60;
        this.controls.update();
    }
    createLightGroup() {
        // this.mainLight = new THREE.PointLight( 0xffffff, 2, 50 );
        this.mainLight = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0xffffff);
        this.mainLight.position.set(0, 0, 50);
        this.lightGroup.add(this.mainLight);
        this.scene.add(this.lightGroup);
    }
    createGlobe() {
        //maps from: http://planetpixelemporium.com/earth.html && https://www.solarsystemscope.com/textures/
        let Emap = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('../../assets/images/2k_earth_daymap.jpg');
        let Ebump = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('../../assets/images/earthbump4k.jpg');
        let Espec = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('../../assets/images/earthspec4k.jpg');
        const sphere = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](10, 50, 50);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({
            map: Emap,
            bumpMap: Ebump,
            bumpScale: 0.10,
            specularMap: Espec,
            specular: new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('grey')
        });
        this.globe = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](sphere, material);
        this.scene.add(this.globe);
        this.createCountryNames();
    }
    createCountryNames() {
        let Cmap = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('../../assets/images/WorldMap.png');
        const sphere = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](10.2, 50, 50);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({
            map: Cmap,
            transparent: true,
            opacity: 1
        });
        let countryNames = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](sphere, material);
        this.scene.add(countryNames);
    }
    animate() {
        //here is the most important difference! learn why
        window.requestAnimationFrame(() => this.animate());
        this.lightGroup.quaternion.copy(this.camera.quaternion);
        this.render();
        this.controls.update();
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    //working on coordinates
    //reference: https://stackoverflow.com/questions/1185408/converting-from-longitude-latitude-to-cartesian-coordinates
    addCoordinatePoint(country, latitude, longitude, countryArea, litData) {
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
        let poi2 = new three__WEBPACK_IMPORTED_MODULE_0__["CylinderGeometry"](0.1, 0.1, height, 64);
        poi2.applyMatrix4(new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().makeRotationX(-Math.PI / 2));
        let poi2Material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0xcc3367 });
        let point2 = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](poi2, poi2Material);
        point2.position.set(x, z, y);
        point2.lookAt(0, 0, 0);
        point2.userData.Country = country;
        point2.userData.LiteracyRate = litData;
        this.globe.add(point2);
    }
    setAllPoints(userSetYear) {
        //remove all children if any and add new ones
        while (this.globe.children.length) {
            this.globe.remove(this.globe.children[0]);
        }
        console.log("Length of list of countries is : " + this.listOfCountries.length);
        for (let i = 0; i < this.listOfCountries.length; i++) {
            //this.addCoordinatePoint(this.listOfCountries[i].Country, this.listOfCountries[i].latitude, this.listOfCountries[i].longitude, this.listOfCountries[i].Area_sq_mi);
            //console.log(this.listOfCountries[i].Entity, this.listOfCountries[i].Latitude, this.listOfCountries[i].Longitude);
            if (this.listOfCountries[i].Year == userSetYear) {
                this.addCoordinatePoint(this.listOfCountries[i].Entity, this.listOfCountries[i].Latitude, this.listOfCountries[i].Longitude, this.listOfCountries[i].Area, this.listOfCountries[i].Data);
            }
        }
    }
    onWindowResize() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.camera.aspect = this.aspectRatio;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.windowWidth, this.windowHeight);
    }
    onMouseClick(event) {
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
            intersects[0].object.material.color.set(0xff0000);
            this.countryName = intersects[0].object.userData.Country;
            this.literacyRate = intersects[0].object.userData.LiteracyRate;
        }
        //this.render();
    }
    onSlide() {
        this.setAllPoints(this.currentYear);
    }
}
GlobeComponent.ɵfac = function GlobeComponent_Factory(t) { return new (t || GlobeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
GlobeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GlobeComponent, selectors: [["app-globe"]], viewQuery: function GlobeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cReference = _t.first);
    } }, hostBindings: function GlobeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function GlobeComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function GlobeComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } }, decls: 9, vars: 9, consts: [[3, "resize"], ["globeCanvas", ""], ["id", "displayLiteracyRates"], ["id", "displayCountryName"], ["id", "sliderBox"], ["thumbLabel", "", "min", "1475", "max", "2015", 3, "ngModel", "ngModelChange"]], template: function GlobeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function GlobeComponent_Template_canvas_resize_0_listener() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Literacy Rates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-slider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GlobeComponent_Template_mat_slider_ngModelChange_8_listener($event) { return ctx.currentYear = $event; })("ngModelChange", function GlobeComponent_Template_mat_slider_ngModelChange_8_listener() { return ctx.onSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayType)("top", ctx.top)("left", ctx.left);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Country : ", ctx.countryName, " Literacy Rate : ", ctx.literacyRate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentYear);
    } }, directives: [_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["TutorialComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\r\n  color : white;\r\n}\r\ncanvas[_ngcontent-%COMP%] {\r\n    display: block; \r\n    margin: auto;\r\n    width: 100%;\r\n    height: 100%; \r\n    background: #000000; \r\n  }\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n#displayLiteracyRates[_ngcontent-%COMP%] {\r\n    justify-items: center;\r\n    align-content: center;\r\n    \r\n    flex-direction: column;\r\n    border-style: inset;\r\n    border-width: 5px;\r\n    border-radius: 5%;\r\n    border-color: 0x00ff00;\r\n    background-color: black;\r\n    opacity: 80%;\r\n    position: absolute;\r\n    \r\n    width: 15vw;\r\n    height: 20vh;\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n  }\r\n#displayCountryName[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    justify-items: center;\r\n    align-content: center;\r\n    align-self: center;\r\n    text-align: center;\r\n    width: 75%;\r\n    height: 15;\r\n    border: inset;\r\n    border-color: burlywood;\r\n    border-radius: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n\r\n#sliderBox[_ngcontent-%COMP%] {\r\n  justify-items: center;\r\n  align-content: center;\r\n  \r\n  flex-direction: column;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-radius: 5%;\r\n  border-color: 0x00ff00;\r\n  background-color: transparent;\r\n  opacity: 80%;\r\n  position: absolute;\r\n  right: 53vh;\r\n  bottom: 3vh; \r\n  width: 50vw;\r\n  height: 5vh;\r\n  font-size: 9pt;\r\n  font-style: normal;\r\n}\r\n\r\n#currentYearBox[_ngcontent-%COMP%] {\r\n  \r\n  display: block;\r\n    border-style: inset;\r\n  border-width: 5px;\r\n  border-radius: 5%;\r\n  border-color: 0x00ff00;\r\n  background-color: black;\r\n  opacity: 80%;\r\n  position: relative;\r\n \r\n \r\n  bottom: 15vh; \r\n  margin: 0 auto;\r\n  width: 10%;\r\n  height: 5vh;\r\n  font-size: 9pt;\r\n  font-style: normal;\r\n\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdEQUFnRDtFQUNsRDtBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjttQkFDZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUdBLHFEQUFxRDtBQUV2RDtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRTswQkFDd0I7RUFDeEIsY0FBYztBQUNoQjtDQUNDLEtBQUssbUJBQW1CO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0NBQ25CLGlCQUFpQjtDQUNqQjtFQUNDO0VBQ0EsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7O0NBRW5COzs7Ozs7Ozs7Ozs7Ozs7OztpQkFpQmdCO0FBQ2pCIiwiZmlsZSI6Imdsb2JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbmNhbnZhcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyBcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgI2Rpc3BsYXlMaXRlcmFjeVJhdGVzIHtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qZGlzcGxheTogbm9uZTsgY2hhbmdlZCBmcm9tIGZsZXgqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAweDAwZmYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogcmlnaHQ6IDV2aDtcclxuICAgIGJvdHRvbTogNDV2aDsgKi9cclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAjZGlzcGxheUNvdW50cnlOYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMTU7XHJcbiAgICBib3JkZXI6IGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIFNsaWRlciBzdHVmZiBiZWxvdyAobW92ZWQgZnJvbSBzbGlkZXIgY29tcG9uZW50KSAqL1xyXG4gIFxyXG4jc2xpZGVyQm94IHtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC8qZGlzcGxheTogbm9uZTsgY2hhbmdlZCBmcm9tIGZsZXgqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItY29sb3I6IDB4MDBmZjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG9wYWNpdHk6IDgwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUzdmg7XHJcbiAgYm90dG9tOiAzdmg7IFxyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLyogZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmUgKi9cclxuI2N1cnJlbnRZZWFyQm94IHtcclxuICAvKiBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4vKiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuKi8gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItY29sb3I6IDB4MDBmZjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDgwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAvKiAgbGVmdDogOTB2aDsgKi9cclxuIC8qIGxlZnQgOiA1dmg7XHJcbiAqL1xyXG4gIGJvdHRvbTogMTV2aDsgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwJTtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBmb250LXNpemU6IDlwdDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG4gLyogIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgYm9yZGVyLWNvbG9yOiAweDAwZmYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvcGFjaXR5OiA4MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMDB2aDtcclxuICBib3R0b206IDV2aDsgXHJcbiAgd2lkdGg6IDV2dztcclxuICBoZWlnaHQ6IDV2aDtcclxuICBmb250LXNpemU6IDlwdDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6IHdoaXRlOyAqL1xyXG59Il19 */"] });


/***/ }),

/***/ "PT6J":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TutorialComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Spin the globe in any direction by clicking and dragging!\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Drag the slider left or right to change which year we are currently in\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click on the name of a country to view its literacy rates\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TutorialComponent {
    constructor() {
        this.tutorialShown = true;
    }
    ngOnInit() {
    }
    showTutorial() {
        this.tutorialShown = true;
    }
    hideTutorial() {
        this.tutorialShown = false;
    }
}
TutorialComponent.ɵfac = function TutorialComponent_Factory(t) { return new (t || TutorialComponent)(); };
TutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorialComponent, selectors: [["app-tutorial"]], decls: 8, vars: 3, consts: [["id", "showTut"], [3, "click"], ["id", "spinLeftOrRight", 4, "ngIf"], ["id", "moveSlider", 4, "ngIf"], ["id", "clickCountry", 4, "ngIf"], ["id", "spinLeftOrRight"], ["id", "moveSlider"], ["id", "clickCountry"]], template: function TutorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_button_click_1_listener() { return ctx.showTutorial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_button_click_3_listener() { return ctx.hideTutorial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hide Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TutorialComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TutorialComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TutorialComponent_div_7_Template, 2, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tutorialShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tutorialShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tutorialShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n    color : red;\r\n  }\r\n\r\n  #spinLeftOrRight[_ngcontent-%COMP%] {\r\n    justify-items: center;\r\n    align-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-style: inset;\r\n    border-width: 5px;\r\n    border-radius: 5%;\r\n    border-color: 0x00ff00;\r\n    background-color: black;\r\n    opacity: 80%;\r\n    position: absolute;\r\n    left: 5vh;\r\n    top: 10vh;\r\n    width: 15vw;\r\n    height: 10vh;\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n  }\r\n\r\n  #moveSlider[_ngcontent-%COMP%] {\r\n    justify-items: center;\r\n    align-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-style: inset;\r\n    border-width: 5px;\r\n    border-radius: 5%;\r\n    border-color: 0x00ff00;\r\n    background-color: black;\r\n    opacity: 80%;\r\n    position: absolute;\r\n    right: 5vh;\r\n    bottom: 10vh;\r\n    width: 15vw;\r\n    height: 10vh;\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n  }\r\n\r\n  #clickCountry[_ngcontent-%COMP%] {\r\n    justify-items: center;\r\n    align-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-style: inset;\r\n    border-width: 5px;\r\n    border-radius: 5%;\r\n    border-color: 0x00ff00;\r\n    background-color: black;\r\n    opacity: 80%;\r\n    position: absolute;\r\n    right: 5vh;\r\n    top: 10vh;\r\n    width: 15vw;\r\n    height: 10vh;\r\n    font-size: 9pt;\r\n    font-style: normal;\r\n  }\r\n\r\n  #showTut[_ngcontent-%COMP%] {\r\n    justify-items: center;\r\n    align-content: center;\r\n    display: flex;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 2vh;  \r\n    right: 43%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFHQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBR0E7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0VBQ1oiLCJmaWxlIjoidHV0b3JpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgY29sb3IgOiByZWQ7XHJcbiAgfVxyXG5cclxuICAjc3BpbkxlZnRPclJpZ2h0IHtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBib3JkZXItY29sb3I6IDB4MDBmZjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiA4MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1dmg7XHJcbiAgICB0b3A6IDEwdmg7XHJcbiAgICB3aWR0aDogMTV2dztcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAjbW92ZVNsaWRlciB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAweDAwZmYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDV2aDtcclxuICAgIGJvdHRvbTogMTB2aDtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICBcclxuICAjY2xpY2tDb3VudHJ5IHtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBib3JkZXItY29sb3I6IDB4MDBmZjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiA4MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXZoO1xyXG4gICAgdG9wOiAxMHZoO1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBmb250LXNpemU6IDlwdDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIFxyXG4gICNzaG93VHV0IHtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJ2aDsgIFxyXG4gICAgcmlnaHQ6IDQzJTtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'LiteracyRates';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "mainContainer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["p[_ngcontent-%COMP%] {\r\n    font-family: Verdana;\r\n  }\r\n\r\n#mainContainer[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0VBQ3RCOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICB9XHJcblxyXG4jbWFpbkNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _globe_globe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./globe/globe.component */ "PDYX");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "PT6J");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");









//import { SliderComponent } from './slider/slider.component';


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _globe_globe_component__WEBPACK_IMPORTED_MODULE_7__["GlobeComponent"],
        _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__["TutorialComponent"],
        //  SliderComponent,
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _globe_globe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globe/globe.component */ "PDYX");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'globe', component: _globe_globe_component__WEBPACK_IMPORTED_MODULE_1__["GlobeComponent"] },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map