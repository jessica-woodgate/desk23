# System Implementation [20 marks]:

## Contents
a. [Stack architecture and system design](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#a-stack-architecture-and-system-design-eg-class-diagrams-sequence-diagrams)

b. [Back End - MongoDB](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#b-back-end---mongodb---database-implementation-the-data-model-that-you-developed-your-back-end-from-eg-entity-relationship-diagrams)

c. [Middle Tier - Express, Node, the RESTful API](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#c-middle-tier---express-node-the-restful-api)

d. [Front End - Angular](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#d-front-end---angular-details-of-implementation)

e. [Additional elements and components](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#e-additional-elements-and-components-eg-authentification-tell-us-about-any-other-aspects-not-covered-above)

f. [Deployment details (including Docker)](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation#f-deployment-details-including-docker-include-how-you-have-been-achieving-continuous-integration-and-deployment)

## a. Stack architecture and system design (e.g. class diagrams, sequence diagrams).
*Stanni*

## b. Back End - MongoDB - database implementation, the data model that you developed your back end from (e.g. entity relationship diagrams).

For our database, we decided to use MongoDB with Mongoose to access it through Express. We chose MongoDB because you can use semi- or un-structured data, which makes it more flexible and easier to change as our project develops, fitting in well with the Agile methodology. Please see here for [details of the evolution of our data model and implementing the database](https://github.com/jess-mw/desk23/blob/491a60804c4803faf8612054fc73f5efd8fa77e2/Documentation/2.%20System%20Implementation/Data%20Model.md).

In order to properly set up the database the first time the website is run, we created a seeding script that will populate the collections with the required data from files stored in data-import. This ensures the database will only be populated once, and with the correct files.

As our project grew and developed, as according with Agile methodology, [so did the structure of our features](https://github.com/jess-mw/desk23/blob/main/Documentation/2.%20System%20Implementation/Data%20Model.md#data-model---first-iteration) and thus what was needed from our data model.
The final data model is displayed below. It includes two collections that store information about literacy rates and coordinates, and one collection that combines the necessary information from each. The keys that link all tables are the "entities" - these are the country names. We could thus use the relevant country name to look up related data in each collection.

Please see here for [future developments of our data model](https://github.com/jess-mw/desk23/blob/main/Documentation/2.%20System%20Implementation/Data%20Model.md#extensions).

![image](https://user-images.githubusercontent.com/45073537/117008237-6b6faf80-ace2-11eb-8271-73d8342239c8.png)

## c. Middle Tier - Express, Node, the RESTful API
*Wenda*
It is decided to use Express to develop node.js based server for backend. The reason using Express is that as one of the most popular web frameworks, supporting Node.js, it is very supportive for routing, middleware, as well as building database using Mongoose, which is important because Mongoose is a promise-based Node.js ODM for MongoDB. Node.js shines at building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections with high throughput, which equates to high scalability. The current website does not require too much module though, it allows perfection and adding more features when needed.

The npm (Node Package Manager) module used for building the websites are:

Express: A web development framework for Node.js.

Connect: An extensible HTTP server framework for Node.js, providing a collection of high performance “plugins” known as middleware; serves as a base foundation for Express.
Mongodb: MongoDB provides the API for MongoDB object databases in Node.js.

The following diagram shows how the middle tier works. 
![image](https://user-images.githubusercontent.com/74254613/117741221-ce3cdb80-b1f9-11eb-8b6b-42301d3ae3b9.png)
It can be seen that database and browser (front end) communicates via API. When browser sends an request, API receives and directs it to database and the request is processed there (Note all functions for data processing live in database module). Then database sends a response including data needed, API handles it and sends it to browser. API is very similar as the socket we use every day – You can change front end as you wish, as long as it is plugged to API you will always receive correct response, and same for backend.

Two ways of routing have been considered during development: Express().get and Express.Router().get. Although they work similarly, router is chosen as a better practice because it allows us to manage api endpoints as a middleware in separate file, makes testing routes easier.

## d. Front End - Angular. Details of implementation.
*Hamza*

## e. Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!
*Stanni*

## f. Deployment details (including Docker), include how you have been achieving continuous integration and deployment.
### Docker
In order to allow for our application to be easily developed and shipped across platforms, we decided to use [Docker](https://www.docker.com/why-docker). This allowed us to package and run our application in a loosly isolated environment called a [container](https://www.docker.com/resources/what-container). The containers are lightweight and contain everything needed to run the application - you don't need to rely on what's currently installed in the host. This means it is easy to share containers while you work, streamlining the development lifecycle by allowing developers to work in standardized environments; facilitating the continuous integration and continuous deployment (CI/CD) workflow.

To run the project in Docker, we have a [docker-compose script](https://github.com/jess-mw/desk23/blob/84f480d095bc974c9542099c703a6f18db6725ac/Website/docker-compose.yml) to ensure that the system can be easily rebuilt. This script runs our [Dockerfile](https://github.com/jess-mw/desk23/blob/84f480d095bc974c9542099c703a6f18db6725ac/Website/Dockerfile), which sets up a container using the [Node image](https://hub.docker.com/_/node/), runs the package manager installation command, and builds the program. The script also sets up our database in a container using the [Mongo image](https://hub.docker.com/_/mongo/), thus we have two separate containers (Node and MongoDB) that communicate over a single port protocol. To ensure that the database is running before Node tries to connect, we have included a [wait script](https://github.com/jess-mw/desk23/blob/84f480d095bc974c9542099c703a6f18db6725ac/Website/wait-for.sh) sourced from [here](https://raw.githubusercontent.com/eficode/wait-for/master/wait-for). The system can thus be rebuilt by running the command *docker-compose up --build*.

### Continuous Integration and Deployment
![image](https://user-images.githubusercontent.com/45073537/117691378-bd697700-b1b3-11eb-9beb-b974e725a817.png)

The benefit of using continuous integration and deployment is that it ensures components being worked on by different developers will be built in tandem, rather than being integrated at a late stage of the project, which risks things breaking. It is much better to frequently combine the outputs of all developers into a single operational system and make minor adjustments as the project develops, in an agile way. Our team used GitHub to facilitate this methodology.

To acheive continuous intergration and deployment, our code was progressively merged through a pipeline of branches on GitHub. At top level is our main branch, which holds our production-ready code and most current release version of the website. The contents of our Express API, Angular dist, and Mongo scripts on this branch were fully tested and ready to be shipped. Below this is our staging branch, where code is held for testing before being deployed. We used this branch to ensure there were no issues with the feature being deployed from dev before it is pushed to production. Under staging is our dev branch, which holds the code that is being worked on by our developers. The environment for this stage lay within the Docker containers set up as explained above. This is to ensure that the system was developed and tested in a reproducible way that could be used across platforms. From here, developers created their own feature branches to work on individual features, regularly merging them with dev and then deleting that branch when the feature was complete to avoid a mess of branches and keep the branch structure streamlined and comprehensible. When the current version was finished by our developers, it was merged from dev into staging, to be tested before released on our main branch.

![image](https://user-images.githubusercontent.com/45073537/117702220-22c36500-b1c0-11eb-9611-52b6ea27fe68.png)

In staging, the critical components in our code base were tested. We used X to run those tests on every push to the repository to ensure continuous integration.

We held [regular stand up meetings](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management/Minutes) to achieve the CI/CD workflow and ensure that everyone was on the same page, and any issues could be addressed swiftly and effectively.
