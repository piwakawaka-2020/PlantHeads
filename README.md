Enspiral Developers Academy EDA
Wellington 2020 Lockdown Final Project
Full Stack Application

## EDA Dev Team 
  | Name | Role | Technical Work |
  | --- | --- | --- |
  | Thomas Codling | Product Owner/Front End Lead| ClientSide CSS | 
  | Josh Wood | Back End/Git Master/Product Manager| Serverside API/Clientside CSS |
  | Patricia Gonzales | Back End Lead/Heroku Deployment | Serverside API |
  | Kevin Guan | Auth/Video Production | Clientside & Serverside |
  | Alice Jowsey | Front End/Vibes Fun Master | Clientside CSS |
  


# PlantHeads

Users can research Botanical knowledge of plants by searching by their name. The User can learn about essential needs that sustain the plants full health. They can register as a PlantHead and log in to sell plants to other PlantHeads. Provided is all the options to enter their plant details in and upload a picture of their sale item. The User can add their contact details and be sent emails by the buyer regarding point of sale. Users can save their favourite plants they have found by browsing.

## Full Stack Technologies Utilised
    JS React
    Express.js
    Knex.js
    Trefle Api 
    

## User Stories
### MVP
As a user:
- [x] I want to search a plant and see a page with a variety of details about it
- [x] I want to register an account with my name
- [x] I log in and register my own plants to my account
- [x] We can add a listing to the plant page and it saves it to a database
- [x] We can accept a listing and the app will notify the seller
- [x] Unregistered users can see the plant database but cant save plants

### Stretch
- [x] Uploading your own picture when making a listing
- [x] Seperate buy/sell section for listings


## Technical Scope Full Stack Requirements

## Views (Client Side)   
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to register an account |
  | Home | Landing view for website |
  | Plant Profile | Plant details for selected plant |
  | Saved Plants | Current users saved plants (not listings) |
  | Buy/Sell Plants | Users can view a plants for sale |
  | Listing | Details for individual plant for sale |
  | Make Listing | Form to create a listing for the users plant |
  | Contact Seller | Registered user(buyer) can send and email to another registered user(seller) |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |


 ## Actions(Client Side)

 | type | data | purpose |
 | --- | --- | --- |
 | login | request login / recieve login / login error / login user | 
 | logout | request logout / recieve logout / logout user |
 | register | register user - not used |



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a user with JWT Token | The Users JWT Token |
| Put | /api/users/:userId | Yes | update a users details | 200 status code |
| Get | /api/plants/search/:queryPlant | Yes | Search for a plant | An array of plants |
| Get | /api/plants/:plantId | Yes | Get the details of an individual plant | A single plant object |
| Get | /api/listings/plants/:plantId | Yes | Get the listings for an individual plant | A plant object |
| Get | /api/listings/:listingId | Yes | Get the details of a listing | A listing object |
| Get | /api/listings | Yes | Get a listing of all plants | 201 status code |
| Post | /api/listings | Yes | Add a listing | 201 status code |
| Delete | /api/listings | Yes | Delete a listing | 200 status code |
| Put | /api/listings/:id | Yes | update a listing details | 201 status code |
| Get | /api/savedPlants/:userId | Yes | Get an array of saved plants for logged in user | An array of plants |
| Post | /api/savedPlants | Yes | Add a plant to favourites | 201 status code |
| Delete | /api/savedPlants | Yes | Delete a favourite from database | 200 status code |


## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Increments |
  | username | String |
  | email | String |
  | first_name | String |
  | last_name | String |
  | hash | String |

### Listing
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | plants_id | Integer |
  | users_id | Integer |
  | scientific_name | String |
  | common_name | String |
  | cost | Decimal |
  | type | String |
  | care_tips | String |
  | photoFile | Text |
  
### SavedPlant

 | Column Name | Data Type |
 | --- | --- |
 | id | Increments |
 | users_id | Integer |
 | scientific_name | String |
 | plants_id | Integer |
 | photoURL | String |
 | common_name | String |

 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
mv .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```

EDA DEV TEAM PLANTHEAD BUILD ~ DEPLOYED COMPLETE FULL STACK @12pm/13th/May/2020
