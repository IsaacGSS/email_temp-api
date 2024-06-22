import { sql } from "./lib/postgres";

async function Setup() {
    await sql/*sql*/`
        CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            name_full TEXT,
            email TEXT UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `

    await sql.end({timeout: 100})

    console.log('Setup script ran successfully')
}

Setup()