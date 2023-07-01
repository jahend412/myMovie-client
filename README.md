![image](/img/myMovie_Web_Application.png)

![Static Badge](https://img.shields.io/badge/Learn-JavaScript-green)
![Static Badge](https://img.shields.io/badge/Learn-React-yellow)
![Static Badge](https://img.shields.io/badge/MERN-FullStack%20Development-blue)


#Overview

This project is a full-stack JavaScript application developed as part of CareerFoundry's Full-Stack Web Development Course. It demonstrates mastery of full-stack JavaScript development using the MERN stack.

This README provides technical and content-related details about both the server-side and client-side components of the myMovie application. The server-side consists of a REST API, business logic, and a database architecture built using JavaScript, Node.js, Express, and MongoDB.

The myMovie REST API is hosted on Heroku and provides authenticated users with access to movie, director, and genre information. The API supports common HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on the database.

#Server-side

##Features
The server-side component of the myMovie application includes the following features:

* Allows users to retrieve a list of all movies in the database
* Provides detailed information about a specific movie by its title
* Offers detailed information about a genre based on its name
* Provides detailed information about a director based on their name
* Enables new users to create user accounts
* Allows existing users to update their user information or delete their account
* Allows users to add or remove movies from their list of favorites

##Dependencies

The server-side component of myMovie relies on the following dependencies:

* bcrypt
* body-parser
* cors
* express
* express-validator
* jsonwebtoken
* mongoose
* morgan
* passport
* passport-jwt
* passport-local
* uuid

##Endpoints
The myMovie API provides the following endpoints:

#### Get a list of all movies
* GET /movies: Retrieves a list of all movies in the database.
![image](img/get%20all%20movies.png)
* GET /movies/[Title]: Retrieves detailed information about a specific movie based on its title.
![image](img/get%20movie%20by%20title.png)

* GET /movies/genres/[Name]: Retrieves detailed information about a genre based on its name.
![image](img/get%20movie%20by%20genre.png)
* GET /movies/directors/[Name]: Retrieves detailed information about a director based on their name.
![image](img/get%20director%20by%20name.png)
* GET /users: Retrieves a list of all users.
![image](img/get%20user.png)
* GET /users/[Username]: Retrieves information about a specific user based on their username.
![image](img/get%20user%20by%20name.png)
* POST /users: Creates a new user account.
![image](img/post%20new%20user.png)

* PUT /users/[Username]: Updates user information based on their username.
![image](img/update%20user.png)

* POST /users/[Username]/Movies/[MovieID]: Adds a movie to a user's list of favorites.
* DELETE /users/[Username]/Movies/[MovieID]: Removes a movie from a user's list of favorites.
* DELETE /users/[Username]: Deletes a user account based on their username.

#Client-side

The client-side of the myMovie application is built using React, a JavaScript library for building user interfaces. It features a single-page application architecture with state routing for navigation and URL sharing.

The main views and features of the myMovie application include:

* Main view: Displays a list of all movies, with options for sorting and filtering. Users can select a movie to view more details and have access to profile data and logout functionality.
* Movie view: Provides detailed information about a specific movie, including description, genre, director, and an image. Users can add the movie to their list of favorites.
* Login view: Allows users to log in using their username and password, with a link to the registration view for new users.
* Registration view: Enables new users to create an account by providing their username, password, email, and birthday.
* Genre view: Displays information about a specific genre, including its name, description, and example movies.
* Director view: Shows information about a specific director, including their name, biography, birth year, and death year if applicable. It also displays example movies associated with the director.
* Profile view: Allows users to view their profile.