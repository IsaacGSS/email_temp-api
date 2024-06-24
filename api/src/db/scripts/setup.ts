import { sql } from '../lib/postgres';

async function setup() {
    await sql/*sql*/`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email TEXT UNIQUE,
            tamps JSON ARRAY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `

    await sql/*sql*/`
        CREATE TABLE IF NOT EXISTS email (
            id SERIAL PRIMARY KEY,
            email_users TEXT NOT NULL,
            title TEXT,
            content_email TEXT,
            start_at TIMESTAMP NOT NULL,
            end_at TIMESTAMP ,
            FOREIGN KEY (email_users) REFERENCES users(email)
        )
    `

    await sql.end({timeout: 500})

    console.log('Setup script ran successfully')
}

setup()