const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Node API running inside Docker"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});


