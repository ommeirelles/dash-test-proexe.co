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
- Form validation doesn't gives the user a feedback for error on the api side. Only the happy path was implemented.
- If large list of user is used a restful pagination could be achieved easily.
- Redux Store is all inside one file (not the desired solution but in order to work faster and with this little application wasn't a problem)
