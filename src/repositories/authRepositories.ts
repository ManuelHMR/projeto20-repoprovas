import { prisma } from "../config/database";
import bcrypt from "bcrypt";

export async function getUserByEmail(email: string) {
    return await prisma.user.findFirst({
        where:{
            email
        }
    })
};

export async function createUser(email: string, password: string) {
    const hashPassword = bcrypt.hashSync(password, 10)
    return await prisma.user.create({
        data:{
            email, password: hashPassword
        }
    })
};