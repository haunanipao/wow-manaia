# Boilerplate: React with Webpack
This is a starter project that uses webpack to transpile and bundle ES6 React code. 

## Setup

### NPM Scripts

npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev


### Installation
To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```
### 0. Tasks to do
- [x] Set up Repo
- [x] Set up dependencies
- [x] Frame skeleton structure
- [x] Set up dbs - migration, seeds, sqlite3
- [x] Set up /server/server.js, /routes/wow.js, /db/db.js
- [x] Check data in Thunder Client
- [x] Set up api to get Wow data in the browser
- [x] Get route (server)
- [x] Set up db -> route -> api client
- [x] Set up form to add WOW
- [x] Show WOW in browser
- [x] Make things Redux > make the Store open
- [x] CSS Magic
- [x] Updated local files and build
- [x] Deploy to Vercel
- [ ] do Auth0?
- [ ] Expand more with edit and delete
- [ ] Describe project case study for portfolio.


---
To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

---

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

https://knexjs.org/guide/migrations.html#migration-cli


