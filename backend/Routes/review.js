import express from "express"
import { getAllReviews, createReview } from "../Controllers/reviewController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"


const router = express.Router({mergeParams: true})

// /doctor/doctorId/reviews


router.route('/').get(getAllReviews)
.post(authenticate, createReview)

export default router;