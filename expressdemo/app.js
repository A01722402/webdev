const express = require("express"); 

const app = express();

app.get("/api", (req, res) => {res.send("GET REQUEST recibido")});

app.put("/api", (req, res) => {res.send("PUT REQUEST recibido")});

app.post("/api", (req, res) => {res.send("POST REQUEST recibido")});

app.delete("/api", (req, res) => {res.send("DELETE REQUEST recibido")});

app.get("/", (req, res) => {res.send("Hello World")});

app.listen(5001, () => {console.log("Server is running on port 5001")} );

