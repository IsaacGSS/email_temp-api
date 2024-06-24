import { sql } from '../lib/postgres';

async function setup() {
    await sql/*sql*/`
        DROP TABLE email, users
    `

    await sql.end({timeout: 500})

    console.log('Delete script ran successfully')
}

setup()