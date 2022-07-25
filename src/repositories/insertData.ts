import { Test } from "@prisma/client";
import { prisma } from "../config/database";

export async function insertData(data : Omit< Test, "id" >) {
    await prisma.test.create({
        data
    });
};