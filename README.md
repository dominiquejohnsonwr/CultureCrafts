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

#### CultureCrafts is an online e-commerce website where you can showcase your own and/or shop for others customized and personalized crafty creations right from the comfort of wherever you are.

## MVP

Create an application where users can showcase their custom crafts to the community and buy/sell with other members of the community. MVP will be having a functional site that allows users to manage their own products offering and also be able to view other users products from the main page. Users can add other users products as favorites that will be housed in a separate component.

### Goals

- _To have a fully functioning website that showcases a wide range of products available._
- _Incorporate user authentication in order for user to be able to add any items to shopping cart._
- _Style the website using CSS and make it responsive to different screen sizes._
- _Build a foundation for users being able to view products and inquire about custom orders via email._
- _This project will have a Ruby on Rails back end server with RESTful JSON endpoints._
- _Project will have both 1:m and m:m associations between user/products/cart/order with full CRUD functionality on backend with users/product reviews and create and delete with favorites._
- _Front End will be built with React. Site will have a landing page that displays a list of all products with image and price._
- _Each product on the page will be a clickable link that takes you to a details page for that product._
- _Users will also have full CRUD access regarding creating and updating their profile as well._
- _Users can review products that will be displayed on the details page._

### Libraries and Dependencies

|   Library    | Description                                                                |
| :----------: | :------------------------------------------------------------------------- |
|    React     | _Used for Front End user interface_                                        |
| React Router | _Will allow me to build website that user can navigate without refreshing_ |
|    Rails     | _Framework I will use for my Back End functions and routes_                |
|    Axios     | _I will make my API calls using axios_                                     |

### Client (Front End)

#### Wireframes

Desktop view:
<img width="1509" alt="Screen Shot 2021-05-07 at 1 50 51 PM" src="https://user-images.githubusercontent.com/81428925/117506958-488c0800-af3b-11eb-9072-69adea7ed855.png">

Mobile View:
<img width="1063" alt="Screen Shot 2021-05-07 at 2 04 58 PM" src="https://user-images.githubusercontent.com/81428925/117508321-3c08af00-af3d-11eb-9dbe-c528cdc92900.png">

#### Component Tree

<img width="782" alt="Screen Shot 2021-05-07 at 11 38 12 AM" src="https://user-images.githubusercontent.com/81428925/117494112-be3aa880-af28-11eb-99d1-5110604d97f1.png">

#### Component Architecture

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
      |__ UserFavorites.jsx
      |__ UserFavorites.css
      |__ MyProducts.jsx
      |__ MyProducts.css
|__ services/
        |__ api_config.js

```

#### Time Estimates

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
| UserFavorites     |    H     |     3 hrs      |      hrs      |     TBD     |
| MyProducts        |    H     |     2 hrs      |      hrs      |     TBD     |
| Styling All       |    H     |     7 hrs      |      hrs      |     TBD     |
| TOTAL             |          |     52 hrs     |      hrs      |     TBD     |

### Server (Back End)

#### ERD Model

<img width="771" alt="Screen Shot 2021-05-07 at 12 48 28 PM" src="https://user-images.githubusercontent.com/81428925/117501174-8cc6da80-af32-11eb-80e4-b16072557ae1.png">

---

## Post-MVP

- _To build functionality that allows users to make purchases from the website._
- _To incorporate an order history component that keeps track of user purchases and sales._
- _Implement a search feature that allows users to search by user and/or by product._
- _Implement a "similar items" feature from the product details page._

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
