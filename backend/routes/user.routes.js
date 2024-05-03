import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sidebarUsers } from "../controllers/user.controller.js";

const router = express.Router()

router.get("/",protectRoute, sidebarUsers);

export default router;