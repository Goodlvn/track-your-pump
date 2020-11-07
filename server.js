const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.use(require())

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
})