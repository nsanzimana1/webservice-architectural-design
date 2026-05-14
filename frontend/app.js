const express = require("express");
const app = express();
const excelservice = require("./services/excelservice");


app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", (req, res) => {
    res.render("home");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
