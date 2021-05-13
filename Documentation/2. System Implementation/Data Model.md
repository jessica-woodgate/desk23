[Return to System Implementation](https://github.com/jess-mw/desk23/tree/main/Documentation/2.%20System%20Implementation)

# Data Model

This document shows the design and evolution of our data model.

What are the entities in the system?
*	Whole globe
*	Each country
*	Timeline
*	Welcome page

## Building the database 

Our initial data was stored in a csv file pulled from an online source. This data was adjusted to have simpler headings allowing for easier manipulation, and a data model was created to describe the schema for this database. The file [db.js](https://github.com/jess-mw/desk23/blob/bd43b758e6d00fdaecd657c696363cc569a501f6/Website/db.js) forms a connection to the database. 

![image](https://user-images.githubusercontent.com/45073537/118118450-de64de80-b3e4-11eb-864f-5f10dda7bbf1.png)

Our CSV files were transformed into js objects; this object is exported to [seed.js](https://github.com/jess-mw/desk23/blob/71d634614a653521a20a6552a59ce7ff747232dc/Website/seed.js) and inserted into our schemas created using mongoose. In seed.js we then include the data as js objects as variables, and use Model.insertMany(variablewithdata) to populate the database. 

![image](https://user-images.githubusercontent.com/45073537/118118856-6c40c980-b3e5-11eb-90de-8f3bcea6bf27.png)

This is the method that we used for all three collections. Initially, this data population was run in [db.js](https://github.com/jess-mw/desk23/blob/bd43b758e6d00fdaecd657c696363cc569a501f6/Website/db.js), which is run on every docker-compose up to initialise the database connection, however we realised that this meant the database was being re-populated on every compose. To resolve this issue, we created [seed.js](https://github.com/jess-mw/desk23/blob/71d634614a653521a20a6552a59ce7ff747232dc/Website/seed.js) which can be run by the user on the first composition of the site to initialise the database, thus later compositions will not result in duplicate data entries.

In addition, we have a series of query helper functions that get relevant/required data in [dbController.js](https://github.com/jess-mw/desk23/blob/71d634614a653521a20a6552a59ce7ff747232dc/Website/dbController.js), as well as functions that help us to remove the whole collection if necessary. The first two collections we made were one containing data about [literacy rates](https://ourworldindata.org/literacy#:~:text=While%20only%2012%25%20of%20the,1960%20to%2086%25%20in%202015), and one geographical data such as [coordinates for each country](https://github.com/DavidGrice/THREEJS-Tutorial-Globe/blob/master/START/public/DATA/Final_data.json). These were both from open source data sets we found on the internet (see hyperlinks in previous sentences for our sources). During sprints, we realised that for front end it will be much easier to have one collection containing both literacy rates and coordinates. We looked into doing embedded documents, however as we were inserting the data from json files, this wasn’t simple. Also as they were files we had lifted off of the internet, there were issues with foreign keys linking the collections being spelled differently, or present in one file but not the other. We thus decided to create a new collection that had all the information we needed; this also provided a good opportunity to clean the data and remove any unnecessary noise.

## Extensions

Due to deadline limitations, there are some things that we would like to add to our database but were unable to in this set of sprints. This includes automating the database seeding, so that the user does not have to manually run seed.js when the database is empty, but the program can check if there are any collections present, and populate accordingly. 

We would also like to create a collection to store user input. Some user input we have discussed implementing into deployment could be feedback on the literacy rates, e.g. whether they were as the user expected. This would involve a collection storing the relevant entity, userID (this would be randomly generated and not directly related to the user at all, thus preserving anonymity - the only purpose would be to link multiple feedbacks from the same user together), and collected feedback. We would then store the results of this in our database. In addition, a new data set will need to be created linking each country to educational resources and relevant charities. This will be manually collated, and extend our countryData collection. An example of what this data model might look like:

![image](https://user-images.githubusercontent.com/45073537/117789716-85f4dc00-b240-11eb-952e-db01f301d58d.png)

## Security

The database is protected by private environmental variables that the administrator needs when the website is run. At this point in the project, we are only using open source data sets, and storing no information about our users or that is sensitive in any other way. Thus, we felt that at this stage we did not need any further security. However, if the website developed into some of our proposed extensions (such as user input), we would need to reconsider how best to protect sensitive data.

## Data Model - First Iteration
![image](https://user-images.githubusercontent.com/45073537/116996776-d82f7d80-acd3-11eb-9629-774d2931b08d.png)

*	Look up information stored on welcome page
*	Take in information about where the user’s mouse is
*	Look up overview statistics for a county
*	Take in information about what the user does next – whether they click on a country or move mouse to hover over another country
*	Look up detailed statistics for a country
*	Take in information about whether the user exists these details
*	Reading data of statistics for each country, and then storing that somewhere it can be accessed to adjust the display of countries (i.e. how dark or bright they are)

This is our initial data model design that we created before we began coding. It was thus formed on the design conception that we had come up with at that stage, but were not sure upon the specifics of implementation. We knew that there would be two main sources of data from which we would have to work with: one being the data that we would display (i.e. data about literacy rates in relation to each country) and one being data about what the user was doing (i.e. what data they were requesting). We later realised that this second set would come in the form of http requests, and we would not have to store any data about the user in our database. This has the benefits of simpler data storage as well as higher security, as there is no sensitive data being taken in our site.

## Data Model - Second Iteration
![image](https://user-images.githubusercontent.com/45073537/117008188-5c88fd00-ace2-11eb-861b-06f52baed76d.png)

This model reflects the data we needed in the middle of our sprints, when we were first building the front and back ends of our system. When building the globe element, we realised that we would need a dataset storing geographical information about each country, in order to plot the countries on the map, and access them according to user behaviour. The other collection stores literacy data about each country in accordance with a particular year in which that data was collected. In our original model, this collection stores much more detailed information and links to relevant sources, e.g. charities working in that area. Whilst building the system, in order to get to our MVP quicker, we decided to simplify this model to just the basic data, which could later be expanded upon.

## Data Model - Third Iteration
![image](https://user-images.githubusercontent.com/45073537/117008237-6b6faf80-ace2-11eb-8271-73d8342239c8.png)

In the third iteration of our data model, we created a new collection. This collection combined elements from both the literacy data collection and the coordinates collection. Having aspects from these two collections in one single collection allowed the front end to access the data much quicker, as well as presenting a good opportunity to clean the data sets, removing any noise and ensuring that the data was properly aligned (e.g. there were no countries for which we had literacy data but no coordinates).
