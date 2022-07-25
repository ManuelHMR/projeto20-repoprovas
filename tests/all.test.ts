import app from "../src/app";
import supertest from "supertest";
import { prisma } from "../src/config/database";
import { testBody } from "../src/services/testServices";
  
afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "terms" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "tests" RESTART IDENTITY CASCADE`;
    await prisma.$disconnect();
}); 

const USER = {
    email: "teste@teste.com",
    password: "1234567890"
};

const TEST : testBody = {
    name: "test",
    pdfUrl: "https://bootcampra.notion.site/Projeto-20-RepoProvas-27d678dab2584fc980f1686285d1d04c",
    categoryId: 1,
    teacherId: 2,
    disciplineId: 4
};

let token: string;

describe("POST /signup", ()=> {
    it("create user", async ()=> {
        const response = await supertest(app).post("/sign-up").send(USER);
        expect(response.statusCode).toBe(201);
    });
    it("create a user with an email already in use", async ()=> {
        const response = await supertest(app).post("/sign-up").send(USER);
        expect(response.statusCode).toBe(409);
    });
});

describe("POST /signin", ()=> {
    it("login with valid a credentials", async ()=> {
        const response = await supertest(app).post("/sign-in").send(USER)
        token = response.body.token;
        expect(token).not.toBeNull();
    });
    it("login without a valid credentials", async ()=> {
        const response = await supertest(app).post("/sign-in").send({...USER, password: "0000000000"})
        expect(response.statusCode).toBe(400);
    });
});

describe("POST /tests", () => {    
    it("post a test with a valid data", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send(TEST);
        expect(response.status).toBe(201);
    });
    it("post a test without a valid teacher", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, teacherId: 99999});
        expect(response.status).toBe(404);
    });
    it("post a test without a valid category", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, categoryId: 9999});
        expect(response.status).toBe(404);
    });
    it("post a test without a valid discipline", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, disciplineId: 9999});
        expect(response.status).toBe(404);
    });
    it("post a test without a valid url", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, pdfUrl: "not a valid url"});
        expect(response.status).toBe(422);
    });
    it("post a test without a valid name", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, name: ""});
        expect(response.status).toBe(422);
    });
});

describe("GET /tests", () => {
    it("get tests with a valid disciplines query", async () => {
        const response = await supertest(app).get("/tests?groupBy=disciplines").set('Authorization', `Bearer ${token}`);
        expect(response).not.toBeNull();
    });
    it("get tests with a valid teachers query", async () => {
        const response = await supertest(app).get("/tests?groupBy=teachers").set('Authorization', `Bearer ${token}`);
        expect(response).not.toBeNull();
    });
    it("get tests without a valid query", async () => {
        const response = await supertest(app).get("/tests?groupBy=teste").set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(404);
    });
});