import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/validateSchema";
import signInSchema from "../schemas/signInSchemas";
import signUpSchema from "../schemas/signUpSchema";
const authRouters = Router();

authRouters.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouters.post("/sign-in", validateSchema(signInSchema), signIn);

export default authRouters;