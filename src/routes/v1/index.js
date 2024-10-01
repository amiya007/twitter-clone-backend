import express from "express";
import { createTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signUp, logIn } from "../../controllers/auth-controller.js";
import { authenticate } from "../../middleware/authenticate.js"

const router = express.Router();

router.post('/tweets', authenticate, createTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comments', authenticate, createComment);
router.post('/signup', signUp); 
router.post('/login', logIn);

export default router;