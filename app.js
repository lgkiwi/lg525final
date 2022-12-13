const express = require("express");
const app = express();
const cors = require("cors");
const { getConnection } = require("./connection");
const bodyParser = require("body-parser");
const { loginHandler } = require("./handler");
const cookieParser = require("cookie-parser");
const { cookieWithJwt } = require('./middleware');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(cookieParser())

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/foodpantry", cookieWithJwt, async function (req, res) {
  const getConn = await getConnection();
  console.log(getConn, "getconnection");
  const result = await getConn.query("select * from food_pantry");
  res.send(result.recordsets[0]);
});

app.get("/api/users", cookieWithJwt, async function (req, res) {
  const getConn = await getConnection();
  console.log(getConn, "getconnection");
  const result = await getConn.query("select * from users");
  res.send(result.recordsets[0]);
});

app.get("/api/homegoods", cookieWithJwt, async function (req, res) {
  const getConn = await getConnection();
  console.log(getConn, "getconnection");
  const result = await getConn.query("select * from home_goods");
  res.send(result.recordsets[0]);
});

app.get("/api/clients", cookieWithJwt, async function (req, res) {
  const getConn = await getConnection();
  console.log(getConn, "getconnection");
  const result = await getConn.query("select * from client_list");
  res.send(result.recordsets[0]);
});

app.get("/api/newclient", cookieWithJwt, async function (req, res) {
  const getConn = await getConnection();
  console.log(getConn, "getconnection");
  const result = await getConn.query("select * from client_list");
  res.send(result.recordsets[0]);
});

app.post("/api/newclient", cookieWithJwt, async function (req, res) {
  try {
    const { Client_Name, Phone, Email, Address, City, State, Zip } = req.body;
    console.log(req.body, "body");
    const getConn = await getConnection();
    const result = await getConn.query(
      `INSERT INTO client_list (Client_Name, Phone, EMail, Address, City, State, Zip)
        VALUES ('${Client_Name}','${Phone}','${Email}','${Address}','${City}','${State}','${Zip}' )`
    );

    console.log("success");
    res.send(result.recordsets[0]);
  } catch (err) {
    console.log(err.message);
    res.send("");
  }
});

app.delete("/api/deleteclient/:Client_ID", cookieWithJwt,  async function (req, res) {
  try {
    const { Client_ID } = req.params;
    const getConn = await getConnection();
    const result = await getConn.query(
      `DELETE FROM client_list 
        WHERE Client_ID = ${Client_ID};`
    );

    res.send("success");
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/api/staff", cookieWithJwt, async function (req, res) {
  const getConn = await getConnection();
  console.log(getConn, "getconnection");
  const result = await getConn.query("select * from staff");
  res.send(result.recordsets[0]);
});

app.get("/api/clients/:Client_ID", cookieWithJwt,  async function (req, res) {
  try {
    const { Client_ID } = req.params;
    const getConn = await getConnection();
    const result = await getConn.query(
      `select * from client_list where Client_ID = ${Client_ID}`
    );
    res.send(result.recordsets[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/api/updateclient", cookieWithJwt, async function (req, res) {
  try {
    const { Client_ID, Client_Name, Phone, Email, Address, City, State, Zip } =
      req.body;
    console.log(req.body, "body");
    const getConn = await getConnection();
    const result = await getConn.query(
      `UPDATE client_list 
      SET Client_Name = '${Client_Name}', Phone = '${Phone}', Email = '${Email}', Address = '${Address}', City = '${City}', State = '${State}', Zip = '${Zip}'
      WHERE Client_ID = ${Client_ID};`
    );

    res.send("success");
  } catch (err) {
    console.log(err.message);
    res.send("");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`node is running on ${process.env.PORT}`);
});

app.post("/api/login", loginHandler);
