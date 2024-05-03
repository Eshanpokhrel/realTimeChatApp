import express from "express";
import { getMesssage, sendMesssage } from "../controllers/sendMesssage.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id",protectRoute, sendMesssage)/*protect route checks if the user is loggedin or not befor executing the upcoming function*/
router.get("/:id",protectRoute, getMesssage)/*protect route checks if the user is loggedin or not befor executing the upcoming function*/

export default router;