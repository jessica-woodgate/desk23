<div align = center>
  
  [<-- Back](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#b-unit-testing--functional-testing)
  </div>


## Test Plan – Globe interaction

> As a user, I want to be able to interact with the data represented on the globe so that I can easily compare, and improve my understanding of, literacy rates around the world.

**1.	Prerequisites**
1.	Ensure the browser being tested is clearly defined
2.	Ensure you know which environment you are testing against

**2.	Setup and Teardown**
1. Run docker-compose up in the project directory
2. Open the browser on localhost port 3000
3. Run docker-compose down

**3. Tests**

A.	Test user can click on specific countries to find more information

1. Ensure that no specific country is selected to start with
2. Hover over a country to see the name and an outline of the country borders appear
3. Click on the country
4. Ensure that a pop-up box appears containing the literacy rates for the country
5. Repeat step 2, this time with a country selected to ensure that hovering over a country reveals the name and country borders
6.  Click on another country and ensure that the pop-up box for the previous country selected disappears, and that a new pop-up box appears showing the literacy rates for the current country selected
7. Iterate over the steps above to test core and edge cases (edge cases can include countries with no data)
8. Ensure the test cases are representative in terms of regional distribution, country area, income level, and population size 
9. Ensure the feature works in all supported browsers

B.	Test user can spin the globe

1.	Click and drag the globe
2.	Ensure the globe moves in tandem with this event
3.  Release to land on a particular view
4. Ensure click, drag and release works in all directions (up, down, left, right, diagonals)
5. Ensure the feature works in all supported browsers

C.	Test user can change the date dynamically using the timeline feature

1. Ensure the slider is set by default to the correct position (present day)
2. Click and drag the slider backwards
3. Ensure the year shown on the slider is visibly decreasing with the movement
4. Let go of the slider
5. Ensure the visual representation of the data on the globe has changed
6. Ensure the data corresponds to the year shown
7. Iterate over these steps to test a representative set of core and edge cases (edge cases including particularly data-poor or data-rich years)
8. Ensure that the slider can equally well be dragged in the opposite direction (forwards) with the same functionality
9. Ensure the feature works in all supported browsers

<div align = center>
  
  [<-- Back](https://github.com/jess-mw/desk23/tree/main/Documentation/5.%20Evaluation#b-unit-testing--functional-testing)
  </div>

