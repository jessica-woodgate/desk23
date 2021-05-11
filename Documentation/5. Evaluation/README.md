# Evaluation [15 marks]

## Contents
a. [Details of how we evaluated our designs](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#a-details-of-how-you-evaluated-your-designs-techniques-used--awareness-of-their-limitations-description-of-techniques-suitable-for-your-particular-design-a-timeline-of-evaluation-of-your-design)

b. [Unit testing/functional testing](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#b-unit-testing--functional-testing)

c. [User acceptance testing - evaluation of design with users](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#c-user-acceptance-testing-evaluation-of-your-design-with-users--methods-undertaken-findings-implications)

## a. Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design.

The evaluation process was carried out throughout the whole design process. Two forms of evaluation were included; In the first form, the group member set up regular meeting to evaluate their design process. At this stage, the group mainly compared current website design with original ideas and decided features need to be adjusted to fulfil its purpose. By using such method, the group could easily improve their design closer to the original target, but lacking understanding of aimed user groups requirements introduced potential danger of ignoring specific need of user, making the website may meet the design target but difficult to use.

Therefore, the other way of evaluation included user feedback. Apart from sticking to original route, the group also cared if the website is user friendly, which indicates website should be easy to use, minimize complicate instructions and ensure user understand how to interact with website. As a user-centred website design, Multiple participants were included during feedback session, some of whom took part in the whole design process and gave feedback for every stage of the prototype/design, while other users joined the feedback session at different stages. By observing their interaction with website, the team had a better understanding on designing elements and easier to find out aspects required improvement for better usability. However, it was realized that user feedback varies, sometimes even contradictory, which possibly due to their different understanding to the website or different motivation visiting the website. This created a conflict during evaluation, realizing it is impossible to satisfy every potential user. As a result, the group had to weight their feedback and changed website features accordingly, which took place after user feedback session and discussed before next stage’s development.

The rolling evaluation process could be showing as following diagram.

![image](https://user-images.githubusercontent.com/74254613/117748985-ea944480-b208-11eb-8d5a-15cfe0648cfe.png)


## b. Unit testing / Functional testing.

On the basis of the user stories, a test plan was developed around the key features and areas of value-add of the project: 1. clicking on specific countries to find more information, 2. rotating/altering the view of the globe, and 3. changing the date dynamically using the timeline feature. The plan sets out the steps for manually testing each feature as well as the prerequisites that need to be accounted for (environment and browser), and was reviewed in the context of a meeting between the full team. The test plan can be found here: <a href="https://github.com/jess-mw/desk23/blob/main/Documentation/5.%20Evaluation/Testing/testplan.md">Test Plan</a>

Building on the test plan and the features identified as product requirements, a set of initial automated tests were defined through a discussion of each teammember's work on the different parts of the system that impact on the implementation of a given feature, considering one feature at a time. This approach was intended to ensure that both the view (user interface) and the model (database and logic) would be tested, while ensuring robust coverage of a particular functionality. Unlike the functional browser-based tests in the test plan, the automated tests required knowledge of the code's implementation details, which benefited from discussions between the tester with individual team members and as a whole group. It was decided at this stage that the rotation and zoom functions would not be tested given that these are implemented using three.js OrbitControls, preferring to focus on testing code written by the team's developers and code that is not too closely related to three.js.

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

However, similar to the zoom and rotation functionalities, the difficulty, and undesirability for our purposes, of writing automated tests for the countries clicked soon became evident given that the click detection relies on a three.js raycaster that returns an array of objects that intersect with it. Instead, we considered the crux of the testing for these features would best be covered with functional tests at the system level, as reflected in the test plan. Instead, the team focused on tests that would help to probe and strengthen the product. 

Ultimately, the following series of unit tests were run against the code. 

![image](https://user-images.githubusercontent.com/74050529/117734765-0b9a6c80-b1ec-11eb-9788-3a0d7464f033.png)

The tests were implemented using Karma and Jasmine on the git staging branch, following the continuous integration and deployment principles of evaluating a functionality before it is released to the live branch, and making sure that a given story is delivered against a feature at a time. The tests were first conducted with core cases in mind, and then extended to test edge cases, for example years on the slider without any data points in the dataset, to try to find defects and provide a greater level of assurance.

## c. User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.

The user acceptance testing was designed to ensure that the product works according to the requirements set out at the start of the project; to make sure the product is geared towards end-users consistent with the user-centred design development process; and to consider whether the product can handle the tasks required of it in a real-world environment. This phase of testing also allows for the detection of any defects or bugs, as well as to highlight any potential alternative or exceptional flows in engaging with the product, where users may not interact with the website as expected.

As such, a final round of feedback sessions was undertaken near the conclusion of the project, once the features had been implemented, to permit for end-user interaction with the system prior to moving to production. The feedback sessions brought in participants who were new to the project, and did not take part in the design and evaluation phases in order to remove bias where, in contrast, long-standing participants and user group members already have exposure to and awareness of how the product works, and may potentially be emotionally invested in the project depending on their levels of involvement. The sessions featured an interviewer who observed user interaction with the product and took observational notes.

The testing followed the following framework in the evaluation of the functional requirements of the design. The approach took into account user requirements as a starting point, ie. needs from a user's perspective that the project seeks to meet or value that it brings to a user, which in turn informed more specific system requirements, or specifications for how the product would deliver these services. The requirements were gradually built on and refined over the course of the project throughout the evaluation process. Some new requirements were incorporated, for example, the requirement to include a tutorial to walk through the website functionality, and the requirement to add in audible/sound features was added in response to user group feedback. Other requirements were tweaked, for example, the emphasis of the landing page shifted from being playful as well as thought-provoking, to also requiring an explanatory dimension since it needed to be clearer what was being shown. 

Key operational constraints include limited time to implement the project, remote working conditions, and limited previous prior experience with MEAN stack development. The time limitations meant that the team took fewer risks in its approach which may have impacted on the product's innovation potential. In addition, the product evaluations did not include the target user group of adolescents and school-aged children, as a vulnerable group, given that no ethics approvals were sought, and as such may have constrained how well the product responds to the needs of this particular demographic.

The metrics for delivery of a feature include robustness (eg. events causing failure, data corruption in the event of failure), ease of use for newcomers to the product (average training time, number of help boxes per feature, time taken to perform a given task), speed (eg. user-event response times, screen load time for the globe), and user satisfaction (net promoter score, whether the product met expectations).

![image](https://user-images.githubusercontent.com/74050529/117792697-6f9c4f80-b243-11eb-8938-49be09955be5.png)


**Findings**
UAT Session 11 May

**Implications**
