import { FastifyInstance } from "fastify";

export async function Clients(app: FastifyInstance) {
    app.post('/', async () => {
        console.log('Hello Clinets')
    })

    app.get('/', async () => {
        return 'Clients'
    })
}