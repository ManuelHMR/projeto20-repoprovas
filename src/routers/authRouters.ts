import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/validateSchema";
import signUpSchema from "../schemas/signUpSchema";
const authRouters = Router();

authRouters.post("/signup", validateSchema(signUpSchema), signUp);
// authRouters.post("/signin", validateSchema(signSchema), signIn);

export default authRouters;