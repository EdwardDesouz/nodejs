export const movieIndex = (req, response) => {
    response.send("get all movie lists");
};

export const movieCreate = (req, response) => {
    response.send("Create a movie");
};

export const movieUpdate = (req, response) => {
    response.send("Update a movie");
}

export const movieDelete = (req, response) => {
    response.send("Delete a movie");
}