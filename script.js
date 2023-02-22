function login(){
    const user = document.getElementById("usuario").value;
    const password = document.getElementById("contra").value;

    if (user == "usuario1" && password=="contra1" || user=="usuario2" && password == "contra2"){
        window.location = 'Home2.html'
    } else{
        alert('Datos incorrectos')
    }
}