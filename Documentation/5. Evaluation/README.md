# Evaluation

## Contents
a. [Details of how we evaluated our designs](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#a-details-of-how-you-evaluated-your-designs-techniques-used--awareness-of-their-limitations-description-of-techniques-suitable-for-your-particular-design-a-timeline-of-evaluation-of-your-design)

b. [Unit testing/functional testing](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#b-unit-testing--functional-testing)

c. [User acceptance testing - evaluation of design with users](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#c-user-acceptance-testing-evaluation-of-your-design-with-users--methods-undertaken-findings-implications)

## a. Details of how we evaluated our designs.

The evaluation process was carried out throughout the whole design process. Two forms of evaluation were included. In the first form, the group member set up regular meeting to evaluate their design process. At this stage, the group mainly compared current website design with original ideas and decided features need to be adjusted to fulfil its purpose. By using such a method, the group could easily improve their design closer to the original target, but lacked understanding of aimed user groups requirements thus introducing the potential danger of ignoring specific needs of the user, implying the website may meet the design target but be difficult to use.

Therefore, the other way of evaluation included user feedback. Apart from sticking to the original route, the group also cared about the website being user friendly. This entails that the website should be easy to use, minimize complicated instructions and ensure the user understands how to interact with website. As a user-centred website design, multiple participants were included during feedback session. Some of these participants took part in the whole design process and gave feedback for every stage of the prototype/design, while other users joined the feedback session at different stages. By observing their interaction with website, the team had a better understanding of designing elements and it was easier to find out aspects required improvement for better usability. However, it was soon clear that user feedback varies, and is sometimes even contradictory - possibly due to their different understanding to the website, or different motivations for visiting the website. This sometimes created conflicts during evaluation, as we realized it is impossible to satisfy every potential user. As a result, the group had to weigh their feedback and change website features accordingly, which took place after user feedback session and discussed before next stage’s development.

The rolling evaluation process can be visualised in the following diagram:

![image](https://user-images.githubusercontent.com/74254613/117748985-ea944480-b208-11eb-8d5a-15cfe0648cfe.png)


## b. Unit testing / Functional testing.

On the basis of the user stories, a test plan was developed around the key features and areas of value-add of the project: 1. clicking on specific countries to find more information, 2. rotating/altering the view of the globe, and 3. changing the date dynamically using the timeline feature. The plan sets out the steps for manually testing each feature as well as the prerequisites that need to be accounted for (environment and browser), and was reviewed in the context of a meeting between the full team. The test plan can be found here: <a href="https://github.com/jess-mw/desk23/blob/main/Documentation/5.%20Evaluation/Testing/testplan.md">Test Plan</a>

Building on the test plan and the features identified as product requirements, a set of initial automated tests were defined through a discussion of each teammember's work on the different parts of the system that impact on the implementation of a given feature, considering one feature at a time. This approach was intended to ensure that both the view (user interface) and the model (database and logic) would be tested, while ensuring robust coverage of a particular functionality. Unlike the functional browser-based tests in the test plan, the automated tests required knowledge of the code's implementation details, which benefited from discussions between the tester with individual team members and as a whole group. It was decided at this stage that the rotation and zoom functions would not be tested given that these are implemented using three.js OrbitControls, preferring to focus on testing code written by the team's developers and code that is not too closely related to three.js. 

The tests were designed to examine the most important parts of the code base and focused in particular on the Globe Component. The tests were implemented using Karma and Jasmine on the git staging branch, following the continuous integration and deployment principles of evaluating a functionality before it is released to the live branch, and making sure that a given story is delivered against a feature at a time. The tests were first conducted with core cases in mind, and then extended to test edge cases, for example years on the slider without any data points in the dataset, to try to find defects and provide a greater level of assurance.

Tests were divided into nested 'describe' blocks to perform the test suites. The blocks are organised in an Arrange, Act, Assert pattern to improve readability and clarity of the tests in terms of tracking which features had already been tested, and to minimise duplication to strive to keep the code DRY. The set-up allowed variables to be assigned for use for the block's scope and data to be prepared. The unit tests then altered the state of the component object usually through a function call, and finally assertions gauged the expected result. For example, before each test of the slider feature, the globe Mesh Object needed to be created for data points to be affixed to (example set-up below).

```typescript
describe('multiple same year', () => {
    beforeEach(() => {
      component.listOfCountries = [
        {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
        {Entity : 'Jordan', Year: 1979, Data: 66, Latitude: 31, Longitude: 37, Area: 35480},
        {Entity : 'Paraguay', Year: 1979, Data: 85, Latitude: 23, Longitude: 58, Area: 157000}
      ];
      component.createGlobe();
    });

```
The teardown is done in the `setAllPoints()` function of the globe component, which removes any existing coordinate points on the globe. The initial suite of planned tests included broadly:

**Navigating through time using the slider**
- should get [right number] of data points on the globe for a given year
- should include [specific countries] among the data points for a given year
- should get the expected data from the data service

**Clicking on a specific country to find more information**
- should (not) generate a pop up box
- should match country name to the country clicked
- should match literacy rate to the country clicked
- should get the expected data from the data service

However, similar to the zoom and rotation functionalities, the difficulty, and undesirability for our purposes, of writing automated tests for the countries clicked soon became evident given that the click detection relies on a three.js raycaster that returns an array of objects that intersect with it. Instead, we considered the crux of the testing for these features would best be covered with functional tests at the system level, as reflected in the test plan, and the team focused on tests that would help to probe and strengthen the product.

Another challenge was in deciding how to go about testing that the correct number of data points appeared on the globe for a given year, as part of the slider feature to be able to adjust the date and move through time. The original plan behind the test would be to look in the dataset for the expected result for a given year and assert that this would be reflected in the number of coordinate points on the globe (for example, in 1979, there should be 25 data points in total). However, we wanted to avoid writing "brittle" tests that would be reliant on making real HTTP requests, and also to focus on the specific behaviour we wanted to test - this way we could guarantee that only the behaviour of the component could potentially fail, rather than the service it depends on. The tests instead used mock data, and spied on the `addCoordinatePoint()` function to check that each country object with a year attribute that matched the date passed to the `setAllPoints()` function, ie. the date set by the user using the slider, is included as a data point on the globe.

```typescript
 it('should call the addCoordinatePoint function 3 times', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalledTimes(3);
    });
```
In addition to the number of points, we also test whether specific countries we expect to appear from the mock data have been added to the globe as data points.

```typescript
  it('should include Afghanistan for given year', () => {
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.globe.children).toBeTruthy();
      expect(component.globe.children[0].userData.Country).toEqual('Afghanistan');
    });
```

Ultimately, the following series of unit tests were run against the code. 

![image](https://user-images.githubusercontent.com/74050529/117734765-0b9a6c80-b1ec-11eb-9788-3a0d7464f033.png)

## c. User acceptance testing - evaluation of design with users.

The user acceptance testing was designed to ensure that the product works according to the requirements set out at the start of the project; to make sure the product is geared towards end-users consistent with the user-centred design development process; and to consider whether the product can handle the tasks required of it in a real-world environment. This phase of testing also allows for the detection of any defects or bugs, as well as to highlight any potential alternative or exceptional flows in engaging with the product, where users may not interact with the website as expected. 

As such, a final round of feedback sessions was undertaken near the conclusion of the project, once the features had been implemented, to permit for end-user interaction with the system prior to moving to production. The feedback sessions brought in participants who were new to the project, and did not take part in the design and evaluation phases in order to remove bias where, in contrast, long-standing participants and user group members already have exposure to and awareness of how the product works, and may potentially be emotionally invested in the project depending on their levels of involvement. The sessions featured an interviewer who observed user interaction with the product, took observational notes, and logged any bugs.

The testing followed the above framework in the evaluation of the functional requirements of the design. The approach took into account user requirements as a starting point, ie. needs from a user's perspective that the project seeks to meet or value that it brings to a user, which in turn informed more specific system requirements, or specifications for how the product would deliver these services. The requirements were gradually built on and refined over the course of the project throughout the evaluation process. Some new requirements were incorporated, for example, the requirement to include a tutorial to walk through the website functionality, and the requirement to add in audible/sound features were added in response to user group feedback. Other requirements were tweaked, for example, the emphasis of the landing page shifted from being playful as well as thought-provoking, to also requiring an explanatory dimension since feedback reported that it needed to be clearer what was being shown. Thus, the product backlog was consistently being reviewed and prioritised.

Key operational constraints include limited time to implement the project, remote working conditions, and limited prior experience with MEAN stack development. The time limitations meant that the team took fewer risks in its approach which may have impacted on the product's innovation potential. In addition, the product evaluations did not include the target user group of adolescents and school-aged children, as a vulnerable group, given that no ethics approvals were sought, and as such may have constrained how well the product responds to the needs of this particular demographic.

The metrics for delivery of a feature include robustness (eg. events causing failure, data corruption in the event of failure), ease of use for newcomers to the product (average training time, number of help boxes per feature, time taken to perform a given task), speed (eg. user-event response times, screen load time for the globe), and user satisfaction (net promoter score, whether the product met expectations). Tested operating systems included Windows and Mac OS. Browser tests were conducted in Microsoft Edge, Firefox and Chrome. Given time constraints and difficulty getting access to new users, it would be important as a next step to expand the sample size and involve more users to validate the product. Part of this effort to involve more users could centre around a survey. Quantitative data in particular to evaluate user satistication would have been useful to collect in line with the metrics above. Other metrics require an observer to assist and would not rely on user self-reporting, including average training time, time taken to perform a given task, and picking up on unexpected behaviour which might not be as immediately evident to a first-time user. 

![image](https://user-images.githubusercontent.com/74050529/117792697-6f9c4f80-b243-11eb-8938-49be09955be5.png)


**Findings**

The link to the feedback can be found here: <a href="https://github.com/jess-mw/desk23/blob/main/Documentation/3.%20UX%20Design/Feedback/Final%20Website%20Design/Feedback%20Session%205%20Participant%206.md">Final Feedback Session</a>

Based on the data available, a cosmetic bug that was flagged is that the instructions in the tutorial boxes exceed their frames, ie. the text does not fit to the box. In addition, it was flagged that the bars (data points) on the globe do not change back to their original colour after clicking on them, which is important since the bars are colour-coded according to the national literacy level. It was noted that Chrome does not offer autoplay capabilities and as a result, the video on the homepage does not start upon the website loading. 

In terms of ease of use, the interviewers observed that users were able to follow the tutorial instructions and implement the guidance naturally, however one user did not click through to the final tutorial box. In particular, rotating and zooming in on the globe component seemed to be straightforward for the users, with one user describing globe interaction as a “no brainer.” One user pointed out that the names of only a subset of countries appear on the globe and that additional labels could be added. This could make the globe clearer and easier to use (and also have implications in terms of highlighting some countries over others). In addition, a user suggested that the meaning of the colours of the data points could be further clarified, and that the initial tutorial box (which describes the colour-coding) should be a). simplified and b). made recoverable even after closing it. 

Users were observed to click less quickly in the transition between the landing page animation and the globe. Users also required more guidance to use the timeline, including the arrows to navigate with the slider (observational notes read: “User needed some guidance with using the arrows to navigate through the timeline”).
In terms of screen load times, one user experienced a delayed load time for the skybox backdrop to appear fully behind the globe. Another user noted that navigation was smooth, suggesting response to events worked well in these cases. 

For user satisfaction, one user fed back that they liked the tutorial walkthrough, in particular the chance to try out the interaction with the globe after each instruction. The users expressed lower levels of satisfaction with the book feature on the landing page (the observational notes record: “User did not particularly like the welcome page/book animation”, “Initial graphics could be improved – especially the text in the book animation”), suggesting that the font could be revisited. The out-of-order letters in particular did not resonate with users (notes from the feedback included: “Could have the initial text backwards or skip out letters”, “User asked what language the text on the book was written in”) and may not have been very clear in terms of the messaging.

**Implications**
