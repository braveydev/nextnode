import { Router } from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// Chain routes for cleaner code
router.route("/").get(protect, getPosts).post(protect, createPost);

router.route("/:id").put(protect, updatePost).delete(protect, deletePost);

export default router;
