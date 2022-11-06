import { PrismaClient } from "@prisma/client";

//log de todas as query que são executadas
export const prisma = new PrismaClient({
    log: ["query"]
})