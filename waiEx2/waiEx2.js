var datas = [
    { "Ref_No": "DATA001", "Status": "0", "Branch": "1111", "CIF_No": "001122", "Type": "aaa", "Trans_Type": "01", "From_No": "32172873", "To_No": "98070300", "CCY": "IDR", "Amount": "1000.00", "Fee_Exmp": "Y", "Open_Date": "20231108", "Expire_Date": "20231109" }
  , { "Ref_No": "DATA002", "Status": "1", "Branch": "2222", "CIF_No": "112233", "Type": "bbb", "Trans_Type": "02", "From_No": "72011146", "To_No": "32172873", "CCY": "IDR", "Amount": "199.98", "Fee_Exmp": "Y", "Open_Date": "20231108", "Expire_Date": "20241108" }
  , { "Ref_No": "DATA003", "Status": "1", "Branch": "1111", "CIF_No": "223344", "Type": "ccc", "Trans_Type": "03", "From_No": "98070300", "To_No": "72011146", "CCY": "IDR", "Amount": "2011.42", "Fee_Exmp": "Y", "Open_Date": "20231109", "Expire_Date": "20231110" }
  , { "Ref_No": "DATA004", "Status": "0", "Branch": "3333", "CIF_No": "334455", "Type": "ddd", "Trans_Type": "01", "From_No": "12345678", "To_No": "87654321", "CCY": "USD", "Amount": "500.50", "Fee_Exmp": "N", "Open_Date": "20231110", "Expire_Date": "20231111" }
  , { "Ref_No": "DATA005", "Status": "1", "Branch": "4444", "CIF_No": "556677", "Type": "eee", "Trans_Type": "02", "From_No": "98765432", "To_No": "34567890", "CCY": "EUR", "Amount": "750.75", "Fee_Exmp": "N", "Open_Date": "20231111", "Expire_Date": "20241111" }
  , { "Ref_No": "DATA006", "Status": "0", "Branch": "5555", "CIF_No": "778899", "Type": "fff", "Trans_Type": "03", "From_No": "11223344", "To_No": "55667788", "CCY": "GBP", "Amount": "1200.00", "Fee_Exmp": "Y", "Open_Date": "20231112", "Expire_Date": "20231113" }
  , { "Ref_No": "DATA007", "Status": "1", "Branch": "6666", "CIF_No": "990011", "Type": "ggg", "Trans_Type": "01", "From_No": "11112222", "To_No": "33334444", "CCY": "JPY", "Amount": "900.90", "Fee_Exmp": "N", "Open_Date": "20231114", "Expire_Date": "20241114" }
  , { "Ref_No": "DATA008", "Status": "0", "Branch": "7777", "CIF_No": "112233", "Type": "hhh", "Trans_Type": "02", "From_No": "55556666", "To_No": "77778888", "CCY": "AUD", "Amount": "1500.00", "Fee_Exmp": "Y", "Open_Date": "20231115", "Expire_Date": "20231116" }
  , { "Ref_No": "DATA009", "Status": "1", "Branch": "8888", "CIF_No": "445566", "Type": "iii", "Trans_Type": "03", "From_No": "99990000", "To_No": "12341234", "CCY": "CAD", "Amount": "1800.18", "Fee_Exmp": "N", "Open_Date": "20231117", "Expire_Date": "20231118" }
  , { "Ref_No": "DATA010", "Status": "0", "Branch": "9999", "CIF_No": "778899", "Type": "jjj", "Trans_Type": "01", "From_No": "12344321", "To_No": "87655432", "CCY": "USD", "Amount": "2000.00", "Fee_Exmp": "Y", "Open_Date": "20231119", "Expire_Date": "20241119" }
  , { "Ref_No": "DATA011", "Status": "1", "Branch": "1111", "CIF_No": "223344", "Type": "kkk", "Trans_Type": "02", "From_No": "98766543", "To_No": "34567654", "CCY": "EUR", "Amount": "2250.25", "Fee_Exmp": "N", "Open_Date": "20231120", "Expire_Date": "20231121" }
  , { "Ref_No": "DATA012", "Status": "0", "Branch": "2222", "CIF_No": "334455", "Type": "lll", "Trans_Type": "03", "From_No": "11223344", "To_No": "55667788", "CCY": "GBP", "Amount": "2800.00", "Fee_Exmp": "Y", "Open_Date": "20231122", "Expire_Date": "20231123" }
  , { "Ref_No": "DATA013", "Status": "1", "Branch": "3333", "CIF_No": "556677", "Type": "mmm", "Trans_Type": "01", "From_No": "11112222", "To_No": "33334444", "CCY": "JPY", "Amount": "3050.50", "Fee_Exmp": "N", "Open_Date": "20231124", "Expire_Date": "20241124" }
  , { "Ref_No": "DATA014", "Status": "0", "Branch": "4444", "CIF_No": "778899", "Type": "nnn", "Trans_Type": "02", "From_No": "55556666", "To_No": "77778888", "CCY": "AUD", "Amount": "3500.00", "Fee_Exmp": "Y", "Open_Date": "20231125", "Expire_Date": "20231126" }
  , { "Ref_No": "DATA015", "Status": "1", "Branch": "5555", "CIF_No": "990011", "Type": "ooo", "Trans_Type": "03", "From_No": "99990000", "To_No": "12341234", "CCY": "CAD", "Amount": "3800.18", "Fee_Exmp": "N", "Open_Date": "20231127", "Expire_Date": "20231128" }
  , { "Ref_No": "DATA016", "Status": "0", "Branch": "6666", "CIF_No": "112233", "Type": "ppp", "Trans_Type": "01", "From_No": "12344321", "To_No": "87655432", "CCY": "USD", "Amount": "4000.00", "Fee_Exmp": "Y", "Open_Date": "20231129", "Expire_Date": "20241129" }
];

function grid1Recordclick(event) {
  var grid = event.args["grid"];
  var data = grid.getSelection();
  Ref_No.val(data.Ref_No);
  CIF_No.val(data.CIF_No);
  Trans_Type.val(data.Trans_Type);
  From_No.val(data.From_No);
  To_No.val(data.To_No);
  Amount.val(data.Amount);
  Open_Date.val(data.Open_Date);
  Expire_Date.val(data.Expire_Date);
}


function button1Click(event) {
  var searchRef = input_Ref_No.value.toUpperCase();
  var searchTR = combo_Trans_Type.value;
  var searchCIF = edit_CIF_No.value;
  var searchOpen = edit_Open_Date.value;
  var searchExpire = edit_Expire_Date.unmaskedValue();

  var filteredData = datas.filter(function(data) {
    return (data.Ref_No.includes(searchRef) || searchRef === "") &&
           (data.Trans_Type.includes(searchTR) || searchTR === "") &&
           (data.CIF_No.includes(searchCIF) || searchCIF === "") &&
           ((data.Open_Date >= searchOpen && data.Expire_Date <= searchExpire) || searchExpire === "" && searchOpen === "");
  });
  console.log(searchCIF);
  console.log(searchOpen);
  console.log(searchExpire);
  if(filteredData.length > 0){
    grid1.setData(filteredData);
  } else {
    grid1.clear();
  }
}