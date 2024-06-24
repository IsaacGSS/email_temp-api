import fastify from "fastify";
import { User } from "./router/user";
import Hello from "./router/dev/hello";


export const app = fastify() 

app.register(User, {
    prefix: '/users'
})

//* register routers !Dev */
app.register(Hello, {
    prefix: '/dev'
})