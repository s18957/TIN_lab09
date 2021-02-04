function ajaxOn() {
    let xhttp = new XMLHttpRequest();
    let data = JSON.stringify(
        {
            "num1": document.getElementById('num1').value,
            "num2": document.getElementById('num2').value,
            "operation": document.getElementById('document').value
        }
    );
    xhttp.open('POST', '/', true);
    xhttp.onload = () => {
        document.getElementById('result').innerHTML = JSON.parse(xhttp.response);
    }
    xhttp.send(data);
}