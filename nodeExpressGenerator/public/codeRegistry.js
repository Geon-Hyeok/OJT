$(document).ready(function () {
    // 등록 버튼 클릭 시 이벤트 처리
    $('#button1').on('click', function () {
        // 입력된 검색 조건 가져오기
        var code = $('#input1').val();
        var title = $('#input2').val();
        var desc = $('#input3').val();
        
        // 서버로 데이터를 요청하는 AJAX 호출
        console.log(code, title, desc);
        $.ajax({
            url: '/codeRegistry',
            type: 'POST',
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify({ code: code, title: title, desc: desc }), // 객체를 JSON 문자열로 변환
            success: function (data) {
                alert("삽입 완료");
                location.reload();
                
            },
            error: function (error) {
                console.log('데이터를 가져오는 중 오류 발생:', error);
            }
        });
    });
});
