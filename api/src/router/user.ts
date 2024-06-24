import { FastifyInstance, FastifyReply } from "fastify";
import { sql } from "../db/lib/postgres";

export async function User(app: FastifyInstance) {
    app.post('/', async () => {
        console.log('Hello Clinets')
    })

    app.get('/', async (_, reply: FastifyReply) => {
        const users = await sql/*sql*/`
            SELECT *
            FROM users
            ORDER BY created_at DESC
        `

        const email = await sql/*sql*/`
            SELECT *
            FROM email
            ORDER BY end_at DESC
        `

        return reply.status(200).send({ users, email })
    })
}