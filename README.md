# ENVY

#### _By David Lewis_

## Description
This web application contains various tools to reduce your environmental impact while also displaying trending and impactful sustainability stories across the globe. The goal for the application is to educate the masses about diverse actions different communities are taking to address overconsumption of natural resources and to also provide tools for the user to take action in their own lives. This app will be a toolkit for individuals and communities to conserve resources and save money.

### Features
* Display of sustainability articles
* New articles can be added to the database and will be displayed on the main page
* There is a toolkit that contains tools/tips for individuals to reduce their environmental impact
* Users can add tips/tools to the database
* There is an environmental score tracker that is linked to a score card

## Specifications
* Will add more specs

## Setup/Installation Requirements

#### You can view the application live by visiting:
_https://envy-angular.firebaseapp.com/_

#### Or to deploy on local machine:
Clone to your Desktop


`$ git clone https://github.com/dlewiski/doctor-doctor`

In terminal, navigate to the root directory of the project

`$ npm install`

##### Setup Database (only necessary if deploying locally)
* Create the file to store the api key from the database, this file will be located in the app folder, name it api-keys.ts
* Sign in or create a new firebase account (link to firebase)
* Click create a new web app, a box will appear with all the information needed to connect this app to the database you just created
* Copy all that information and add to the app/api-keys.ts file in the following format: (show screenshot or format)
* Then add all the dependencies, imports, etc (will copy these instructions at end of project)
* Change the rules in the firebase console
* You will see two options, Cloud Firestore Beta and Realtime Database, click get started for Realtime Database
* Then select start in test mode, then click enable
* You can double check this by going to the rules tab at the top of your database view and check to see that read and write are both set to true

### Site inspiration and template

http://www.greenmatters.com/

## Support and Contact Details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Angular CLI
* Firebase
* Node JS
* Linter

### License

*MIT License*

Copyright (c) 2018 **_David Lewis_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
