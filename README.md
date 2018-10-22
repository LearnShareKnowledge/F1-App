# `The F1 web app` — 

The F1-web-App is a responsive web application that shows a list of F1 world champions for season 2005 till 2015 .
Upon click of each season user is navigated to a list of winners of all the races in that season .
In the list of winners , the row of driver is highlighted when the driver has been world champion in same season .
This application is a single page application and has been developed using angularjs framework , HTML5 and CSS. It has been built on angular seed application as the seed application helps us quickly bootstrap our angular webapp project and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development .


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the `F1-web-app` repository. You can get git from [<a href='https://git-scm.com/'>Here</a>][git].

We also use a number of Node.js tools to initialize and test `F1-web-app`. You must have Node.js
and its package manager (npm) installed. You can get them from [<a href='https://nodejs.org/en/'>Here</a>][node].

### Clone `F1-web-app`

Clone the `F1-web-app` repository using git:

```
git clone https://github.com/singh26harshita/F1-web-app.git
cd F1-web-app
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

With use of seed application we have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files


### Run the Application

This app has preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at ['http://localhost:8000'] 

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> application stylesheet
  landingModule/          --> the landing module template and logic
    landing.html           --> the partial template for landing page
    landing.js              --> the controller logic for landing page
    landing_test.js         --> tests of the landing page controller
  listModule/                --> the list view template and logic
    list.html            --> the partial template for list view
    list.js              --> the controller logic for list view
    list_test.js         --> tests of the controller of list view
  app.js                --> main application module also contains routing config
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma


## Running Unit Tests

This app comes preconfigured with unit tests. These are written in Jasmine,
which we run with the Karma test runner. Karma configuration file is provided to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `_test.js` suffix (e.g.
  `list_test.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
