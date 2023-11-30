$(document).ready(function () {
    // 검색 버튼 클릭 시 이벤트 처리
    $('#button1').on('click', function () {
        // 입력된 검색 조건 가져오기
        var id = $('#input1').val();
        var name = $('#input2').val();
        var email = $('#input3').val();
        var code = $('#codecombo1').val();
        // 서버로 데이터를 요청하는 AJAX 호출
        $.ajax({
            url: '/user',
            type: 'GET',
            data: { id: id, name: name, email: email, code: code },
            dataType: 'json',
            success: function (data) {
                grid1.clear();
                grid1.appendData(data);
            },
            error: function (error) {
                console.log('데이터를 가져오는 중 오류 발생:', error);
            }
        })
    });

    // 등록 버튼 클릭 시 이벤트 처리
    $('#register').on('click', function () {
        // 입력된 검색 조건 가져오기
        var name = $('#input4').val();
        var age = $('#input5').val();
        var email = $('#input6').val();
        var code = codecombo2.getValue();
        // 서버로 데이터를 요청하는 AJAX 호출
        console.log(name, age, email, code);
        $.ajax({
            url: '/user',
            type: 'POST',
            dataType: 'json',
            data: { name: name, age: age, email: email, code: code },
            success: function (data) {
                alert("삽입 완료");
                location.reload();
            },
            error: function (error) {
                console.log('데이터를 가져오는 중 오류 발생:', error);
            }
        })
    });


    $('#button2').on('click', function () {
        var id = grid1.getSelection().id;
        console.log(id);
        $.ajax({
            url: '/user?id=' + id,
            type: 'DELETE',
            success: function (data) {
                console.log('Delete successful:', data);
                grid1.deleteRow();
            },
            error: function (error) {
                console.error('Error deleting user:', error);
                console.log(url);
            }
        });
    });


        // 페이지 로딩 시에 서버에서 데이터 가져오기
        $.ajax({
            type: 'GET',
            url: '/user/codecombo', // 실제 서버 엔드포인트로 수정
            success: function (data) {
                // 서버에서 받은 데이터를 CodeCombo에 설정
                codecombo1.setData(data);
                codecombo2.setData(data);
                console.log(data);
            },
            error: function (error) {
                console.error('Error fetching data:', error);
            }
        });
    });
    
