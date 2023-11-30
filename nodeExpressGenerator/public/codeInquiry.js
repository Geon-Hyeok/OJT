$(document).ready(function () {
    // 검색 버튼 클릭 시 이벤트 처리
    $('#button4').on('click', function () {
        // 입력된 검색 조건 가져오기
        var title = $('#input8').val();
        var desc = $('#input9').val();
        // 서버로 데이터를 요청하는 AJAX 호출
        $.ajax({
            url: '/codeInquiry',
            type: 'GET',
            data: { title: title, desc: desc },
            dataType: 'json',
            success: function (data) {
                grid2.clear();
                grid2.appendData(data);
            },
            error: function (error) {
                console.log('데이터를 가져오는 중 오류 발생:', error);
            }
        })
    });
});
