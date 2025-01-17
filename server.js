import express from "express";

const app = express();
const port = 7000;

app.get("/", (req, res) => {
    res.send("Hello, This is the web server of Harold Gutierrez!");
});

app.get("/health", (req, res) => {
    res.send("All Well!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
