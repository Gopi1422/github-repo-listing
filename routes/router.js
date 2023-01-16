import express from "express";

import { getUserData } from "../controller/controller.js";
const route = express.Router();

/**
 * @description for root route
 * @method GET /
 */
route.get("/", (req, res) => {
  res.send("Server is working fine...");
});

/**
 * @description for getting user data
 * @method GET /:username
 */
route.get("/:username", getUserData);

export default route;
