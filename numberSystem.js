function example() {
    var str = '[ \
        {"bin":"0","hex":"0","oct":""}, \
        {"bin":"1","hex":"1","oct":"1"}, \
        {"bin":"10","hex":"2","oct":"2"}, \
        {"bin":"11","hex":"3","oct":"3"}, \
        {"bin":"100","hex":"4","oct":"4"}, \
        {"bin":"101","hex":"5","oct":"5"}, \
        {"bin":"110","hex":"6","oct":"6"}, \
        {"bin":"111","hex":"7","oct":"7"}, \
        {"bin":"1000","hex":"8","oct":"10"}, \
        {"bin":"1001","hex":"9","oct":"11"}, \
        {"bin":"1010","hex":"a","oct":"12"}, \
        {"bin":"1011","hex":"b","oct":"13"}, \
        {"bin":"1100","hex":"c","oct":"14"}, \
        {"bin":"1101","hex":"d","oct":"15"}, \
        {"bin":"1110","hex":"e","oct":"16"}, \
        {"bin":"1111","hex":"f","oct":"17"}, \
        {"bin":"10000","hex":"10","oct":"20"}, \
        {"bin":"10001","hex":"11","oct":"21"}, \
        {"bin":"10010","hex":"12","oct":"22"}, \
        {"bin":"10011","hex":"13","oct":"23"}, \
        {"bin":"10100","hex":"14","oct":"24"}, \
        {"bin":"10101","hex":"15","oct":"25"}, \
        {"bin":"10110","hex":"16","oct":"26"}, \
        {"bin":"10111","hex":"17","oct":"27"}, \
        {"bin":"11000","hex":"18","oct":"30"}, \
        {"bin":"11001","hex":"19","oct":"31"}, \
        {"bin":"11010","hex":"1a","oct":"32"}, \
        {"bin":"11011","hex":"1b","oct":"33"}, \
        {"bin":"11100","hex":"1c","oct":"34"}, \
        {"bin":"11101","hex":"1d","oct":"35"}, \
        {"bin":"11110","hex":"1e","oct":"36"}, \
        {"bin":"11111","hex":"1f","oct":"37"}, \
        {"bin":"100000","hex":"20","oct":"40"}, \
        {"bin":"100001","hex":"21","oct":"41"}, \
        {"bin":"100010","hex":"22","oct":"42"}, \
        {"bin":"100011","hex":"23","oct":"43"}, \
        {"bin":"100100","hex":"24","oct":"44"}, \
        {"bin":"100101","hex":"25","oct":"45"}, \
        {"bin":"100110","hex":"26","oct":"46"}, \
        {"bin":"100111","hex":"27","oct":"47"}, \
        {"bin":"101000","hex":"28","oct":"50"}, \
        {"bin":"101001","hex":"29","oct":"51"}, \
        {"bin":"101010","hex":"2a","oct":"52"}, \
        {"bin":"101011","hex":"2b","oct":"53"}, \
        {"bin":"101100","hex":"2c","oct":"54"}, \
        {"bin":"101101","hex":"2d","oct":"55"}, \
        {"bin":"101110","hex":"2e","oct":"56"}, \
        {"bin":"101111","hex":"2f","oct":"57"}, \
        {"bin":"110000","hex":"30","oct":"60"}, \
        {"bin":"110001","hex":"31","oct":"61"} \
        ]';
    var arr = JSON.parse(str); // create object
    var html = '<table id="mytable">'; //string
    html += '<tr>';
    html += '<td><b>DEC</b></td>';
    html += '<td><b>BIN</b></td>';
    html += '<td><b>HEX</b></td>';
    html += '<td><b>OCT</b></td>';
    html += '</tr>';
    for (var i = 1, len = arr.length; i < len; i++) {
        html += '<tr>';
        html += '<td>' + (i) + '</td>';
        html += '<td>' + arr[i].bin + '</td>';
        html += '<td>' + arr[i].hex + '</td>';
        html += '<td>' + arr[i].oct + '</td>';
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById("result").innerHTML = html;
}