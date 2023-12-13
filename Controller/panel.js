
date = () => {
    let date = new Date();
    const days = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const Months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let day = date.getDay();
    let dayy = date.getDate();
    let Month = date.getMonth();
    const p = document.querySelector('.p');
    p.append(`${days[day - 1]} ${dayy} de ${Months[Month]}`);
}
addTask = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const input = document.querySelector('#input');
        const ul = document.querySelector('#miLista');
        const div = document.querySelector('.div');
        let cont = 0;
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                if (input.value) {
                    if (cont <= 9) {
                        div.classList.add('show')
                        let li = document.createElement('li');
                        const img = document.createElement('img');
                        const h6 = document.createElement('h6');
                        const radio = document.createElement('div');
                        radio.classList.add('radio');
                        h6.textContent = "Tarea";
                        h6.classList.add('h6');
                        img.src = '../Icons/mas.png';
                        img.classList.add('img');
                        const fragmento = document.createDocumentFragment();
                        fragmento.appendChild(document.createTextNode(input.value));
                        fragmento.appendChild(document.createTextNode(' '));
                        fragmento.appendChild(img);
                        fragmento.appendChild(h6);
                        fragmento.appendChild(radio);
                        li.innerHTML = '';
                        li.appendChild(fragmento);
                        li.classList.add(`li${cont}`);
                        ul.appendChild(li);
                        change(radio);
                        clean(input);
                        cont += 1;

                    } else {
                        alert("Termina las tareas pendientes");
                        clean(input);
                    }
                } else {
                    alert("Agregue una terea")
                }
            }

        });
    })
}

let getData =()=>{
    let data = localStorage.getItem('USER');
    let dataSave = JSON.parse(data)
    console.log(dataSave.name);

    console.log(dataSave.email);

    let h4 = document.createElement('h4');
    let h6 = document.createElement('h6');

    h4.textContent = dataSave.name;
    h6.textContent = dataSave.email;
     
    let fragmento = document.createDocumentFragment();
    fragmento.appendChild(h4)
    fragmento.appendChild(h6);
    let header = document.querySelector('.data');
    header.appendChild(fragmento)


}
let clean = (input) => {
    input.value = '';
}

let change = (radio) => {
    radio.addEventListener('click', () => {
        radio.classList.toggle('changeColor');
    });
}
getData();
date();
addTask();