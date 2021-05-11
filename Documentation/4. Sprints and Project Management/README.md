# Project Management

**To do**
* Add some images and make this look nicer
* Link the Kanban board (or an image) 
* Link an image of the teams chat 
* Link an image of miro?


## Contents
a. [Group working methods used](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management#a-group-working-methods-used-for-instance-did-your-team-choose-a-particular-style-of-agile-what-communication-channels-did-you-use)

b. [Discussion of team roles](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management#b-discussion-of-team-roles-specialisation-is-ok-a-summary-of-individual-contributions-note-this-is-for-reference-your-team-will-all-receive-the-same-grade)

c. [Documentation of sprints](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management#c-documentation-of-your-sprints-including-both-high-level-overview-timeline-and-selected-highlights-that-were-critical-points-in-the-project-remember-to-show-the-users-stories-implemented-in-each-sprint-we-expect-a-summary-of-meeting-logs-including-for-instance-apologies-for-absence-etc)

d. [Team use of Git, continuous integration/continuous deployment, streamlining of workflow](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management#d-team-use-of-git-how-your-team-used-continuous-integration--continuous-deployment-streamlining-of-workflow-throughout)

## a. Group working methods used (for instance did your team choose a particular style of agile? what communication channels did you use?)

### SCRUM or Kanban?

The core requirement set by ourselves was to create an application that solves the user’s needs. The user’s visions and expectations of our product must lie at the heart of it all. In order to do this, we needed to adopt a flexible and adaptable nature and maintain a consistent channel of dialogue with our users (as explained in the [UX Design Section]( https://github.com/jess-mw/desk23/tree/main/Documentation/3.%20UX%20Design)).

As such, an Agile methodology seemed perfect for us to achieve this requirements. With the aim of consistently publishing our app and obtaining feedback on its operations, we debated between the use of Kanban and Scrum as the main method for organising our project. 

<div align="center">
 
  **Kanban**
  
</div>

|                           Attribute                          |                                                                                                                               Evaluation                                                                                                                              |  Wanted?  |
|:------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|
|     No pre-defined roles                                     | Would allow for stronger collaboration but would require each team member to be well versed with most areas of the MEAN stack.                                                                                                                                        |     NO    |
| Alter product to be changed and restructured at any time     | Removes the limitations placed by a manager. Provides the developer with freedom to change the product at any time without consequences.                                                                                                                              |    YES    |
|     Custom set   delivery and production output deadlines    |     Allow individual team members to organise their side of the stack according to their own respective schedules.                                                                                                                                                    |     NO    |
|     Chronological   method of completing tasks               |     Ensure that each and every task is completed. It does, however, limit a developer’s creativity in terms of which tasks get solved first. May lead to inefficiencies if the developer feels they better equipped to solve another problem at the current time.     |     NO    |


<div align="center">
 
**SCRUM**

</div>

|                     Attribute                    |                                                                                                                                       Evaluation                                                                                                                                      | Wanted? |
|:------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------:|
|     Pre-defined Roles                            |     Each team member can focus on learning and specialising within a specific area of the MEAN stack. Given the short period provided for development, this appears to be more effective.                                                                                             |   YES   |
|     Changes may not occur during the sprints     |     Provides a stronger sense of direction, however, removes the creative freedom provided by the Kanban methodology. Given the scope of the project, this may be essential as consistently changing the direction and/or vision may lead to inconsistencies with the end product.    |    NO   |
|     Set deadlines for each sprint                |     Ensures the entire MEAN stack is being developed in parallel to each other. Allows for us to organise consistent feedback and review sessions with users in a timely manner.                                                                                                      |   YES   |
|     Non-chronological method of completing tasks |     Gives the developer the freedom to work on certain aspects and solve the problems in any order this best see fit.                                                                                                                                                                 |   YES   |

After reviewing both the methodologies, though similar, we decided to focus on the SCRUM methodology. SCRUM provides us with the opportunity to organise our sprints around the user’s availability. The product was set to be released at a set date each time, and as such, we were able to involve the users when necessary. The feedback and user stories generated from each session allowed us to define the next sprint. This was vital, given the short time period within which the website was set to be built. 

During each sprint, objectives and deliverables were set in accordance to the user stories generated. However, a Kanban board was seen fit to help us organise the smaller aspects of the website. It was felt necessary to detail all the smaller tasks on one page, allowing each team member to understand what was being built at the time in the different areas of the MEAN stack. 

### Tools used during our Group Work 
* Trello: Used for organising the smaller tasks by using a Kanban Board 
* Teams: Main channel of communication and file storage 
* Miro: Main application used for communicating our ideas through visual means e.g. Post-it notes


## b. Discussion of team roles (specialisation is ok!). A summary of individual contributions (note: this is for reference, your team will all receive the same grade!).

**Ideation: Everyone**
* Developed paper prototypes. 
* Working on mashing up the concepts. 
* Fleshing out the main concept and understanding its potential.

**Stanni**

**2. Back-end co-developer and SCRUM leader: Jessica Woodgate** 
* Implemented database & wrote dbController.js functions to access data from the database for the API
* Co-development of/assisting with API/Docker:
   * Created boiler plate version of the website, API, docker compose files, and data service from which to build our project on
   * Created routing for each collection in the database
* Project Management:
   * Created GitHub repository and main reviewer of pull requests
   * Wrote meeting minutes & kept track of sprint targets

**3. Co-backend Designer: Wenda Zhao**
* Developed API backup 
	* Create routing for single collections in database
	* * Developed express router for the original module
* Developed dataflow for json data files
* Developed Separate CRUD functions
* Assisted on Feedback analysis/evaluation

**4. Co-Product Owner and Quality Assurance: Emily Bloom**
* Responsible for testing: 
	* Functional tests 
	* Unit tests 
* User acceptance testing
* Design and evaluation, including prototyping/wireframes
* Product backlog management

**5. Co-Frontend and UI/UX Designer: Hamza Qureshi**
* Developed Three.js globe: 
	* Creating the scene, globe component and functionality 
	* Creating tutorial windows and interactivity 
	* Creating welcome page 
* Loaded in data from the API to the frontend 
* Created the book opening animation for the home page
* Assisted on first two paper prototype designs
* Assisted on the first wireframe of the website


## c. Documentation of your sprints, including both high level overview, timeline, and selected highlights that were critical points in the project (remember to show the users stories implemented in each sprint). We expect a summary of meeting logs (including for instance apologies for absence etc)

### High level overview

![image](https://user-images.githubusercontent.com/45073537/117454218-cd782100-af3d-11eb-8935-9712b1dcd551.png)

* Details of sprint targets [sprint by sprint](https://github.com/jess-mw/desk23/blob/main/Documentation/4.%20Sprints%20and%20Project%20Management/3.%20Sprints.md#sprints) and [week by week](https://github.com/jess-mw/desk23/blob/main/Documentation/4.%20Sprints%20and%20Project%20Management/3.%20Sprints.md#week-by-week-1)

* Details of [meeting notes](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management/Minutes)

The development of the project was split into [six main sprints](https://github.com/jess-mw/desk23/blob/main/Documentation/4.%20Sprints%20and%20Project%20Management/3.%20Sprints.md#sprints), each one lasting two weeks. Each sprint was defined by a [user story](https://github.com/jess-mw/desk23/blob/de9f01ae9e2cbb21b6e4b16f7435eaf4cd2fdb4d/Documentation/3.%20UX%20Design/9.%20User%20Stories.md) and we assigned tasks accordingly. We had shorter meeetings [throughout](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management/Minutes) and [at the end of](https://github.com/jess-mw/desk23/blob/main/Documentation/4.%20Sprints%20and%20Project%20Management/3.%20Sprints.md#week-by-week-1) each week to discuss general issues that had come up, and anything that needed team input. At the end of each sprint we conducted a longer meeting to reflect upon the targets, how progress on them had gone, whether we had reached our definition of done, and to set the next sprint's targets. Targets were set by deciding upon a user story for that week, and adding to the backlog of our [Trello board](https://trello.com/b/iPzVt2TT/literacy-rates-around-the-world). Taking the user story and Trello board, we discussed as a team which tasks should be completed in the current sprint. Tasks were added to the Trello board in team meetings, mainly in the evaluative meeting at the end of each sprint, but also during the week when new tasks came up. These were also recorded in the [minutes](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management/Minutes) from our meetings.

Below is a visual representation of how we used user stories in relation to each feature to allocate tasks, and how these were assigned across sprints.
![image](https://user-images.githubusercontent.com/45073537/117454149-b6d1ca00-af3d-11eb-8c93-80507bf5cced.png)

Our Gantt chart displays how the tasks were spread out across time. By visually displaying the timeline of deadlines it helped us to ensure that we could more effectively allocate resources across every aspect of our project. The structure of the chart helped us to monitor progress and see how tasks needed to be divided into sprints, enabling clear communication about project milestones.

![image](https://user-images.githubusercontent.com/45073537/117534528-b4c54500-afe9-11eb-8ee9-f59bbb3f0867.png)

### Highlights & Critical Points
One of the main critical points in the project was in our [second sprint](https://github.com/jess-mw/desk23/blob/main/Documentation/4.%20Sprints%20and%20Project%20Management/3.%20Sprints.md#sprint-2---deploy-interactivity-19th-april---2nd-may), where we had to make a decision at the end as to whether we were going to move forwards with the globe component developed using three.js or the one developed using d3.js. This was a big fork in the project, and we had to think carefully as a team as to which road was the best to take. Using feedback gathered from our users (see [here](https://github.com/jess-mw/desk23/tree/main/Documentation/3.%20UX%20Design#sprint-1-and-2-building-the-globe-and-interactivity) for a more detailed exploration of this process), we decided to go with the three.js component. This meant that our team member, Stanni, who had previously been working on the d3 component was now freed up to assist with documentation and other front end issues that needed an extra hand with.

Another critical point, also in the [second sprint](https://github.com/jess-mw/desk23/blob/main/Documentation/4.%20Sprints%20and%20Project%20Management/3.%20Sprints.md#sprint-2---deploy-interactivity-19th-april---2nd-may), was when we decided to create a new collection integrating the two data sets that we had pulled from the internet. This was a big step at it involved careful consideration of how we needed to use our data. We explored various different ways of doing this using code/mongoose tools, however in the end we decided to do it manually. There were a few reasons that we decided to do this, the main ones being that the data needed vetting and gaps between the two collections we currently had (literacy data and coordinates) needed filling to make sure there was no unnecessary or missing information.

## d. Team use of Git, how your team used continuous integration / continuous deployment. Streamlining of workflow throughout.

Please see [here](https://github.com/jess-mw/desk23/blob/main/Documentation/2.%20System%20Implementation/README.md#continuous-integration-and-deployment) for an explanation of how we used continuous integration and deployment with Docker and GitHub. The basic layout of our branch structure can be seen in the diagram below:

![image](https://user-images.githubusercontent.com/45073537/117702174-13441c00-b1c0-11eb-9792-13d38d017394.png)

Essentially, we ensured continuous integration and deployment through a pipeline of branches. At the highest level, our main branch contained our production code - the current release that is ready to be shipped. Beneath this is the staging branch, where our features were tested. On the level below is our dev branch, from which each developer created their own branch from to work on their own particular feature. This ensured that we did not have multiple developers working on the same branch at once, which avoided merge conflicts and lowered the risk of things breaking. When the developer was happy that their feature was complete, and this was discussed with the team, they merged with dev and triggered the CI/CD pipeline. We laid out our methodology for the team use of Git in [this document](https://github.com/jess-mw/desk23/blob/981eb73a3a3ccfff0c4306806af7fd2aa4bf3892/Documentation/4.%20Sprints%20and%20Project%20Management/4.%20Workflow%20and%20use%20of%20Git.md) so that team members could refer to throughout the project for clarification.

To ensure a streamlined workflow, we had one person who was in charge of organising the remote repository and reviewing pull requests. This avoided any confusion or communication issues with incorrect versions being merged and avoided major conflicts or the need to refactor our code. We held [regular stand up meetings](https://github.com/jess-mw/desk23/tree/main/Documentation/4.%20Sprints%20and%20Project%20Management/Minutes) to discuss progress on the features that each team member was working on. This meant that we were in constant communication about the project, and everybody was up to date with the current state of the website. By keeping everyone in the loop throughout, and using the continuous integration and deployment methodology, we ensured that the different features of our code were built and tested together and each developer's work was fully integrated with the rest of the project.
