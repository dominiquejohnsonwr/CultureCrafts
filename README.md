# CultureCrafts

- [Overview](#overview)
- [MVP](#mvp)
- [Goals](#goals)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Client (Front End)](#client-front-end)
- [Wireframes](#wireframes)
- [Component Tree](#component-tree)
- [Component Architecture](#component-architecture)
- [Time Estimates](#time-estimates)
- [Server (Back End)](#server-back-end)
- [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

## Overview

\*\*Culture-Crafts\*\* is an online e-commerce website where you can shop for customized and personalized crafty creations right from the comfort of wherever you are.

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

This project will have a Ruby on Rails back end server with RESTful JSON endpoints.
Project will have both 1:m and m:m associations between user/products/cart/order with full CRUD functionality on backend with users/product reviews and orders.
<br>
Front End will be built with React. Site will have a landing page that displays a list of all products with image and price. Each product on the page will be a clickable link that takes you to a details page for that product. Users will also have full CRUD access regarding creating and updating their profile as well.

### Goals

- _To have a fully functioning website that showcases a wide range of products available._
- _Incorporate user authentication in order for user to be able to add any items to shopping cart._
- _Style the website using CSS and make it responsive to different screen sizes._
- _Build a foundation for users being able to create orders then submit them via email for processing._

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|   Library    | Description                                                                |
| :----------: | :------------------------------------------------------------------------- |
|    React     | _Used for Front End user interface_                                        |
| React Router | _Will allow me to build website that user can navigate without refreshing_ |
|    Rails     | _Framework I will use for my Back End functions and routes_                |
|    Axios     | _I will make my API calls using axios_                                     |

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample]<img width="724" alt="Screen Shot 2021-05-07 at 10 24 40 AM" src="https://user-images.githubusercontent.com/81428925/117486561-a65e2700-af1e-11eb-9b69-58fcbc867aa0.png">

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like.

```structure

src
|__ App.js
|__ components/
      |__ Navbar.jsx
      |__ Navbar.css
      |__ Login.jsx
      |__ Login.css
      |__ SignUp.jsx
      |__ SignUp.css
      |__ App.js
      |__ App.css
      |__ UserProfile.jsx
      |__ UserProfile.css
      |__ EditProfile.jsx
      |__ EditProfile.css
      |__ ProductsContainer.jsx
      |__ ProductsContainer.css
      |__ ProductDetail.jsx
      |__ ProductDetail.css
      |__ CreateProduct.jsx
      |__ CreateProduct.css
      |__ EditProduct.jsx
      |__ EditProduct.css
|__ services/
        |__ api_config.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task              | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------- | :------: | :------------: | :-----------: | :---------: |
| Prep/Markdown     |    H     |     6 hrs      |     6 hrs     |     TBD     |
| Navbar            |    M     |     3 hrs      |      hrs      |     TBD     |
| Create Signup     |    H     |     3 hrs      |      hrs      |     TBD     |
| Create Login      |    H     |     3 hrs      |      hrs      |     TBD     |
| App.js            |    H     |     4 hrs      |      hrs      |     TBD     |
| UserProfile       |    H     |     4 hrs      |      hrs      |     TBD     |
| EditProfile       |    H     |     3 hrs      |      hrs      |     TBD     |
| ProductsContainer |    H     |     4 hrs      |      hrs      |     TBD     |
| ProductsDetail    |    H     |     4 hrs      |      hrs      |     TBD     |
| CreateProduct     |    H     |     3 hrs      |      hrs      |     TBD     |
| EditProduct       |    H     |     3 hrs      |      hrs      |     TBD     |
| Styling All       |    H     |     7 hrs      |      hrs      |     TBD     |
| TOTAL             |          |     47 hrs     |      hrs      |     TBD     |

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](<img width="724" alt="Screen Shot 2021-05-07 at 11 03 43 AM" src="https://user-images.githubusercontent.com/81428925/117490659-f095d700-af23-11eb-8afb-c75e1d999aae.png">)

---

## Post-MVP

- _To build functionality that allows users to make purchases from the website._
- _To incorporate an order history component that keeps track of user purchases and sales._
- _Implement a search feature that allows users to search by user and/or by product._

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
