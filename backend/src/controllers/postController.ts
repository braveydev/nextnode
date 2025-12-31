import { Response } from "express";
import { AuthRequest } from "../types/express.js";
import prisma from "../lib/prisma.js";

// Create a Post
export const createPost = async (req: AuthRequest, res: Response) => {
  const { title, description } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        authorId: req.user!.userId, // "!" tells TS we know user exists here
      },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};

// Get All Posts
export const getPosts = async (req: AuthRequest, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      where: { authorId: req.user?.userId },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

// Update Post
export const updatePost = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updated = await prisma.post.update({
      where: { id },
      data: { title, description },
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ message: "Post not found" });
  }
};

// Delete Post
export const deletePost = async (req: AuthRequest, res: Response) => {
  try {
    await prisma.post.delete({ where: { id: req.params.id } });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Post not found" });
  }
};
