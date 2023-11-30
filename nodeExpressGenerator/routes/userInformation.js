var express = require('express');
var router = express.Router();

router.get('/user', function (req, res, next) {
  
  res.render('userInformation') // 여기서 'userInformation'은 실제 렌더링할 HTML 파일 이름이어야 합니다.
   
});

router.get('/', function (req, res, next) {
   
    var id = req.query.id;
    var name = req.query.name;
    var email = req.query.email;
    var code = req.query.code;
  
    // 쿼리를 동적으로 생성
    var query = `
    SELECT
      userinfo.id,
      userinfo.name,
      userinfo.age,
      userinfo.email,
      JSON_UNQUOTE(JSON_EXTRACT(codeinfo.data, '$.title')) AS title
    FROM
      userinfo
    INNER JOIN
      codeinfo ON userinfo.code = codeinfo.code WHERE 1
  `;
  
    if (id) {
      query += ' AND userinfo.id = ' + id;
    }
  
    if (name) {
      query += ' AND userinfo.name = "' + name + '"';
    }
  
    if (email) {
      query += ' AND userinfo.email = "' + email + '"';
    }
  
    if (code) {
      query += ' AND userinfo.code = "' + code + '"';
    }
    query+= ' ORDER BY userinfo.id ASC';
  
    req.db.query(query, (queryErr, results) => {
      if (queryErr) {
        console.error('Error executing query:', queryErr);
        return res.status(500).json({ error: 'Error executing query' });
      }
  
      // JSON 형태로 결과를 클라이언트에 응답
      res.json(results);
    });
  });
  
  // 삽입 쿼리를 동적으로 생성
  router.post('/', function (req, res, next) {
    const { name, age, email, code } = req.body;
  
    // // id가 없으면 오류 응답
    // if (!name || !age || !email) {
    //   console.log(name);
    //   console.log(age);
    //     console.log(email);
    //   return res.status(400).json({ error: 'Data값 입력 필수' });
    // }
  
    var insertQuery = 'INSERT INTO userinfo (name, age, email, code) VALUES (?, ?, ?, ?)';
    req.db.query(insertQuery, [name, age, email, code], (insertErr, insertResults) => {
      if (insertErr) {
        console.error('Error executing insert query:', insertErr);
        return res.status(500).json({ error: 'Error executing insert query' });
      }
  
      // JSON 형태로 삽입 결과를 클라이언트에 응답
      res.json(insertResults);
    });
  });
  
  
  // 삭제 쿼리를 동적으로 생성
  router.delete('/', function (req, res, next) {
    var id = req.query.id;
  
    // id가 없으면 오류 응답
    if (!id) {
      return res.status(400).json({ error: 'ID parameter is required for delete operation' });
    }
  
    var deleteQuery = 'DELETE FROM userinfo WHERE id = ' + id;
  
    req.db.query(deleteQuery, (deleteErr, deleteResults) => {
      if (deleteErr) {
        console.error('Error executing delete query:', deleteErr);
        return res.status(500).json({ error: 'Error executing delete query' });
      }
  
      // JSON 형태로 삭제 결과를 클라이언트에 응답
      res.json(deleteResults);
    });
  });

    // 코드콤보 연동
  router.get('/codecombo', function (req, res, next) {
  
    // 쿼리를 동적으로 생성
    var query = `
      SELECT
        code,
        JSON_UNQUOTE(JSON_EXTRACT(codeinfo.data, '$.title')) AS title
      FROM codeinfo ORDER BY code ASC
    `;
  
    req.db.query(query, (queryErr, results) => {
      if (queryErr) {
        console.error('Error executing query:', queryErr);
        return res.status(500).json({ error: 'Error executing query' });
      }
  
      // JSON 형태로 결과를 클라이언트에 응답
      res.json(results);
    });
  });

  module.exports = router;