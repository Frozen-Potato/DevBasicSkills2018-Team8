function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

function randomN() {
        var begin = Number(document.getElementById("begin").value);
        var end = Number(document.getElementById("end").value);
        var numberOfRan = Number(document.getElementById("noor").value);
        var numberOfRange = 10;
        var a = [];
        var int = 0;
        var b = [];
        for (var i = 0; i < numberOfRange; i++) {
                a[i] = int + Math.floor((end - begin)/numberOfRange + begin);
                int = a[i];
                b[i] = 0;
        };
        a[numberOfRange] = end;
        for (var i = 1; i < numberOfRan; i++ ){
                var ran = getRandomInt(end - begin) + begin;
                for (var k = 0; k < numberOfRange; k++)
                {
                        if (((k > 0) && (ran <= a[k]) && (ran >=a[k-1])) || ((k == 0) && (ran < a[0])) )  {
                                b[k]++;
                        }
                }
        }
        var html = '<table id="mytable2">';
        html += '<tr>';
        html += '<td>' + (begin) + '-' + (a[0]) + '</td>';
        for (var i = 1; i < numberOfRange-1; i++) {
                html += '<td>' + (a[i-1] + 1) + '-' + (a[i]) + '</td>';
        }
        html += '<td>' + (a[numberOfRange-2] + 1) + '-' + (end) + '</td>';
        html += '</tr>';
        html += '<tr>';
        for (var i = 0; i < numberOfRange; i++) {
                html += '<td>' + (b[i]) + '</td>';
        }
        html += '</tr>';
        html += '</table>';
        document.getElementById("result").innerHTML = html;

}