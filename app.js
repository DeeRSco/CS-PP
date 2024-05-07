const express = require('express');
const app = express();
const PORT = 5500;

app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});

app.get("/", (request, response, next) => {
    response.send("this is the home page")
})
