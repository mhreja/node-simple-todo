## Simple Todo on Node Js

This is a simple Todo Application Developed with Node Js

## Setup

After cloning this repository in your local machine follow below steps-

- Step 1:
  Turn on your MySql server on your local machine.

- Step 2:
  Create a `.env` file in project root directory.
  Copy paste and save below code-

```jsx
NODE_ENV=development
PORT=5000

DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=mytodo
DB_USER=root
DB_PASSWORD=
```

- Step 3:
  Open the app folder path in your command prompt and enter-

```jsx
npm install
```

This will install all the packages required.

```jsx
npx sequelize db:create
```

By this command we will create database. You can modify the DB_NAME in .env file at the root of the project.

```jsx
npm sequelize db:migrate
```

This will migrate the migration files which will create all the database tables.

```jsx
npm start
```

Start the server.

That's it. It's very simple. Now check your command propmt, server has been started running. Copy the URL and paste it on your browser.

Hope you like it.

Thank You.
