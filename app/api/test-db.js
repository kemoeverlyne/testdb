import mysql from 'mysql2';

// Handler function for the API route
export default async function handler(req, res) {
    // Configure the MySQL connection
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    // Connect to the database
    connection.connect(err => {
        if (err) {
            return res.status(500).json({ message: 'Error connecting to the database: ' + err.message });
        }
        connection.end();
        res.status(200).json({ message: 'Connected to the database.' });
    });
}
