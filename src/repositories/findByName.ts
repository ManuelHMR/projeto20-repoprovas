import { prisma } from "../config/database";

export async function findByName(name: string, table: "discipline" | "teacher" | "category") {
    const result = await prisma[table as any].findFirst({
        where:{
            name
        }
    })
    if(!result){
        throw{
            status: 404,
            message: `Couldn't find this ${table}`
        };
    }
    return result.id;
};