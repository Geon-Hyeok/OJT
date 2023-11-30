
document.getElementById("searchButton").addEventListener("click", searchFunction);
document.getElementById("input1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchFunction();
    }
});
function searchFunction() {
    var inputValue = document.getElementById("input1").value;
    var type = codecombo1.getValue();
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { target: type, query: inputValue },
        headers: { Authorization: "KakaoAK 9967a15a51e58445cac0de25f61a3ea4" }
    })
        .done(function (msg) {
            grid1.clear();
            grid1.appendData(msg.documents);
        });
}
