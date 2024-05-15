import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from '../controllers/recipe.js';

import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();


router.post('/add',Authenticate, add)


router.get('/',getAllRecipe)


router.get('/saved',getSavedRecipe)


router.get('/:id',getRecipeById)


router.get('/user/:id',getRecipeByUserId)


router.post("/:id", Authenticate, savedRecipeById);



export default router;