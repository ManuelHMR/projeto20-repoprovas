import { prisma } from "../config/database";

export async function findTeachersDiscipline(disciplineId: number, teacherId: number ) {
    const result = await prisma.teacherDiscipline.findFirst({
        where: {
            disciplineId,
            teacherId
        }
    })
    if(!result){
        throw{
            status: 404,
            message: "Couldn`t find this teacher`s discipline!"
        }
    }
    return result.id;
};

export async function getTestsRepositories(groupBy: string) {
    return prisma.test.findMany({
        include: {
            teacherDiscipline: {
                include:{
                    [groupBy]: true
                }
            }
        }
    })
};