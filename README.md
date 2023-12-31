# Game Price vs Game Deal Dashboard

## ATTENTION
This repository does not house the node_modules folder, if cloned be sure to follow Twilios instructions to get set up with Node.JS
[Twilio Docs](https://www.twilio.com/docs/usage/tutorials/how-to-set-up-your-node-js-and-express-development-environment)


## Introduction

The Game Price vs Game Deal Dashboard is a web application built using NODE.JS, EJS (Embedded JavaScript), and CSS. This dashboard allows users to compare the original prices of games with their current deal prices, helping gamers find the best deals available for their favorite games.

## Features

- **Real-time Data:** The dashboard fetches real-time data from a NoSQL data source hosted on MongoDB

- **Price Comparison:** The dashboard displays a side-by-side comparison of the original price of a game and its current deal price, highlighting the percentage of the discount.

- **Responsive Design:** The dashboard is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

- **Sorting and Filtering:** Users can sort and filter the list of games based on different criteria such as price, discount percentage, etc.
  

## Installation and Setup

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/macObl/Game_Dashboard.git
   cd game-price-dashboard
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the Application:**
   ```sh
   node app.js
   ```

4. **Access the Dashboard:**
   Open your web browser and navigate to `http://localhost:8000` to access the Game Price vs Game Deal Dashboard.


## Future Enhancements

- **User Accounts:** Implement user accounts to save favorite games and receive personalized deal notifications.

- **Wishlist:** Allow users to create and manage a wishlist of games they want to track for deals.

- **Multiple Platforms:** Extend the dashboard to support multiple gaming platforms and stores.
