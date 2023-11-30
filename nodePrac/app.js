const express = require('express');
const ejs = require('ejs');
const connection = require('./dbConnector');

const app = express();
const port = 3000;

// JSON 및 폼 데이터를 해석하기 위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 뷰 엔진 설정
app.set('view engine', 'ejs');

// 웹 서버 라우트
app.get('/', (req, res) => {
    // SELECT 쿼리 실행
    connection.query('SELECT * FROM userinfo', (queryErr, results) => {
        if (queryErr) {
            console.error('Error executing query:', queryErr);
            return res.status(500).send('Error executing query');
        }

        console.log(results);
        // 쿼리 결과를 웹 페이지에 출력
        res.render('index', { data: results });
    });
});

app.get('/userDetail/:id', (req, res) => {
    const userId = req.params.id;

    // 특정 사용자의 정보를 조회하는 SELECT 쿼리 실행
    connection.query('SELECT * FROM userinfo WHERE id = ?', [userId], (queryErr, results) => {
        if (queryErr) {
            console.error('Error executing query:', queryErr);
            return res.status(500).send('Error executing query');
        }

        // 조회된 결과를 상세 조회 페이지에 렌더링
        res.render('userDetail', { user: results });
    });
});

app.post('/add', (req, res) => {
    const { name, age, email } = req.body;

    // INSERT 쿼리 실행
    connection.query('INSERT INTO userinfo (name, age, email) VALUES (?, ?, ?)', [name, age, email], (queryErr, results) => {
        if (queryErr) {
            console.error('Error executing query:', queryErr);
            return res.status(500).send('Error executing query');
        }

        res.redirect('/');
    });
});

app.get('/delete/:id', (req, res) => {
    const userId = req.params.id;

    // DELETE 쿼리 실행
    connection.query('DELETE FROM userinfo WHERE id=?', [userId], (queryErr, results) => {
        if (queryErr) {
            console.error('Error executing query:', queryErr);
            return res.status(500).send('Error executing query');
        }

        res.redirect('/');
    });
});

app.post('/update/:id', (req, res) => {
    const { name, age, email } = req.body;
    const userId = req.params.id;

    // UPDATE 쿼리 실행
    connection.query('UPDATE userinfo SET name=?, age=?, email=? WHERE id=?', [name, age, email, userId], (queryErr, results) => {
        if (queryErr) {
            console.error('Error executing query:', queryErr);
            return res.status(500).send('Error executing query');
        }

        res.redirect(`/userDetail/${userId}`);
    });
});

// 웹 서버 시작
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
