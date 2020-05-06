# PlantHeads


app description

## User Stories

### MVP

As a user:
- [ ] I want to search a plant and see a page with a variety of details about it
- [ ] I want to filter plants by different categories
- [ ] I want to register an account with my name
- [ ] I log in and register my own plants to my account
- [ ] We can add a listing to the plant page and it saves it to a database
- [ ] We can accept a listing and the app will notify the seller
- [ ] Unregistered users can see the plant database but cant save plants

### Stretch
- [ ] Plant identification by picture
- [ ] Uploading your own picture when making a listing
- [ ] Seperate buy/sell section for listings
- [ ] More search filters

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to register an account |
  | Home | Landing view for website |
  | Plant Profile | Plant details for selected plant |
  | Listing | Details for individual plant listing |
  | Saved Plants | Current users saved plants (not listings) |
  | Make Listing | Form to create a listing |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |

 ## Actions

 ### ACTION NAME

 | type | data | purpose |
 | --- | --- | --- |



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a user with JWT Token | The Users JWT Token |
| Put | /api/users/:userId | Yes | update a users details | 200 status code |
| Get | /api/plants/search/:queryPlant | Yes | Search for a plant | An array of plants |
| Get | /api/plants/:plantId | Yes | Get the details of an individual plant | An array of plants |
| Get | /api/listings/:plantId | Yes | Get the listings for an individual plant | A plant object |
| Get | /api/listings/:listingId | Yes | Get the details of a listing | A listing object |
| Post | /api/listings | Yes | Add a listing | 201 status code |
| Delete | /api/listings | Yes | Delete a listing | 200 status code |
| Put | /api/listings/:userId | Yes | update a listing details | 201 status code |
| Get | /api/savedPlants/:userId | Yes | Get an array of saved plants for logged in user | An array of plants |
| Post | /api/savedPlants | Yes | Add a plant to favourites | 201 status code |
| Delete | /api/savedPlants | Yes | Delete a favourite from database | 200 status code |


## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | username | String |
  | first_name | String |
  | last_name | String |
  | hash | text |
  | created_at | timestamp |
  | updated_at | timestamp |

### Listing
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | plant_id | Integer |
  | plant_name | String |
  | username | String |
  | cost | Integer |
  | notes | String |
  
### SavedPlant

 | Column Name | Data Type |
 | --- | --- |
 | id | Integer |
 | user_id | Integer |
 | plant_name | String |
 | plant_id | Integer |
 | photo | URL photo |

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

