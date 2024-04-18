# Readify

## Introduction

Readifi is a web applicaiton which focuses on implementing speed-reading techniques. People can post their text documents and use the typography features to customize their reading experience according to their preferences and learning style. The application offers 5 speed-reading techniques to chooses from:

- Stopping regression technique
- Pacing technique
- Chunking words technique
- Peripheral vision technique
- Bionic reading method

## Technologies

Backend:

- Node.js
- Express.js
- MongoDB
- Google authentication

Frontend:

- React
- TypeScript
- Tailwindcss

## Installation

1.  Clone the repository: https://github.com/PDochev/Readify.git

2.  Frontend (Vite)

    - Navigate to the frontend directory:

    **cd Readify/frontend**

    - Install dependencies:

    **npm install**

    - Start the Vite development server:

    **npm run dev**

3.  Backend (Node.js)

    - Navigate to the backend directory:

    **cd Readify/backend**

    - Install dependencies:

    **npm install**

    - Start the Node.js server:

    **npm start**
    **npm dev - if you have nodemon installed**

## Usage

The application is accessible fully on all web browsers, apart from Safari, which doesn’t allow for the user to be signed in. The way the current application works is that it stores the user session as a cookie. However, because the application is hosted on two different domains, it’s treating the session cookie as a third-party cookie, also known as a tracking cookie. By default, Safari limits third-party cookies for security reasons, preventing sites from tracking their users and collecting their data and location.

The way to make the application work on Safari as intended is to manually disable the cross-site tracking security option from Safari’s browser settings. However, this is not a good solution because having to ask your users to manually do that is not a good user experience. The same issue happens when you try to access the application from your mobile phone. Again, you have to manually go to your phone settings and disable the cross-site tracking option.
