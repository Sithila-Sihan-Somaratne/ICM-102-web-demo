function multiplicationTable() {
    var table;
    table = '<table id="mtable">';
    var num1 = document.getElementById("rows").value;
    var num2 = document.getElementById("columns").value;
    while (num1 == 12 && num2 == 12) {
        num1 = 1;
        num2 = 12;
    }
    for (i = 1; i <= 12; i++) {
        table += '<tr>';
        for (num = num1; num <= num2; num++) {
            table += '<td>' + num * i + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById("result").innerHTML = table;
}