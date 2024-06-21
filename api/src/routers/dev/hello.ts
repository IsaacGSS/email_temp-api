import { FastifyInstance } from "fastify";

export default async function Hello(app: FastifyInstance) {
    app.get('/dev/hello', () => {
        console.log('Hello API')

        return { Hello: 'World'}
    })
}