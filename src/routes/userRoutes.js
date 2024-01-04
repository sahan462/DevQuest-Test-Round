import express from "express";
import userService from "../services/userService.js";
import HttpStatus from "../enums/httpStatus.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await userService.getUser(id);
  if (response.status == HttpStatus.NOT_FOUND) {
    res.status(response.status).json({ message: "User Not Found" });
  } else {
    res.status(response.status).json(response);
  }
});

export default router;
