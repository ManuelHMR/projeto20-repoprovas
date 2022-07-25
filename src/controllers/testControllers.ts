import { Request, Response } from "express";
import { getTestsService, postTestService } from "../services/testServices";

export async function postTestController(req: Request, res: Response) {
    await postTestService(req.body)
    return res.send(201)
};

export async function getTestController(req: Request, res: Response) {
    const groupBy = req.query.groupBy as string;
    const result = await getTestsService(groupBy);
    return res.send(result);
};