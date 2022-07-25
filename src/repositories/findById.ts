import { prisma } from "../config/database";

export async function findById(id: number, table: "discipline" | "teacher" | "category") {
    const result = await prisma[table as any].findUnique({
        where:{
            id
        }
    });
    if(!result){
        throw{
            status: 404,
            message: `Couldn't find this ${table}`
        };
    }
};