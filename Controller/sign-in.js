function signIn() {
    const email = document.querySelector('.email').value,
        password = document.querySelector('.pass').value;
    const data = localStorage.getItem('USER');
    console.log(data)

    if (data) {
        const dataSave = JSON.parse(data);
        if (email == dataSave.email && password == dataSave.password) {
            window.location.href = '../View/panel.html';
        } else {
            alert("Datos incorrectos");
        }
    } else {
        alert("No hay datos de usuario almacenado");
    }
}
const btton = document.querySelector('.btton');
btton.addEventListener('click', signIn);