import express from "express";
import { deleteDoctor, getAllDoctors, getSingleDoctor, updateDoctor } from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router()

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctors)
router.put('/:id', updateDoctor, authenticate, restrict(["doctor"]))
router.delete('/:id', deleteDoctor, authenticate, restrict(["doctor"]))

export default router;