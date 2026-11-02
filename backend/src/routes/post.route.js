import {Router} from "express";
import {createPost} from "../controllers/post.contoller.js";
import {getPosts} from "../controllers/post.contoller.js";
import {updatePost} from "../controllers/post.contoller.js";
import {deletePost} from "../controllers/post.contoller.js";

const router=Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);
router.route("/update/:id").patch(updatePost);
router.route("/delete/:id").delete(deletePost);

export default router;