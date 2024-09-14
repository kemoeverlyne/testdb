const mysql = require('mysql2');

// Replace these with your actual connection details
const connection = mysql.createConnection({
    host: '102.130.122.114',
    user: 'influenc_tenderusr',
    password: '%(PVvG~YxcFi',
    database: 'influenc_tenderdb'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
    connection.end();
});
