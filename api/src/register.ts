
import fastify from "fastify";
import Hello from "./routers/dev/hello";
import { Clients } from "./routers/clients";

export const app = fastify() 

// register routers !Dev
app.register(Hello)

// register routers
app.register(Clients, {
    prefix: '/clients'
})