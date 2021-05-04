# Data Model

This document shows the design and evolution of our data model.

What are the entities in the system?
*	Whole globe
*	Each country
*	Welcome page

## Building the database 

Our initial data was stored in a csv file pulled from an online source. This data was adjusted to have simpler headings allowing for easier manipulation, and a data model was created to describe schema for this database. At this point, there was only one collection so it was not too difficult to implement. Database was created and linked to the docker-compose. We then created a JavaScript file called db.js that is run in the docker-compose. This forms a connection to the database, and creates a model of our table. Our CSV file was transformed into a js object; this object is exported to db.js and inserted into our data model. To do this, we converted the csv file into a json using csvtojson on the command line, then went into the file and turned it into a js object. In db.js we then include it as a variable and use Model.insertMany(variablewithdata) to populate the database. This is the algorithm that we used for all three collections.

In addition, we have a series of query helper functions that get relevant/required data in dbController.js, as well as functions that help us to remove the whole collection if necessary. During sprints, we realised that for front end it will be much easier to have one collection containing both literacy rates and coordinates. We looked into doing embedded documents, however as we were inserting the data from json files, this wasn’t simple. Also as they were files we had lifted off of the internet, there were issues with foreign keys linking the collections being spelled differently, or present in one file but not the other. We thus decided to create a new collection that had all the information we needed; this also provided a good opportunity to clean the data and remove any unnecessary noise.

## Issues: 

* Getting the data from the CSV file into the database proved to be challenging and took much longer than expected, due to limitations in conceptual understanding 
* Unsure whether need to run create model every time we run the code or only once - found out it was uploading every time so deleted database collections and restarted to get rid of duplicates 
* However, sometimes we found that when loaded the database was empty and we weren't sure why - want to avoid populating the database every time and having an empty database
* Finding a good way to link tables, especially considering they were from datasets that we did not create 
* Removing noise from the datasets, as we did not create them ourselves
* Synchronising the different datasets that were pulled from the internet

## Data Model - First Iteration
![image](https://user-images.githubusercontent.com/45073537/116996776-d82f7d80-acd3-11eb-9629-774d2931b08d.png)

*	Look up information stored on welcome page
*	Take in information about where the user’s mouse is
*	Look up overview statistics for a county
*	Take in information about what the user does next – whether they click on a country or move mouse to hover over another country
*	Look up detailed statistics for a country
*	Take in information about whether the user exists these details
*	Reading data of statistics for each country, and then storing that somewhere it can be accessed to adjust the display of countries (i.e. how dark or bright they are)

This is our initial data model design that we created before we began coding. It was thus formed on the design conception that we had come up with at that stage, but were not sure upon the specifics of implementation. We knew that there would be two main sources of data from which we would have to work with: one being the data that we would display (i.e. data about literacy rates in relation to each country) and one being data about what the user was doing (i.e. what data they were requesting). We later realised that this second set would come in the form of http requests, and we would not have to store any data about the user in our database. This has the benefits of simpler data storage
as well as higher security, as there is no sensitive data being taken in our site.

## Data Model - Second Iteration
![image](https://user-images.githubusercontent.com/45073537/117008188-5c88fd00-ace2-11eb-861b-06f52baed76d.png)

This model reflects the data we needed in the middle of our sprints, when we were first building the front and back ends of our system. When building the globe element, we realised that we would need a dataset storing geographical information about each country, in order to plot the countries on the map, and access them according to user behaviour. The other collection stores literacy data about each country in accordance with a particular year in which that data was collected. In our original model, this collection stores much more detailed information and links to relevant sources, e.g. charities working in that area. Whilst building the system, in order to get to our MVP quicker, we decided to simplify this model to just the basic data, which could later be expanded upon.

## Data Model - Third Iteration
![image](https://user-images.githubusercontent.com/45073537/117008237-6b6faf80-ace2-11eb-8271-73d8342239c8.png)

In the third iteration of our data model, we created a new collection. This collection combined elements from both the literacy data collection and the coordinates collection. Having aspects from these two collections in one single collection allowed the front end to access the data much quicker, as well as presenting a good opportunity to clean the data sets, removing any noise and ensuring that the data was properly aligned (e.g. there were no countries for which we had literacy data but no coordinates).
