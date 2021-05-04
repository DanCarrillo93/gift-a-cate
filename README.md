# Gift-A-Cate

## ![badge](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue&style=plastic)

## Table of Contents

- [Description](#Description)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Soft Demo](#Soft-Demo)
- [Usage](#Usage)
- [Credits](#Credits)
- [Technology](#Technology)

## Description

A new and improved social approach to the mundance concept of a registry with many potential stores that you can add.

A birthday party you can’t make, the wedding that happens to be on a day you can’t get off, a long distant relationship and in many instances, Gift giving has never been an easy task; make the event or not, it all comes down to showing up and listening and a lot of people even think that they are bad at giving gifts as well. According to Marketwatch.com, “Unwanted merchandise returned to U.S. retailers during the 2015 holiday season 'excluding fraud cases' totaled $60.84 billion. This sum of course leaves out the many unwanted gifts that are regifted, ignored, sold, donated or thrown away.” Never getting a gift you want, and putting on a fake smile to please your loved ones, why is it so hard to get a gift for someone we love.

We solve that problem with our innovation, Gift-A-Cate. This would be an app that would allow users to create a “wishlist” allowing for friends to connect and get gifts for each other. With features like comments, posts, and a friends list, we are able to create a network of people giving gifts to each other no matter the distance. So how much do people spend on gifts? Well, Marketwatch predicts that Americans are spending an estimated $678.75 billion a year on presents. With so much spending on gift giving, Gift-A-Cate will be able to tap into that market creating a richer feeling of connection in relationships no matter the distance.

## Acceptance Criteria

GIVEN that a user visits the homepage
WHEN the user is on the homepage
THEN show the title, login/logout , Dashboard, and Home
WHEN the user clicks Login
THEN the user will be redirected to the log in page
WHEN the user does not have a log in
THEN the user has an option to create an account
WHEN a sign up is toggled
THEN the user is prompted to add their email, username, password and address
WHEN the user logs in with a previous login or a new login
THEN the user is redirected to the dashboard

GIVEN that the user has a login
WHEN the user visits the Dashboard
THEN the user can see their wishlist, an option to add to the wishlist, a friends list and an option to add friends
WHEN the user has a wishlist item
THEN they can view the link, see an icon, see a description, and can see if it was purchased already or available
WHEN the user views their friend list
THEN a list of friends are available
WHEN the user clicks on the friends
THEN they are taken to their friends dashboard

GIVEN that I am in my friend’s dsahboard
WHEN the user clicks on one item link
THEN the user is redirected to the item page
WHEN the user buys the Item
THEN the user will have the option click off the gotcha if it is bought and a taken icon will be displayed

## Soft Demo

![Landing page](./landingPage.png)

## Usage

Simply log in or create an account and add items to your wishlist or addfriends to be able to access their wishlist as well.
If you want to buy an item you will see a gotcha check that you can click once an item is bought and then taken once it is gotten.

## Credits

- Oliver Shih (https://github.com/runescape11111),
- Daniel Carrillo (https://github.com/DanCarrillo93),
- Elvis Lee (https://github.com/Elvis2681),
- Zack Campbell (https://github.com/zax5021),

## Technology

- [MySQL](https://www.mysql.com/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Node.js](https://nodejs.org/en/)
- [npmjs](https://docs.npmjs.com/)
- [bootstrap](https://getbootstrap.com/)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [esLint](https://eslint.org/)
- [referral-code-generator](https://www.npmjs.com/package/referral-code-generator)
