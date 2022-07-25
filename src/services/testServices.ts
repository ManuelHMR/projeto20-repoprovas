import { prisma } from "../config/database";
import { findById } from "../repositories/findById";
import { insertData } from "../repositories/insertData";
import { findTeachersDiscipline, getTestsByDiscipline, getTestsByTeacher } from "../repositories/testRepositories";


export async function postTestService(body : testBody) {
    await findById(body.categoryId, "category");
    await findById(body.teacherId, "teacher");
    await findById(body.disciplineId, "discipline");
    const teacherDisciplineId = await findTeachersDiscipline(body.disciplineId, body.teacherId);
    await insertData({
        name: body.name, 
        pdfUrl: body.pdfUrl,
        teacherDisciplineId,
        categoryId: body.categoryId
    });
};

export async function getTestsService(groupBy: string) {
    if(groupBy !== "disciplines" && groupBy !== "teachers"){
        throw {
            status: 404,
            message: "Wrong group!"
        }
    }
    if(groupBy === "disciplines"){
        return await getTestsByDiscipline()
    }
    if(groupBy === "teachers"){
        return await getTestsByTeacher()
    }
};


export interface testBody {
    name: string
    pdfUrl: string
    categoryId: number
    teacherId: number
    disciplineId: number
};
    