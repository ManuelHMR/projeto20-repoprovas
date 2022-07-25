import app from "../src/app";
import supertest from "supertest";
import { prisma } from "../src/config/database";
import { testBody } from "../src/services/testServices";
  
afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$disconnect();
});

const USER = {
    email: "teste@teste.com",
    password: "1234567890"
};

const TEST : testBody = {
    name: "test",
    pdfUrl: "https://bootcampra.notion.site/Projeto-20-RepoProvas-27d678dab2584fc980f1686285d1d04c",
    category: "Projeto",
    teacher: "Bruna Hamori",
    discipline:"Humildade"
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
    it("login with valid credentials", async ()=> {
        const response = await supertest(app).post("/sign-in").send(USER)
        token = response.body.token;
        expect(token).not.toBeNull();
    });
    it("login without valid credentials", async ()=> {
        const response = await supertest(app).post("/sign-in").send({...USER, password: "0000000000"})
        expect(response.statusCode).toBe(400);
    });
});

describe("POST /tests", () => {
    it("post a test with valid data", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send(TEST);
        expect(response.status).toBe(201);
    });
    it("post a test without valid teacher", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, teacher: "not a valid teacher"});
        expect(response.status).toBe(404);
    });
    it("post a test without valid category", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, category: "not a valid category"});
        expect(response.status).toBe(404);
    });
    it("post a test without valid discipline", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, discipline: "not a valid discipline"});
        expect(response.status).toBe(404);
    });
    it("post a test without valid url", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, pdfUrl: "not a valid url"});
        expect(response.status).toBe(422);
    });
    it("post a test without valid name", async () => {
        const response = await supertest(app).post("/tests").set('Authorization', `Bearer ${token}`).send({...TEST, name: ""});
        expect(response.status).toBe(422);
    });
});