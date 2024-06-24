import { sql } from '../lib/postgres';

async function seed() {
    const user = await sql/*sql*/`
        INSERT INTO users (name_full, email)
        VALUES ('Isaac S. Silva', 'isaacgabrielssz@gmail.com')
        RETURNING id
    `

    await sql/*sql*/`
        INSERT INTO email (tite, conteudo_email, clients_id)
        VALUES ('meus email', 'test email', ${user[0].id})
    `

    await sql.end({timeout: 500})

    console.log('Seed script ran successfully')
}

seed()