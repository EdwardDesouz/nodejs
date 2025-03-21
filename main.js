import express from "express";
import movieRoutes from "./routes/movies.route.js"

const app = express();
const PORT = 6969;



app.get('/', (req, res) => {
    res.json({ msg: "hello world!" });
})

// CRUD functionality of movies
// CLIENT -> MIDDLEWARE ->SERVER

app.use("/movies", movieRoutes)

  

app.listen(PORT, () => {
    console.log(`running succssfully at http://localhost:${PORT}`);

})


