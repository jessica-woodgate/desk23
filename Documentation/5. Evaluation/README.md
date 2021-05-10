# Evaluation [15 marks]

## Contents
a. [Details of how we evaluated our designs](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#a-details-of-how-you-evaluated-your-designs-techniques-used--awareness-of-their-limitations-description-of-techniques-suitable-for-your-particular-design-a-timeline-of-evaluation-of-your-design)

b. [Unit testing/functional testing](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#b-unit-testing--functional-testing)

c. [User acceptance testing - evaluation of design with users](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#c-user-acceptance-testing-evaluation-of-your-design-with-users--methods-undertaken-findings-implications)

## a. Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design.
*Wenda*

## b. Unit testing / Functional testing.

On the basis of the user stories, a test plan was developed around the key features and areas of value-add of the project: 1. clicking on specific countries to find more information, 2. rotating/altering the view of the globe, and 3. changing the date dynamically using the timeline feature. The plan sets out the steps for manually testing each feature as well as the prerequisites that need to be accounted for (environment and browser), and was reviewed in the context of a meeting between the full team. The test plan can be found here: <a href="https://github.com/jess-mw/desk23/blob/main/Documentation/5.%20Evaluation/Testing/testplan.md">Test Plan</a>

Building on the test plan and the features identified as product requirements, a set of initial automated tests were defined through a discussion of each teammember's work on the different parts of the system that impact on the implementation of a given feature, considering one feature at a time. This approach was intended to ensure that both the view (user interface) and the model (database and logic) would be tested, while ensuring robust coverage of a particular functionality. Unlike the functional browser-based tests in the test plan, the automated tests required knowledge of the code's implementation details, which benefited from discussions between the tester with individual team members and as a whole group. It was decided at this stage that the rotation and zoom functions would not be tested given that these are implemented using three.js OrbitControls, preferring to focus on testing code that helps the project and is not too closely related to three.js.

The initial suite of planned tests included broadly:

**Navigating through time using the slider**
- should get [right number] of data points on the globe for a given year
- should include [specific countries] among the data points for a given year
- should get the expected data from the data service

**Clicking on a specific country to find more information**
- should (not) generate a pop up box
- should match country name to the country clicked
- should match literacy rate to the country clicked
- should get the expected data from the data service

However, the difficulty and undesirability of testing the countries clicked soon became evident given that the click detection relies on a three.js raycaster that returns an array of objects that intersect with it. Ultimately, the following series of tests were run against the code. 

![image](https://user-images.githubusercontent.com/74050529/117734765-0b9a6c80-b1ec-11eb-9788-3a0d7464f033.png)

The tests were implemented using Karma and Jasmine on the git staging branch, following the continuous integration and deployment principles of evaluating a functionality before it is released to the live branch, and making sure that a given story is delivered against a feature at a time. The tests were first conducted with core cases in mind, and then extended to test edge cases, for example years without any data points in the dataset, to try to find defects and provide a greater level of assurance.

## c. User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.
*Emily*
