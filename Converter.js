function SaveInput()
{
    var a = document.getElementById("input").value;
    var begin   = Number(document.getElementById("OgNumberType").value);
    var end     = Number(document.getElementById("EndNumberType").value);
    document.getElementById("Result").innerHTML = parseInt(a,begin).toString(end);
}