import express from 'express';
import {MovieIndex, MovieCreate,MovieUpdate,MovieDelete} from '../controllers/movieController.js';

const router = express.Router();

router.get('/', MovieIndex);

router.post('/', MovieCreate);

router.put('/:id', MovieUpdate);

router.delete('/:id', MovieDelete);

export default router;
