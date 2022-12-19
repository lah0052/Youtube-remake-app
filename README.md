# Youtube Remake 

Link for deployed website: https://app-3a7ef.web.app/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Overview
This is a project from my introduction to software engineering lab. We were tasked with remakeing a website. The website I remade is Youtube. The main goal of this lab was to imitate the websites look and feel, functionality was somewhat of a afterthought. 

## Frontend
Throughout the first half of the semester we were taught the basics of the frontend of the website and were tasked with remaking certain parts of our chosen website (so some parts don't have functionality). 

## Backend
The second half of the semester  we were introduced to Firebase. We used firebases realtime databse, hosting, and authentication features.

## Features
  - SignIn/LogIn 
    - SignIn/LogIn is enabled by firebases authentication feature, this is accessed via the /auth page linked to the sign in buttons located on the sidenav bar, top nav bar on music page, and the top navbar on the home page. This was coded in html and typescript. HTML set up the forms and called the functions made in the typescript.
  - Add video
    - Videos can be added via the add video button located at the bottom of the screen. This is set up using firebases realtime database and typescript. They are added to the database with forms and once the sumit video button is hit the .push function sends the entered info to the database, which also displays the new video on the home page.
  - Routing
    - most buttons will take take users to the corresponding pages
  - Aesthetics 
    - looks pretty good for the first thing I've ever done in html, css, and typscript. The preportions aren't right on some screens but that was out of the scope of the lab and Angular is old.
  


## Screenshots

#### Home Page:

![CS-230 lab home page](https://user-images.githubusercontent.com/111936234/208282950-0ff8deb2-d033-442f-afe4-715e7294c09d.png)

#### Explore Page:

![CS-230 lab explore page](https://user-images.githubusercontent.com/111936234/208282954-8dd667df-7681-4168-8c6b-08e7dcd65283.png)

#### Music Page:

![CS-230 lab music page](https://user-images.githubusercontent.com/111936234/208282957-c1eb6ab0-6da4-4ef7-9482-915023004a4c.png)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
