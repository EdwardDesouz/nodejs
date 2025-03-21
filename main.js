import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

//Connect DB
connectDB();


app.get('/', (req, res) => {
    res.json({ msg: "hello world!" });
})

// CRUD functionality of movies
// CLIENT -> MIDDLEWARE ->SERVER

app.use("/movies", movieRoutes)

  

app.listen(PORT, () => {
    console.log(`running succssfully at http://localhost:${PORT}`);

})


