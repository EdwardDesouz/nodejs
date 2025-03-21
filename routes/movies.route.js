import express from "express";
import { movieIndex, movieCreate, movieUpdate, movieDelete } from "../controllers/movies.controller.js";

const router = express.Router();

// R - For Reading
router.get('/', movieIndex);

// For creating movies
router.post('/', movieCreate);

// U - For Updating
router.put('/:id', movieUpdate);

// D - For deleting a movie
router.delete('/:id', movieDelete);

export default router;
