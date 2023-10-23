const express = require("express");
const mysql = require("mysql2");
const Prompt = require("./helpers/prompt.js");
const { Queries } = require("./helpers/queries.js");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: "127.0.0.1",
      user: "root",
      password: "password",
      database: "work_db",
    },
    console.log(`Connected to the work_db database.`)
  );

  