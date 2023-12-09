function guardatUsuario(){
    const email = document.querySelector('.email').value,
    password = document.querySelector('.pass').value,
    name = document.querySelector('.name').value,
    lasName = document.querySelector('.lastName').value;

    if(email && password){
        const datos = {
            name: name,
            lasName: lasName,
            email: email,
            password: password
        };
        const datosJson = JSON.stringify(datos);
        localStorage.setItem('USER',datosJson);
        alert('se ha guardado el usuario correctamente');
    }else{
        alert('Por favor, complete ambos campos');
    }
}

const btton = document.querySelector('.btton');

btton.addEventListener('click',guardatUsuario);