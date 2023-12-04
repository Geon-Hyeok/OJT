$(document).ready(function () {
 $('#button1').on('click', function () {
    var regdate1 = $('#dateedit1').val();
    var regdate2 = $('#dateedit2').val();
    var code = $('#codecombo1').val();

    $.ajax({
        url: '/dataChart',
        type: 'GET',
        data: {regdate1: regdate1, regdate2: regdate2, code: code},
        dataType: 'json',
        success: function (data) {
            document.getElementById('button2').removeAttribute('disabled');
            document.getElementById('button3').removeAttribute('disabled');
            chart1.setData(data);
            chart2.setData(data);          
        },
        error: function (error) {
            console.log('데이터를 가져오는 중 오류 발생:', error);
        }
    })
});

$('#button2').on('click', function () {
    // chart1의 type을 doughnut으로 변경
    $('#chart1').css('display', 'block');
    $('#chart2').css('display', 'none');
});
$('#button3').on('click', function () {
    // chart1의 type을 doughnut으로 변경
    $('#chart2').css('display', 'block');
    $('#chart1').css('display', 'none');
});

// 페이지 로딩 시에 서버에서 데이터 가져오기
$.ajax({
    type: 'GET',
    url: '/dataChart/codecombo', // 실제 서버 엔드포인트로 수정
    success: function (data) {
        // 서버에서 받은 데이터를 CodeCombo에 설정
        codecombo1.setData(data);
    },
    error: function (error) {
        console.error('Error fetching data:', error);
    }
});

});