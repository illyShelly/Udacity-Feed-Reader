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

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. When click again should hide.
6. Write a test suite named `"Initial Entries"`.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.

9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
10. All of tests should pass.
11. Write a README file
