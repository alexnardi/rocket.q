const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => res.render("index"));
routes.get("/room", (req, res) => res.render("room"));
routes.get("/create-pass", (req, res) => res.render("create-pass"));

// Formato que o formulario de dentro da modal tem que informação 
// routes.post("/room/:room/:question/:action")

module.exports = routes;
