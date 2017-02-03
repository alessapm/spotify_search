![Left Shark](http://i.giphy.com/aUs3EKOdlovgQ.gif)

# Spotify List

This weekend we're going to build a Spotify Search website. This website should allow users to search for Artists, Albums, and Songs. We'll be making use of [Spotify's Web API](https://developer.spotify.com/web-api/endpoint-reference/) to implement our website's search functionality. The Spotify Web API allows for many different types of queries, but we're going to focus on just Artist, Album, and Songs.

## Learning Objectives

* Sending multiple/nested AJAX requests
* Reading API documentation
* Handlebars.js templating
* Query Parameters
* Debounce from Underscore.js (Bonus)

## Resources

* [Spotify API](https://developer.spotify.com/web-api/endpoint-reference/)
* [jQuery AJAX](http://api.jquery.com/jquery.ajax/)
* [Handlebars.js](http://handlebarsjs.com/)

## Set Up

No starter code has been provided. Create your own HTML, CSS, and JavaScript files, link them, and link **jQuery** and **Handlebars.js** (and Underscore.js if you're using debounce). **Spend some time reading Spotify's API docs.** Figure out how to use the API to search (keyword: search) by Artist name first. This will be great practice for reading API docs, something you will find yourself doing a lot as a web developer.

## Completion

Create a website that allows users to search for music using the Spotify API and fulfills the Features list outlined below.

## Submission

Homework is due Sunday by **11pm**. Follow the [Homework Guide](https://git.generalassemb.ly/nyc-wdi-fisher/student-resources/blob/master/homework-guide.md) for instructions.

## Assignment

#### Features

* User should be able to select Artist, Album, or Song from a drop down menu for search
* User should be able to see a list of results from their search
* When a user searches by Artist, the user should be able to see detailed information of each matching artist
* When a user searches by Artist, the user should be able to click on a button that shows a few of their albums - You decide how to present this information (i.e. modal, side-column, different page, etc)
* When a user searches by Album, the user should be able to click on the Artist's name to reveal a modal with the Artist's detailed information
* Use Handlebars.js to template the Spotify API data
* Design is important! Please spend some time thinking about how to lay out all of this information. Spend time making the website look great! This is an opportunity to practice your CSS skills!

#### Bonus

* Implement Debounce feature for the search bar
* For song results, let the user preview the song - Look into the `preview_url` property returned by Spotify API and read up on `<audio>` and `<source>` html tags

**Go Pats!**
