import { Router } from "express";
import { getTestController, postTestController } from "../controllers/testControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import testSchema from "../schemas/testSchema";
const testRouter = Router();

testRouter.use(validateToken);
testRouter.post("/tests", validateSchema(testSchema), postTestController);
testRouter.get("/tests", getTestController);

export default testRouter;