var express = require('express');
var router = express.Router();

router.get('/codeInquiry', function (req, res, next) {
  res.render('codeInquiry')
});

router.get('/', function (req, res, next) {
  
  var title = req.query.title;
  var desc = req.query.desc;

  // 쿼리를 동적으로 생성
  var query = `
    SELECT
      code,
      JSON_UNQUOTE(JSON_EXTRACT(codeinfo.data, '$.title')) AS title,
      JSON_UNQUOTE(JSON_EXTRACT(codeinfo.data, '$.desc')) AS \`desc\`
    FROM codeinfo WHERE 1
  `;

  if (title) {
    query += ' AND JSON_UNQUOTE(JSON_EXTRACT(codeinfo.data, "$.title")) LIKE "' + title + '%"';
  }

  if (desc) {
    query += ' AND JSON_UNQUOTE(JSON_EXTRACT(codeinfo.data, "$.desc")) LIKE "%' + desc + '%"';
  }
  
  query += ' ORDER BY code ASC';

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