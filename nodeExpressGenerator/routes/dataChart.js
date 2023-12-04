var express = require('express');
var router = express.Router();

router.get('/dataChart', function (req, res, next) {
    res.render('dataChart')
});

router.get('/', function (req, res, next) {
    var regdate1 = req.query.regdate1;
    var regdate2 = req.query.regdate2;
    var code = req.query.code;

    if (!regdate1) {
        regdate1 = 0;
    }

    if (!regdate2) {
        regdate2 = 0;
    }

    if (regdate1 > regdate2) {
        [regdate1, regdate2] = [regdate2, regdate1];
    }

    var query = `
    SELECT u.code, 
           JSON_UNQUOTE(JSON_EXTRACT(c.data, '$.title')) AS title,
           COUNT(*) as code_count
    FROM userInfo u
    JOIN codeinfo c ON u.code = c.code  -- JOIN 추가
    WHERE 1`;
    if (regdate1 && regdate2) {
        query += ` AND regdate BETWEEN ? AND ?`;
    } else if (regdate1) {
        query += ` AND regdate >= ?`;
    } else if (regdate2) {
        query += ` AND regdate <= ?`;
    }

    if (code) {
        query += ` AND u.code = '` + code + `'`;
    }

    query += ' GROUP BY u.code';

    // 변경된 부분: 쿼리 실행 시에도 [regdate1, regdate2, code]를 전달하도록 변경
    req.db.query(query, [regdate1, regdate2, code], (queryErr, results) => {
        if (queryErr) {
            console.error('Error executing query:', queryErr);
            return res.status(500).json({ error: 'Error executing query' });
        }

        // 결과와 쿼리를 콘솔에 출력
        console.log('Query:', query);
        console.log('Results:', results);
        console.log(regdate1, regdate2)

        const label = results.map(result => result.title);
        const data = results.map(result => result.code_count);
        const code = results.map(result => result.code);

        const responseData = {
            labels: label,
            datasets: [{
                data: data,
                backgroundColor: ["#808080", "#33FF57", "#334DFF", "#FF33E6", "#33FFF2", "#FFC733", "#FF5733"],
                label: "사원수"
            }]
        }        

        // JSON 형태로 결과를 클라이언트에 응답
        res.json(responseData);
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