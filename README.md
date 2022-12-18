# Youtube Remake 

##
This is a project from my introduction to software engineering class where in the lab we were to remake a website, I chose youtube and this is the code for it. The main goal of this lab was to imitate the websites look and feel, functionality was somewhat of a afterthought. Throughout the first half of the semester we were taught the basics of the frontend of the website and were tasked with remaking certain parts of our chosen website (so some parts don't have functionality). The second part of the lab dealt with backend where we used firebases realtime databse, hosting, and authentication features. The realtime database was used to store info for the video cards displayed on the home page, which you can also add with the add video button. Which takes you to the page with the forms where you can input the info for the video card (for pictures use links from internet). We used hosting to deploy the website which you can visit at the link below. The authintication is used for users to log in.

link for deployed website: https://app-3a7ef.web.app/

##Screenshots

Hoome Page:

![CS-230 lab home page](https://user-images.githubusercontent.com/111936234/208282950-0ff8deb2-d033-442f-afe4-715e7294c09d.png)

Explore Page:

![CS-230 lab explore page](https://user-images.githubusercontent.com/111936234/208282954-8dd667df-7681-4168-8c6b-08e7dcd65283.png)

Music Page:

![CS-230 lab music page](https://user-images.githubusercontent.com/111936234/208282957-c1eb6ab0-6da4-4ef7-9482-915023004a4c.png)

## Backend

This application uses Google's Firebase service for three main purposes. The first is hosting the live version of the website which allows our webapp to exist on more than a development server. Along with this we use firebase to authenticate and store data for each individual user. Users each have their own task list entries, journal entries, event entries, and timer settings. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

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
