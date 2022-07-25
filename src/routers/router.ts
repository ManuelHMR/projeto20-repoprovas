import express from "express";
import authRouters from "./authRouters";
import testRouter from "./testRouters";
const router =  express.Router();

router.use(authRouters);
router.use(testRouter);

export default router;