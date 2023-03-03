import express from "express";
const app = express();

import path from "path";

// import jokes from "./util/jokes.js";

/* Our Pages */

app.get("/frontpage", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
})

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"))
})

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});