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
*Jess*

[Details of the evolution of our data model and building of the database](https://github.com/jess-mw/desk23/blob/491a60804c4803faf8612054fc73f5efd8fa77e2/Documentation/2.%20System%20Implementation/Data%20Model.md)

For our database, we decided to use MongoDB with Mongoose to access it through Express. We chose MongoDB as it is scalable, thus making it easier to adjust our data models as we progress through the agile development cycle.

As our project grew and developed, as according with agile methodology, so did the structure of our features and thus what was needed from our data model.
The final data model is displayed below. It includes two collections that store information about literacy rates and coordinates, and one collection that combines the necessary information from each. The keys that link all tables are the "entities" - these are the country names. We could thus use the relevant country name to look up related data in each collection.

![image](https://user-images.githubusercontent.com/45073537/117008237-6b6faf80-ace2-11eb-8271-73d8342239c8.png)

Future developments of our data model would include a collection to store user input. Some user input we have discussed implementing into deployment could be feedback on the literacy rates, e.g. whether they were as the user expected. This would involve a collection storing the relevant entity, userID (this would be randomly generated and not directly related to the user at all, thus preserving anonymity - the only purpose would be to link multiple feedbacks from the same user together), and collected feedback.

## c. Middle Tier - Express, Node, the RESTful API
*Wenda*

## d. Front End - Angular. Details of implementation.
*Hamza*

## e. Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!
*Stanni*

## f. Deployment details (including Docker), include how you have been achieving continuous integration and deployment.
*Jess*
