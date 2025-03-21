import express from "express";

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ msg: "hello world!" });
})

// CRUD functionality of movies
//R - For Reading
app.get('/movies', () => {

})

// for creating movies
app.post('/movies', () => {

})

// U - For Updating
app.put('/movies/:id',() => {

})

// D - For deleting movide
app.delete('/movies/:id',() => {

})



app.listen(PORT, () => {
    console.log(`running succssfully at http://localhost:${PORT}`);

})
