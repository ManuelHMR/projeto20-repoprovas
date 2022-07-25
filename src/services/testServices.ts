import { findByName } from "../repositories/findByName";
import { insertData } from "../repositories/insertData";
import { findTeachersDiscipline, getTestsRepositories } from "../repositories/testRepositories";


export async function postTestService(body : testBody) {
    const categoryId = await findByName(body.category, "category");
    const teacherId = await findByName(body.teacher, "teacher");
    const disciplineId = await findByName(body.discipline, "discipline");
    const teacherDisciplineId = await findTeachersDiscipline(disciplineId, teacherId);
    await insertData({
        name: body.name, 
        pdfUrl: body.pdfUrl,
        teacherDisciplineId,
        categoryId
    });
};

export async function getTestsService(groupBy: string) {
    if(groupBy !== "disciplines" && groupBy !== "teachers"){
        throw {
            status: 404,
            message: "Wrong group!"
        }
    }
    const result = await getTestsRepositories(groupBy);
    return result;
};


export interface testBody {
    name: string
    pdfUrl: string
    category: string
    teacher: string
    discipline: string
};
    