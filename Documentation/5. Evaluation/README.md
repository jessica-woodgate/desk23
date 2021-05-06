# Evaluation [15 marks]

## Contents
a. [Details of how we evaluated our designs](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#a-details-of-how-you-evaluated-your-designs-techniques-used--awareness-of-their-limitations-description-of-techniques-suitable-for-your-particular-design-a-timeline-of-evaluation-of-your-design)

b. [Unit testing/functional testing](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#b-unit-testing--functional-testing)

c. [User acceptance testing - evaluation of design with users](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#c-user-acceptance-testing-evaluation-of-your-design-with-users--methods-undertaken-findings-implications)

## a. Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design.
*Wenda*

## b. Unit testing / Functional testing.
*Emily*

On the basis of the user stories, a test plan was developed around the key features and areas of value-add of the project: 1. clicking on specific countries to find more information, 2. rotating/altering the view of the globe, and 3. changing the date dynamically using the timeline feature. The plan sets out the steps for manually testing each feature as well as the prerequisites that need to be accounted for (environment and browser), and was reviewed in the context of a meeting between the full team.

Building on the test plan and the features identified as product requirements, a set of initial automated tests were defined through a discussion of each teammember's work on the different parts of the system that impact on the implementation of a given feature, considering one feature at a time. This approach was intended to ensure that both the view (user interface) and the model (database and logic) would be tested, while ensuring robust coverage of a particular functionality. It was decided at this stage that the rotation and zoom functions would not be tested given that these are implemented using three.js OrbitControls, preferring to focus on testing code that helps the project and is not too closely related to three.js.

## c. User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.
*Emily*
