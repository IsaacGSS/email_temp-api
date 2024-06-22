import { FastifyInstance, FastifyReply } from "fastify";

export default async function Hello(app: FastifyInstance) {
    app.get('/', (_, reply: FastifyReply) => {
        console.log('redirect from repositorie email_temp-api')

        return reply.redirect('https://github.com/IsaacGSS/email_temp-api')
    })

    app.get('/dev/hello', () => {
        console.log('Hello API')

        return { Hello: 'World'}
    })
}