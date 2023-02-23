function login(){
    const user = document.getElementById("usuario").value;
    const password = document.getElementById("contra").value;

    if (user == "usuario1" && password=="contra1" || user=="usuario2" && password == "contra2"){
        window.location = 'Home2.html'
    } else{
        alert('Datos incorrectos')
    }
}

function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = '<span class="result">' + qrCodeMessage + '</span>';
}
function onScanError(errorMessage) {
    //handle scan error
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
