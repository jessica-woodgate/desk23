<div align = center>
   
  [<-- Previous Section](https://github.com/jess-mw/desk23/tree/main/Documentation/1.%20Background%20and%20Motivation) | [Home](https://github.com/jess-mw/desk23) | [Next Section -->](https://github.com/jess-mw/desk23/tree/main/Documentation/3.%20UX%20Design)

   </div>


# System Implementation

## Contents
a. [Stack architecture and system design](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#a-stack-architecture-and-system-design)

b. [Back End - MongoDB](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#b-back-end---mongodb)

c. [Middle Tier - Express, Node, the RESTful API](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#c-middle-tier---express-node-the-restful-api)

d. [Front End - Angular](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#d-front-end---angular-details-of-implementation)

e. [Additional elements and components](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#e-additional-elements-and-components)

f. [Deployment details (including Docker)](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#f-deployment-details-including-docker-how-we-have-been-achieving-continuous-integration-and-deployment)

## a. Stack architecture and system design
The use of the MEAN stack allowed for a smooth and integrated development environment for the project unified by the fact that each element of the stack use the same programming language: JavaScript. MEAN can be broken down to four component parts: 

*	MongoDB, a NoSQL database service used to host our data in a JavaScript Object Notation (JSON) format for use and manipulation.
*	ExpressJS is a lightweight framework for running servers on NodeJS and building scalable web apps.
*	Angular, is the core frontend framework employing TypeScript, a superset of JavaScript that adds static types and more advanced error checking. 
*	NodeJS, the backend JavaScript runtime environment that unifies and whole stack. 

These 4 elements interaction can be broken down into a diagram detailing the way each part interacts with the other: 

![image](https://github.com/jess-mw/desk23/blob/main/Documentation/Angular%20SPA%20Diagram.png)

As to the architecture of our SPA, we have a UML diagram showing up the classes that makes up our website and how their connected together and share data across separate classes. It’s a visual way to better the flow of information and a quick synopsis of functions within each class and what they hold or return:  

![image](https://github.com/jess-mw/desk23/blob/main/Documentation/Website_diagram2.png)

## b. Back End - MongoDB

### Choice of database

For our database, we decided to use MongoDB with Mongoose to access it through Express. We chose MongoDB because you can use semi- or unstructured data, as well as easily being able to update schemas, which makes it more flexible and easier to change as our project develops, fitting in well with the Agile methodology. You can also handle large volumes of data at high speed. At this stage of our project this aspect is not fully utilised, but our vision of the expansion of the project will require this as we gain and use more data. 

#### Storing unstructured, semi-structured or structured data

Where relational databases store data in structured tables with predefined schemas, NoSQL databases such as MongoDB allow data to be stored in ways that are easier to understand. When the data is used in applications, you do not have to use SQL to retrieve the data, and the data does not have to be transformed thus making it easier to access and redesign the database. This also means that you can use various different data formats such as JSON files (as we have used in this project), and big data - which could be used in future iterations of this project.

#### Easy to update schemas

The benefit of using NoSQL to model data is that it is arguably much more intuitive. You can also directly change the structure of the data; documents do not have a set data structure, so a new type of document can easily be stored as well as what currently exists. You can also add new values and columns without having to majorly refactor the current structure.

#### Handling large volumes of data at high speed

The format of NoSQL databases means you can implement scale-out architecture, where the storage of data and processing power is spread out over a large collection of computers. Rather than the scale-up architecture of SQL databases, which requires larger computers with more CPUs and memory to improve performance, scale-out architecture increases capacity by adding more computers to the cluster. This is much cheaper and more efficient. Thus, as our project develops and requires higher volumes of data, it will be much more efficient than if we chose SQL architecture. This also abides by our ethical principles of designing for scale.

### Implementation

#### Please see here for [details of the evolution of our data model and implementing the database](https://github.com/jess-mw/desk23/blob/main/Documentation/2.%20System%20Implementation/Data%20Model.md).

In order to properly set up the database the first time the website is run, we created a seeding script that will populate the collections with the required data from files stored in data-import. This ensures the database will only be populated once, and with the correct files.

As our project grew and developed, as according with Agile methodology, [so did the structure of our features](https://github.com/jess-mw/desk23/blob/main/Documentation/2.%20System%20Implementation/Data%20Model.md#data-model---first-iteration) and thus what was needed from our data model.
The final data model is displayed below. It includes two collections that store information about literacy rates and coordinates, and one collection that combines the necessary information from each. The keys that link all tables are the "entities" - these are the country names. We could thus use the relevant country name to look up related data in each collection.

Please see [here](https://github.com/jess-mw/desk23/blob/main/Documentation/2.%20System%20Implementation/Data%20Model.md#extensions) for future developments of our data model.

![image](https://user-images.githubusercontent.com/45073537/117008237-6b6faf80-ace2-11eb-8271-73d8342239c8.png)

## c. Middle Tier - Express, Node, the RESTful API

We decided to use Express to develop node.js based server for the backend. The reason for using Express is that as one of the most popular web frameworks, supporting Node.js, it is very supportive for routing, middleware, as well as building database using Mongoose. This is important because Mongoose is a promise-based Node.js ODM for MongoDB. Node.js shines at building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections with high throughput, which equates to high scalability. The current website does not require too much modules; the API thus allows for concurrent improvement and adding more features when needed.

The npm (Node Package Manager) modules used for building the websites are:

Express: A web development framework for Node.js.

Connect: An extensible HTTP server framework for Node.js, providing a collection of high performance “plugins” known as middleware; serves as a base foundation for Express.

Mongodb: MongoDB provides the API for MongoDB object databases in Node.js.

The following diagram shows how the middle tier works:

![image](https://user-images.githubusercontent.com/74254613/117741221-ce3cdb80-b1f9-11eb-8b6b-42301d3ae3b9.png)

It can be seen that database and browser (front end) communicate via the API. When browser sends an request, API receives and directs it to database. The request is processed there (note: all functions for data processing live in database module). Then database sends a response including data needed, the API handles it and sends it to browser. The API is very similar to the sockets we use every day – you can change front end as you wish; as long as it is plugged into API you will always receive correct response, and the same for backend.

Two ways of routing were considered during development: Express().get and Express.Router().get. Although they work similarly, router was chosen as a better practice because it allows us to manage api end points as middleware in separate files, makes testing routes easier.

## d. Front End - Angular. Details of implementation

### Why Angular?
Angular allows developers to create single paged web applications through the use as well as reuse of components generated through the Angular-CLI. Angular was selected as the platform to build our interactive website for particular reasons: 

* Functions well and is able to handle external JavaScript libraries. As we were interested in developing a 3D globe, having a strong link between a library such as Three.js or D3.js was essential. 
* Compilation of the HTML and TypeScript to JavaScript occurs prior to the website loading. As such, this would increase the speed with which the user would be able to interact the website. Given that our website would be intensive with 3D visuals and interaction, we sought to cut down load times in other areas. 

The issue that many developers face when using Angular, however, is the steep learning curve that comes with it. This was taken into consideration, but after noting the abundance of tutorials and guidance provided by the community, we felt it was best to proceed with Angular. 

### The Components

The website is split off into 3 main components: 

* Welcome Component 
* Globe Component 
* Tutorial Component 

This next section will delve into the implementation of each component and its functions. 

#### Welcome Page

The objective of the welcome page was to simply provide the user with a short animation of a book opening, proceeding with some text and information on what they are about to see next. 

In order to attach the video, which was stored locally in the assets folder, the following code was used: 
``` html
div id = "bookContainer">

     <video onloadedmetadata="this.muted = true" autoplay muted  (ended)="showEnter()" id = "bookOpen">
        <source src = "../../assets/images/video/BookAnimation2.mp4" type ="video/mp4"> 
    </video>

</div>
```
A div was created to contain the video, which spanned the entirety of the website’s height and width. The video was set to `autoplay` and `muted`. We added the `muted` attribute to allow for the video’s `autoplay` capabilities to function on chrome browsers. This, however, was unsuccessful. As such, the video does not offer autoplay functionality on chrome browsers. 

The event, (ended), was listened for and upon the video coming to an end, the following function call was made in the TypeScript file:

``` javascript
showEnter() {
    this.enterShown = true;
}
```

Where `this.enterShown` is set to false initially. When the video comes to an end and `this.enterShown` is set to true, a div becomes visible, with an image that is set to be a `routerLink` to the globe’s page. 

``` html
<div *ngIf = "enterShown" id = "enterGlobe">
    <nav>
        <a routerLink="/globe">
            <img id = "enter" src="../../assets/images/tutorial/enter.png">
        </a>
    </nav>
</div>
```

The routes have been declared in the `Routes` array in the [app-routing.module.ts](https://github.com/jess-mw/desk23/blob/main/Website/src/app/app-routing.module.ts) file as: 

``` javascript 
const routes: Routes = [
  { path: 'globe', component: GlobeComponent },
  { path: '', component: WelcomeComponent }
```

#### Globe Component 

The globe was built solely with the Three.js library. Three.js is a well-documented library and the forums provided ample support where needed. As a result, certain parts of this code were written in accordance to the directions of the Three.js documentation.

##### The Scene

``` javascript
this.scene = new THREE.Scene();
this.camera = new THREE.PerspectiveCamera(50, this.windowWidth/this.windowHeight, 0.1, 1000);
```

A scene was initialised and a camera added to the scene. The field of view was set to 50, an arbitrary selection based on what appeared to be the most visually appealing. 

`this.windowWidth` and `this.windowHeight` were initialised to `window.innerWidth` and `window.innerHeight` respectively. 

A raycaster, light and mouse was also initialized within the constructor, however, this will be discussed in more depth further on. 
The scene’s background was set to an equirectangular image found from an online source. The methodology is consistent with the three.js documentation, so will not be discussed here. 

We proceed to set up the camera’s qualities, setting its aspect ratio to the aspect ratio of the screen by calculating: 

``` javascript
private get aspectRatio(): number {
    return this.windowWidth / this.windowHeight;
  }
```
The renderer was initialised as shown below: 
``` javascript
this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
```

Where `this.canvas` returns the canvas declared in the HTML document and passed through the `@ViewChild` decorator into the TypeScript file. It was important to set the `alpha` to true as we would be using transparent backgrounds with our textures at a later stage.


##### The Globe Object

In order to create the globe with the texture of the earth, the following code was used: 

``` javascript
const sphere = new THREE.SphereGeometry(10,50,50);
    const material = new THREE.MeshPhongMaterial({
        map : Emap});

    this.globe = new THREE.Mesh(sphere, material);
    this.scene.add(this.globe);
```
In order to add the country names, we used an additional image with a transparent background and placed it over the earth image, as shown below: 


``` javascript
let Cmap = new THREE.TextureLoader().load('../../assets/images/WorldMap.png');
    const sphere = new THREE.SphereGeometry(10.2,50,50);
    const material = new THREE.MeshPhongMaterial({
        map : Cmap,
        transparent: true,
        opacity : 1});

    let countryNames = new THREE.Mesh(sphere, material);

    this.scene.add(countryNames);
```

This spherical texture was to be slightly larger than the globe (a radius of 10.2 versus a radius of 10) in order to avoid any clipping or artefacts during the rendering of the scene. 

OrbitControls was also integrated into the scene, a functionality that allows the user to control the camera. Through this, we were able to quickly set up the ability for the camera to rotate around the globe by the user clicking and dragging. Zoom was also enabled, with a minimum and maximum distance set to ensure the user does not exceed any necessary boundaries. 

At this stage, we had a globe in the centre of the screen, a camera locked onto the globe object and the ability for the user to spin the globe (or appear to) with zoom capabilities. 

##### The Bar Charts
The next challenge was to allow for the countries to be clickable. If the entire country (up to its borders) was to be clickable, we needed to spend time understanding how we could calculate the size of the texture and map out each and every coordinate. We came across other sites which allowed an object over the country to be clickable instead. We decided to use this method as it would be simpler and more effective, as the object would later be used as a means of displaying the data. 

``` javascript
addCoordinatePoint (country:string, latitude: number, longitude: number, countryArea:number, litData: number) 
```

The above function was used to create individual points on the globe, representing each country in our database. The function received the country’s name, its latitude and longitude in degrees as well as the literacy rate data. The area of the country was also passed through with the purpose of setting the size of the objects representing the country, however, we decided against using it. 

The longitude and latitude coordinates were converted to radians as shown below. 

``` javascript
let globeLatRads = latitude * (Math.PI / 180);
let globeLongRads = -longitude * (Math.PI / 180);
```
Then, with credit to an online source referenced in the [globe.component.ts](https://github.com/jess-mw/desk23/blob/main/Website/src/app/globe/globe.component.ts) file, the coordinates were used to calculate the (x,y,z) coordinates on the sphere object. This would be the position at which the new object would be created to represent each country. 

``` javascript
let x = Math.cos(globeLatRads) * Math.cos(globeLongRads) * radius;
let y = Math.cos(globeLatRads) * Math.sin(globeLongRads) * radius;
let z = Math.sin(globeLatRads) * radius;
```

Here, `radius` is equivalent to the globe object’s radius, which was set to 10 when initialising the object. 
To represent each country, after several feedback sessions, we decided to go with bar charts. The bar charts would not only represent the country and be clickable but also they would represent the literacy rate data. 

A cylinder was picked to form the bar chart, and its height was set with: 

``` javascript
let height = litData / 18;
```
Where 18 is an arbitrarily selected number. 

The cylinder, `poi2`, was then created with a radius of 0.1. An issue we faced was rotating the cylinders appropriately. The object was to set the cylinders on the surface of the globe and face outwards. In order to achieve this, we used the following code, with credit to another online source that has been referenced in the code file: 

``` javascript
poi2.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI/2));
```
The cylinder, `poi2`, is then positioned at the (x, y, z) coordinates calculated and made to look at the centre of the globe. 
``` javascript
point2.position.set( x, z, y);
point2.lookAt(0,0,0);
```
In order to set all the bar charts above the countries, we needed a list of countries with their respective longitude, latitude and literacy rate data. This was set up by the backend team and provided through an API. Accessing this API will be discussed further below. 

An array of `Country` objects, with the following model, was created: 

``` javascript 
export class Country {
    Entity!: any;
    Year!: any;
    Data!: any;
    Latitude!: any;
    Longitude!: any;
    Area!: any;
}
```

This array, called `listOfCountries`, was then accessed in the following code within this function: 

``` javascript
setAllPoints(userSetYear: number)
```
and 

``` javascript
for (let i = 0; i < this.listOfCountries.length; i++) {
      if (this.listOfCountries[i].Year == userSetYear) {
        this.addCoordinatePoint(this.listOfCountries[i].Entity, this.listOfCountries[i].Latitude, this.listOfCountries[i].Longitude, this.listOfCountries[i].Area, this.listOfCountries[i].Data);       
      }
}
```

The entire `listOfCountries` array was traversed, accessing each country and its data. Each country object had a `Year` attribute which informed us the year from which this data was gathered. If the year attribute was equal to the `userSetYear`, a initialized to 2015 but is later controlled by the user through the use of a slider, then a cylinder object would be generated and placed precisely at the country’s coordinates. 

In order to allow the user to manipulate which year the data should be, a slider was integrated using the following code in the [globe.component.html](https://github.com/jess-mw/desk23/blob/main/Website/src/app/globe/globe.component.html) file: 

``` html
<mat-slider thumbLabel tickInterval="1" [(ngModel)] = "currentYear" min="1900" max = "2015"  (ngModelChange)="onSlide()"></mat-slider>
```
The slider’s data was bound to a variable, `currentYear`, in the TypeScript file. `currentYear` is initialized to 2015, however, whenever the slider’s data was altered by the user dragging it and changing the year, this event was noted and sent to the TypeScript file, where the function `onslide()` was called. `onSlide()` recalls the setAllPoints function outlined above, setting all the cylindrical bar charts for the correct and updated year after erasing all the previous ones. 



##### Interactive Bar Charts

In order to make each bar chart clickable, a HostListener was set up as shown below: 

``` javascript
@HostListener('click',['$event'])
  onMouseClick(event : any) {
```
The `HostListener` listened for click events. Upon receiving a click event, the `onMouseClick()` function is called, receiving the event as one of its parameters. 

Three.js provided documentation on how to calculate the x and y coordinate of the mouse based on the event information, which has been used as shown below: 

``` javascript
this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
```

Earlier in this report, there was a mentioning of a raycaster. The raycaster essentially fires a ray from the mouses coordinates and gathers all the objects that are intersected by the ray. It returns an array of intersected objects, as shown below: 

``` javascript
this.raycaster.setFromCamera(this.mouse, this.camera);
const intersects = this.raycaster.intersectObjects(this.globe.children);
```
The intersected objects in question are the children of the globe, which are all the bar charts. If the length of the intersects array is 0, then nothing should happen, as no bar chart was clicked upon. 

If, however, there is 1 or more element in the array, then the first one is taken into account. Its data, which has been set during the creation of the object through the three.js use of `userData` for any object, is then set to two variables as shown below: 

``` javascript
this.countryName = intersects[0].object.userData.Country;
this.literacyRate = intersects[0].object.userData.LiteracyRate;
```
`this.CountryName` and `this.literacyRates` are what get printed in a box that pops up upon the user clicking on any bar chart. 
The TypeScript file sets the display and position of the box. In the case of 0 intersects, the display is set to `“none”`. 
In the case of an intercept, the following code is used: 

``` javascript
this.displayType = "flex";
this.top = (event.clientY - 100) + 'px';
this.left = (event.clientX + 20) + 'px';
```
This positions the box towards the left middle of the mouse click position, allowing it to adapt upon each click. This information is then accessed within the HTML file: 

``` html
div id = "info" [style.display]= "displayType" [style.top] = "top"  [style.left] = "left">
```

#### The Tutorial 

The tutorial component was built to guide the user on how to use the website. As our website is targeted towards the younger ages, we aimed to make it as user friendly and accessible as possible. Simple instructions such as how to spin the globe and what the bar charts represent are offered to the user. 

When the globe page is first loaded in, you are greeted with a large textbox containing some information to do with the globe. A button at the bottom closes this window, and proceeds to begin the website tutorial. 

``` html
<button id = "closeBtn" (click)="hideInfo()"> <h4>Close</h4> </button>
```
The `(click)` event calls the function `hideInfo()` which does the following: 

``` javascript
hideInfo() {
    this.infoShown = false;
    this.spinShown = true;
}
```

Where `infoShown` was previously set to true. As a result, the information box disappears and the first tutorial box appears. This was achieved quite simply through using the structural directive of `*ngIf`. For example: 

``` html
<div id = "spinLeftOrRight" *ngIf = "spinShown">
```
Initially, `spinShown` is set to `false`, which results in this particular div to not be visible to the user. Once the main info box is closed, `spinShown` is set to `true`, resulting in the tutorial being shown. 

This was repeated several times for the remainder of the tutorial divs e.g. zooming or using the slider. 

#### The CSS 

A majority of the CSS was used to build the outline of the boxes and the base structure was adapted from code that can be found [here]( https://github.com/DavidGrice/THREEJS-Tutorial-Globe/blob/master/END/public/CSS/style.css).
The positioning and size of the boxes were arbitrarily set. 

#### The Service 

In order to fetch in the data from the API set up by the backend, a service was created using the Angular CLI service generator. This was achieved through importing the `HttpClientModule` from the angular library. 

``` javascript
import {HttpClientModule} from '@angular/common/http';
```

It is also imported within the service class called [data.service.ts](https://github.com/jess-mw/desk23/blob/main/Website/src/app/services/data.service.ts). The http client is then injected into the constructor as shown below: 

``` javascript
constructor(private httpClient: HttpClient) { }
```

A `GET` request is then processed to the API in question in order to fetch the data. 

``` javascript
getCountryData() : Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.REST_API_SERVER);
} 
```
The function returns an `Observable` of type `Country` array, where `Country` is the model class mentioned above. The Observable was imported from the rxjs library to handle the asynchronous nature of our data and the three.js scene. 

The `GET` request takes in the URL of the API which holds all the data – `this.REST_API_SERVER`.
In order to call the function, a subscription needs to take place in order to subscribe to the observable. 
In the [globe.component.ts](https://github.com/jess-mw/desk23/blob/main/Website/src/app/globe/globe.component.ts) file, the following code is executed during the initiation of the website: 

``` javascript
this.countryService.getCountryData().subscribe((countries) => {
      this.listOfCountries = countries;
      this.initDependencies();
    });
```
Where `this.countryService` is the variable that is bound to the `data.service.ts` class: 

``` javascript
constructor(private countryService : DataService)
```
Where `this.listOfCountries` is the array of Country objects we previously established. 



## e. Additional elements and components.
*Stanni*

## f. Deployment details (including Docker), how we have been achieving continuous integration and deployment.
### Docker
In order to allow for our application to be easily developed and shipped across platforms, we decided to use [Docker](https://www.docker.com/why-docker). This allowed us to package and run our application in a loosly isolated environment called a [container](https://www.docker.com/resources/what-container). The containers are lightweight and contain everything needed to run the application - you don't need to rely on what's currently installed in the host. This means it is easy to share containers while you work, streamlining the development lifecycle by allowing developers to work in standardized environments; facilitating the continuous integration and continuous deployment (CI/CD) workflow.

To run the project in Docker, we have a [docker-compose script](https://github.com/jess-mw/desk23/blob/main/Website/docker-compose.yml) to ensure that the system can be easily rebuilt. This script runs our [Dockerfile](https://github.com/jess-mw/desk23/blob/main/Website/Dockerfile), which sets up a container using the [Node image](https://hub.docker.com/_/node/), runs the package manager installation command, and builds the program. The script also sets up our database in a container using the [Mongo image](https://hub.docker.com/_/mongo/), thus we have two separate containers (Node and MongoDB) that communicate over a single port protocol. To ensure that the database is running before Node tries to connect, we have included a [wait script](https://github.com/jess-mw/desk23/blob/main/Website/wait-for.sh) sourced from [here](https://raw.githubusercontent.com/eficode/wait-for/master/wait-for). The system can thus be rebuilt by running the command *docker-compose up --build*.

### Continuous Integration and Deployment
![image](https://user-images.githubusercontent.com/45073537/117691378-bd697700-b1b3-11eb-9beb-b974e725a817.png)

The benefit of using continuous integration and deployment is that it ensures components being worked on by different developers will be built in tandem, rather than being integrated at a late stage of the project, which risks things breaking. It is much better to frequently combine the outputs of all developers into a single operational system and make minor adjustments as the project develops, in an agile way. Our team used GitHub to facilitate this methodology.

To acheive continuous intergration and deployment, our code was progressively merged through a pipeline of branches on GitHub. At top level is our main branch, which holds our production-ready code and most current release version of the website. The contents of our Express API, Angular dist, and Mongo scripts on this branch were fully tested and ready to be shipped. Below this is our staging branch, where code is held for testing before being deployed. We used this branch to ensure there were no issues with the feature being deployed from dev before it is pushed to production. Under staging is our dev branch, which holds the code that is being worked on by our developers. The environment for this stage lay within the Docker containers set up as explained above. This is to ensure that the system was developed and tested in a reproducible way that could be used across platforms. From here, developers created their own feature branches to work on individual features, regularly merging them with dev and then deleting that branch when the feature was complete to avoid a mess of branches and keep the branch structure streamlined and comprehensible. When the current version was finished by our developers, it was merged from dev into staging, to be tested before released on our main branch.

![image](https://user-images.githubusercontent.com/45073537/117702220-22c36500-b1c0-11eb-9611-52b6ea27fe68.png)

In staging, the critical components in our code base were tested. We used Karma to run those tests by running ng test in the project directory on every push to the repository to ensure continuous integration and to make certain that the different parts of the system work well together on an ongoing basis. The staging branch was also used to ensure that only functioning and tested code makes it to production.

We held [regular stand up meetings](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management/Minutes) to achieve the CI/CD workflow and ensure that everyone was on the same page, and any issues could be addressed swiftly and effectively. This ensured we were in constant communication and every member understood where the project was at and had good opportunities to present their work and ask questions.

<div align = center>
   
  [<-- Previous Section](https://github.com/jess-mw/desk23/tree/main/Documentation/1.%20Background%20and%20Motivation) | [Home](https://github.com/jess-mw/desk23) | [Next Section -->](https://github.com/jess-mw/desk23/tree/main/Documentation/3.%20UX%20Design)

   </div>
