# Project Overview

This is the Project #5 which is part of the Google FrontEnd Developer Program from Udacity.

from Front-EndIn this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite!


## Description

This web-based application that use the Google Feed Reader API for displaing RSS feeds from 4 different websites. All the feeds are stored in an array and has its own url and name. In this project is used jQuery to manipulate with DOM and writing the tests.

## Goal

Write the tests in Jasmine for given web application.

## Objectives

Practice and learn Jasmine for testing application, analyzing code writen in HTML, CSS, Javascript, DOM manipulation.

## Resources

Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
JavaScript Testing [course](https://www.udacity.com/course/ud549)
Starter code: [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader)
[Jasmine](http://jasmine.github.io/)

## How to run app

Clone the repository with $git clone and the address
Open index.html in your browser. It will display the feeds with the Jasmine test suites on the button of the page.

## Task to do

a) Write a new test suite named `"The menu"`.
b) Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
c) Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
d) Write a test suite named `"Initial Entries"`.
e) Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
f) Write a test suite named `"New Feed Selection"`.
g) Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
h) No test should be dependent on the results of another.
i) Callbacks should be used to ensure that feeds are loaded before they are tested.
j) Implement error handling for undefined variables and out-of-bound array access.
k) When complete - all of your tests should pass.
l) Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
