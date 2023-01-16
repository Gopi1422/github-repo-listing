import express from "express";

import { getUserData } from "../controller/controller.js";
const route = express.Router();

/**
 * @description for root route
 * @method GET /
 */
// route.get("/", (req, res) => {
//   res.send("Server is working fine...");
// });

/**
 * @description for getting user data
 * @method GET /api/:username
 */
route.get("/api/:username", getUserData);

export default route;
