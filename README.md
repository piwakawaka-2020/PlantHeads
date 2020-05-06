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
- [ ] Registered users can see the plant database but cant save plants

### Stretch
- [ ] Plant identification by picture
- [ ] Uploading your own picture when making a listing
- [ ] Seperate buy/sell section for listings

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

 ### meetings

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_MEETINGS | meetings | retreive meetings from the db and store in redux |
 | ADD_MEETING | meeting | Add a single meeting to the history after it is created |

 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |

 ### currentMeeting
  | type | data | purpose |
| --- | --- | --- |
| START_MEETING | attendees ([]), meeting_name | a meeting has started, set initial meeting state |
| END_MEETING | null | Set meeting in progress flag to false |  
| TICK_ONE_SECOND | null | Increase running total by 1s worth of $ |
| RESET_MEETING | null | Revert to initial state |



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/signin | Yes | Log In a User | The Users JWT Token |

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
  | name | String |
  | seller | Timestamp |
  | cost | integer |
  | notes | integer |
  
### SavedPlant

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | user_id | Integer |
 | plant_id | Integer |

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

