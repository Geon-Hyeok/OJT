const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'connectdb'
});

// 데이터베이스 연결
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    console.log('Connected to MariaDB');
});

// 프로세스 종료 시 데이터베이스 연결 해제
process.on('SIGINT', () => {
    connection.end((endErr) => {
        if (endErr) {
            console.error('Error disconnecting from MariaDB:', endErr);
        } else {
            console.log('Disconnected from MariaDB');
        }
        process.exit();
    });
});
module.exports = connection;