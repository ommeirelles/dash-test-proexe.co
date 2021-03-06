# UserDashboard Example

- [Tech](#built-with)
- [Getting Started](#getting-started)
- [Notes](#notes)

## Built With

- React
- Redux
- TailwindCSS

## Getting Started:

In order to run this repository you will need to have node installed.

- fork/clone this repository
- Install dependencies (`yarn install` or `npm install` from inside the terminal inside the project root folder)
- One terminal you will execut the REST FULL API with the (`yarn api` or `npm run api`) command.
- In another terminal, execute the front-end build with the (`yarn dev`or `npm run dev`) command.

> API runs on port **4000** and front-end app on port **3000**. Make sure this ports are available before starting the applications.

## Notes:

- Front-end make uses of atomic design.
- dark and light theme implemented with tailwind.
- Table ordering not done because I run out of time.
- husky, prettier and lint to enforce better code quality.
- RESTFUL API mocked with json-server using [the file](/data/data.json) as start point
- Form validation doesn't gives the user a feedback for error (5xx) on the api side. Only the happy path was implemented.
- If large list of user is used a restful pagination could be achieved easily.
- Redux Store is all inside one file (not the desired solution but in order to work faster and with this little application wasn't a problem)
