import express from "express";

const router = express.Router();

import { add, get } from "../controllers/users"

router.get('/test', get);

router.post('/add', add);

module.exports = router