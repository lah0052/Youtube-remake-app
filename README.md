# Youtube Remake 

Link for deployed website: https://app-3a7ef.web.app/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Overview
This is a project from my introduction to software engineering lab. We were tasked with remaking a website. The website I remade is Youtube. The main goal of this lab was to imitate the websites look and feel, functionality was somewhat of a afterthought. 

## Frontend
Throughout the first half of the semester, we were taught the basics of the frontend of the website and were tasked with remaking certain parts of our chosen website (so some parts don't have functionality). 

## Backend
The second half of the semester  we were introduced to Firebase. We used firebases realtime databse, hosting, and authentication features.

## Features
  - SignIn/LogIn 
    - SignIn/LogIn is enabled by firebases authentication feature, this is accessed via the /auth page linked to the sign in buttons located on the side navbar, top navbar on music page, and the top navbar on the home page. This was coded in html and typescript. HTML sets up the forms and called the functions made in the typescript.
  - Add video
    - Videos can be added via the add video button located at the bottom of the screen. This is set up using firebases realtime database and typescript. They are added to the database with forms and once the submit video button is hit, the .push function sends the entered info to the database, which also displays the new video on the home page. 
  - Routing
    - Most buttons will take take users to the corresponding pages.
  - Aesthetics 
    - The look and feel of the web app is similar to Youtube, especially because it was my  first time using HTML, CSS, and Typescript.
  


## Screenshots

#### Home Page:

![CS-230 lab home page](https://user-images.githubusercontent.com/111936234/208282950-0ff8deb2-d033-442f-afe4-715e7294c09d.png)

#### Explore Page:

![CS-230 lab explore page](https://user-images.githubusercontent.com/111936234/208282954-8dd667df-7681-4168-8c6b-08e7dcd65283.png)

#### Music Page:

![CS-230 lab music page](https://user-images.githubusercontent.com/111936234/208282957-c1eb6ab0-6da4-4ef7-9482-915023004a4c.png)

#### Login Process:
Step 1: Click the sign in button on top navbar. This takes users to the login page shown in the next picture
![image](https://user-images.githubusercontent.com/111936234/208514195-f0e1464a-cfe1-4093-a85f-0d965bb87ed8.png)
Step 2: The user will enter their email and password then click sign up. 
![image](https://user-images.githubusercontent.com/111936234/208514379-cf3f93cf-7b1d-4dcf-b758-32174808b5d2.png)
Step 3: Once signed users should re-enter info then click login which will log them in and take them back to the home page
![image](https://user-images.githubusercontent.com/111936234/208514540-20672b21-4843-48e5-b43c-ed6bdc4722b6.png)
The created user shown in Firebase
![image](https://user-images.githubusercontent.com/111936234/208514757-c1bae860-d9ee-43fc-9506-2b126c254e57.png)


#### Add Video Process:
Step 1: Click the add video button, takes users to the add video page.
![image](https://user-images.githubusercontent.com/111936234/208513275-158ab536-479f-4edd-bdd2-c3134752d556.png)
Step 2: The user will fill out the forms and when done click the "Add Video" button; which adds the info to the firebase, displays the new video, and takes you back to the home page. For thumbnail and profile pic, copy and paste the image link into the form.
![image](https://user-images.githubusercontent.com/111936234/208513691-d2abcaca-920f-4b7d-b808-17669cd3b4a3.png)
Added video displayed on homepage.
![image](https://user-images.githubusercontent.com/111936234/208513880-54a28c92-8297-4ef0-ae09-69ddd5f88ad2.png)




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
