const express = require ("express");
const app = express();
const PORT = 8080;

app.get("/api/home", (req, res) => {
    res.json({message: "Hello World"})
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})