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

## d. Front End - Angular. Details of implementation.
*Hamza*

## e. Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!
*Stanni*

## f. Deployment details (including Docker), include how you have been achieving continuous integration and deployment.

In order to allow for our application to be easily developed and shipped across platforms, we decided to use [Docker](https://www.docker.com/why-docker). This allowed us to package and run our application in a loosly isolated environment called a [container](https://www.docker.com/resources/what-container). The containers are lightweight and contain everything needed to run the application - you don't need to rely on what's currently installed in the host. This means it is easy to share containers while you work, streamlining the development lifecycle by allowing developers to work in standardized environments; facilitating the continuous integration and continuous deployment (CI/CD) workflow.

To run the project in Docker, we have a [docker-compose script](https://github.com/jess-mw/desk23/blob/84f480d095bc974c9542099c703a6f18db6725ac/Website/docker-compose.yml) to ensure that the system can be easily rebuilt. This script runs our [Dockerfile](https://github.com/jess-mw/desk23/blob/84f480d095bc974c9542099c703a6f18db6725ac/Website/Dockerfile), which sets up the Node container, runs the package manager installation command, and builds the program. The script also sets up our database in a container using the Mongo image, thus we have two separate containers (Node and MongoDB) that communicate over a single port protocol. To ensure that the database is running before Node tries to connect, we have included a [wait script](https://github.com/jess-mw/desk23/blob/84f480d095bc974c9542099c703a6f18db6725ac/Website/wait-for.sh) sourced from [here](https://raw.githubusercontent.com/eficode/wait-for/master/wait-for). The system can thus be rebuilt by running the command *docker-compose up --build*.
