function SaveInput()
{
    var a = document.getElementById("input").value;
    var begin   = Number(document.getElementById("OgNumberType").value);
    var end     = Number(document.getElementById("EndNumberType").value);
    if ((begin == 2 || end == 2) && (a < 0)) {document.getElementById("Result").innerHTML = 'That is a negative value. Please enter a new positive value.'}
    else  document.getElementById("Result").innerHTML = parseInt(a,begin).toString(end);
}