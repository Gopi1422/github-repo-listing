import express from "express";
import path from "path";

import { getUserData } from "../controller/controller.js";
const route = express.Router();
const __dirname = path.resolve();

// route.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });
/**
 * @description for Root Route
 * @method GET /
 */
route.get("/:username", getUserData);

// module.exports = route;
export default route;
