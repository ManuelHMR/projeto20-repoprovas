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

export async function getTestsByDiscipline() {
    const tests = await prisma.term.findMany({
        include: {
            disciplines: {
                include: {
                    teachersDisciplines: {
                        select: {
                            teachers: true,
                            tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    category:{
                                        select:{
                                            id: true,
                                            name:true,                                           
                                        }
                                    }
                                }
                            },
                        }
                    }
                }
            }
        }
    });
    return { tests }
}

export async function getTestsByTeacher() {
    const tests = await prisma.teacherDiscipline.findMany({
        include:{
            disciplines:{
                include:{
                    teachersDisciplines:{
                        select:{
                            id: true,
                            teacherId: true,
                            disciplineId: true,
                            tests:{
                                select:{
                                    id: true,
                                    name: true
                                }
                            }
                        }
                    }
                }
            },
            tests:{
                include:{
                    category:{
                        select:{
                            id: true,
                            name: true
                        }
                    }
                }
            },
            teachers:{
                select:{
                    id: true,
                    name: true,
                }
            },
        }
    });

    return { tests }
}
