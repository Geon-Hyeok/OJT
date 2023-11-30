var express = require('express');
var router = express.Router();

router.get('/codeRegistry', function (req, res, next) {
  res.render('codeRegistry')
});

  // 삽입 쿼리를 동적으로 생성
router.post('/', function (req, res, next) {
    const { code, title, desc } = req.body;
  
    // 쿼리에서 JSON 객체를 직접 생성하는 대신, 바인딩할 값을 사용하여 쿼리를 생성
    var insertQuery = 'INSERT INTO codeInfo (code, data) VALUES (?, ?)';
    var jsonData = JSON.stringify({ title, desc }); // Create JSON string
    req.db.query(insertQuery, [code, jsonData], (insertErr, insertResults) => {
      if (insertErr) {
        console.error('Error executing insert query:', insertErr);
        return res.status(500).json({ error: 'Error executing insert query' });
      }
  
      // JSON 형태로 삽입 결과를 클라이언트에 응답
      res.json(insertResults);
    });
  });
  
  module.exports = router;