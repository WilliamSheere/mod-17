# mod-17
Social Network API
Walkthrough Video: https://drive.google.com/file/d/1P_jKy7dQO_GuvxwsKGHJo44ML_-WZysI/view
Description:
This project is an API for a social network web application. The API allows users to share their thoughts, react to friends' thoughts, and manage their friend lists. Built using Express.js for routing and MongoDB with Mongoose as the Object Data Modeling (ODM) library, this API provides endpoints for creating, reading, updating, and deleting user data and interactions.

Features:
User registration and authentication
Create, read, update, and delete thoughts
React to thoughts from friends
Create and manage a friend list
Timestamp formatting for thoughts and reactions

Technologies Used:
Node.js: JavaScript runtime for building server-side applications
Express.js: Web application framework for Node.js
MongoDB: NoSQL database for storing data
Mongoose: ODM library for MongoDB and Node.js
Optional: JavaScript date library (e.g., moment.js) or native JavaScript Date object for managing timestamps

Getting Started:

Prerequisites
Node.js (v12 or higher)
MongoDB (locally or use a cloud service such as MongoDB Atlas)
npm (Node Package Manager)
The server will start on http://localhost:3000 (or another port configured in your app).
Server Configuration
Ensure that your server is correctly set up to start on http://localhost:3000 (or a custom configured port) and that you have a mechanism for handling the above endpoints, likely with an Express.js-like framework.

Implementation Considerations:
For data storage, you might want to use MongoDB or another NoSQL/SQL database that suits your needs.
Implement middleware for validation, authentication, and error handling.
Consider using tools like Swagger or Postman for API testing.
If building a full-stack application, the front end can consume these APIs to manage user data and thoughts effectively.
This structure supports a typical social platform where users can interact through thoughts and friendships while also allowing for personalized feedback through reactions

