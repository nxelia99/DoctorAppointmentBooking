
import express from "express";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router()

router.get('/:id', authenticate, restrict(['patient']), getSingleUser)
router.get('/', getAllUsers, authenticate, restrict(['admin']))
router.put('/:id', updateUser, authenticate, restrict(['patient']))
router.delete('/:id', deleteUser, authenticate, restrict(['patient']))

export default router;