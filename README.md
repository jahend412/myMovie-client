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

### GET /movies: 
Retrieves a list of all movies in the database.
![image](img/get%20all%20movies.png)
### GET /movies/[Title]: 
Retrieves detailed information about a specific movie based on its title.
![image](img/get%20movie%20by%20title.png)

### GET /movies/genres/[Name]
 Retrieves detailed information about a genre based on its name.
![image](img/get%20movie%20by%20genre.png)
### GET /movies/directors/[Name]: 
Retrieves detailed information about a director based on their name.
![image](img/get%20director%20by%20name.png)
### GET /users: 
Retrieves a list of all users.
![image](img/get%20user.png)
### GET /users/[Username]: 
Retrieves information about a specific user based on their username.
![image](img/get%20user%20by%20name.png)
### POST /users: 
Creates a new user account.
![image](img/post%20new%20user.png)

### PUT /users/[Username]: 
Updates user information based on their username.
![image](img/update%20user.png)

### POST /users/[Username]/Movies/[MovieID]: 
Adds a movie to a user's list of favorites.
![image](img/add%20favorite%20movie.png)
### DELETE /users/[Username]/Movies/[MovieID]:
Removes a movie from a user's list of favorites.
![image](img/Delete%20Favorite.png)
### DELETE /users/[Username]: 
Deletes a user account based on their username.
![image](img/Delete%20User.png)

#Client-side

The user interface (UI) of the myMovie application is developed using the React library, which provides a robust framework for building dynamic and responsive interfaces. The client-side views are designed to efficiently handle data requested by users through the REST API endpoints defined in the server-side component.

### Technical Details

The client-side implementation of the myMovie application includes the following technical details:

* Single-Page Application: The application follows a single-page architecture, where the content is dynamically loaded and updated on the same page without the need for full page reloads.

* State Routing: State routing is implemented to facilitate smooth navigation between different views and allow users to share specific URLs for easy access to desired content.

* Filtering and Sorting: The UI provides users with options to filter and sort movies based on various criteria, enhancing their browsing experience.

* Parcel and Create-React-App: Initially, the application was built using Parcel as the bundling tool. However, it has been migrated to create-react-app for improved configuration and optimization.

* React and ES2015+: The client-side codebase is primarily written using the React library, which enables the development of reusable components. The code follows the ES2015+ JavaScript syntax standards to leverage modern language features and ensure maintainability.

* React Redux: The application utilizes React Redux, a predictable state container, to manage the application's global state and facilitate seamless data flow between components.

* Bootstrap: Bootstrap, a widely used UI library, is employed for styling and ensuring a responsive design across different screen sizes and devices.

* Class and Function Components: The codebase consists of a mix of class components and function components, allowing for flexible and efficient development based on specific requirements.

### Essential Views and Features

The client-side component of the myMovie application includes the following essential views and features:

#### Main view: 
![image](img/Main%20View.png)
* Presents users with a comprehensive list of all movies available in the application.

* Each movie item is accompanied by relevant details such as an image, title, and 
description.

* Offers functionality for sorting and filtering movies based on specific criteria.

* Allows users to select a movie to view more detailed information.

* Provides convenient links and buttons for accessing profile data and logging out.

#### Movie view: 
![image](img/Movie%20View.png)

* Displays in-depth information about a specific movie, including its description, genre, director, and an accompanying image.

* Empowers users to add the movie to their list of favorite movies, enhancing personalization and user experience.
#### Login view: 
![image](img/Login%20View.png)

* Enables users to securely log in to their accounts using their registered username and password.

* Provides a link to the registration view for new users to create an account.

#### Registration view: 
![image](img/Registration%20View.png)

* Facilitates the registration process for new users by collecting essential information such as username, password, email, and birthday.
#### Genre view: 
![image](img/Genre%20View.png)

* Displays information about a specific genre, including its name, description, and example movies.
#### Director view: 
![image](img/Director%20View.png)

* Provides information about a specific director, including their name, biography, birth year, and death year if applicable. 

#### Profile view:
![image](img/Profile%20View.png) 

* Enables users to access and review their profile data, including their username, email, and birthday.
* Displays a list of favorite movies associated with the user's account.
* Provides the option to remove movies from the list of favorites.
* Offers convenient buttons for updating user information or deleting the account altogether.

#### Update Profile
* Allows users to modify their user information, ensuring their profile remains up-to-date and accurate.
