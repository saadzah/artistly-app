## Artistly App
This is a sample application that allows you to search for artists and view their upcoming events via the public Bandsintown API.

## Running the App
The application was created using create-react-app and uses react-scripts to run.

To run the application using npm you can run `npm install` and then `npm run` in the project folder and the application will open in the browser.

## Folder Structure 
```
artistly-app/
  src/
    components -- contains app components shared and individual
    api        -- contains api request calls 
    actions    -- actions for redux
    pages      -- individual page layouts for each route
    reducers   -- reducers for redux
    sagas      -- saga`s for middleware of redux-saga
    App.css
    App.js
    App.test.js
    index.css
    index.js
    theme.js
    reportWebVitals.js
    setupTests.js
```

## Libraries/Tools
- React
- Redux for state management
- Redux-Saga for middleware
- Axios for api calls
- DayJS for date manipulation

## Design/Architecture Choices
I decided to use React as it is simpler/faster to implement. Using Redux is most definitely an overkill in this case but I added to just to show that I can :)
Redux-Saga to me makes more logical sense and keeps things consistent between redux and API calls and in my opinion is more scalable/maintainable in the long run. 


I prefer the minimalist approach of Material Design System and based on the mockups I chose to use it. Kept the UI very minimalist so that I have to make nominal
style changes.

## Docker
Added a `Dockerfile` so that it can be deployed anywhere and fit in a CI/CD pipeline. I guess a todo is that it needs configurable env`s as well.

To run it in docker just clone the repo and run the following commands:
- `docker build -t artistly-app .`
- `docker run -p 80:80 artistly-app`

