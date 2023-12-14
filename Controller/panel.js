const input = document.querySelector('#input');
let cont = 0;
const div = document.querySelector('.div');
const bom = document.querySelector('.bom');
const sug = document.querySelector('.sug');
const sugerencias = document.querySelector('.sugerencias');
// Lista de tareas diarias
var tareasDiarias = [
    "Desayunar saludablemente",
    "Revisar y responder correos electrónicos",
    "Completar la tarea/proyecto más urgente",
    "Programar descansos cortos para mantenerte productivo/a",
    "Revisar y actualizar el progreso en proyectos pendientes"
];

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
addTask = (input) => {
    document.addEventListener("DOMContentLoaded", () => {
        const ul = document.querySelector('#miLista');
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
                        img.src = '../Icons/borrar.png';
                        img.classList.add(`img${cont}`);
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
                        img.addEventListener('click', onClickDelete);
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
let getData = () => {
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

let visibility = (element) => {
    element.classList.toggle('showlist');

}
let fragmento = (element) => {
    let fragmento = document.createDocumentFragment();
    fragmento.appendChild(element);
}

function onClickDelete() {
    this.parentNode.remove();
    cont -= 1;
    if (cont === 0) {
        div.classList.toggle('show');
    }
}

// Función para obtener una tarea aleatoria
function obtenerTareaAleatoria(listaTareas) {
    var indiceAleatorio = Math.floor(Math.random() * listaTareas.length);
    return listaTareas[indiceAleatorio];
}

bom.addEventListener('click', () => {
    // Obtener una tarea aleatoria
    var tareaAleatoria = obtenerTareaAleatoria(tareasDiarias);

    // Agregar la tarea a sug y esperar un segundo
    new Promise((resolve, reject) => {
        setTimeout(() => {
            sugerencias.classList.toggle('showS');
            sugerencias.style.transform = 'scale(1)';
            sug.innerHTML = tareaAleatoria;
            resolve();
        }, 0);
    })
    // Después de otro segundo, limpiar el contenido de sug
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                sugerencias.classList.toggle('showS');
                sugerencias.style.transform = 'scale(0.5)';
                sug.innerHTML = '';
                resolve();
            }, 3000);
        });
    });
});


getData();
date();
addTask(input);













































let onClickEdit = () => {
    // Función para manejar el clic en cualquier elemento
    function handleClick(event) {
        // Obtiene el elemento que fue clicado
        var targetElement = event.target;

        // Obtiene la clase y el ID del elemento
        var elementClass = targetElement.className;
        var elementId = targetElement.id;
        //Obtenemos el contenido actual de ese elemento
        var content = targetElement.innerText;


        // Buscamos al elemento que fue clicleado si existe
        let li = ["li0", "li1", "li2", "li3", "li4", "li5", "li6", "li7", "li8", "li9"]
        let exits = li.indexOf(elementClass);

        if (exits !== -1) {
            let s = document.querySelector('.second');
            let h = document.querySelector('.connten');
            let r = document.querySelector('.radio2')
            // Muestra la información en la consola
            console.log("Elemento clicado: ", targetElement);
            console.log("Clase del elemento: ", elementClass);
            console.log("ID del elemento: ", elementId);
            let newContent = prompt("Ediciion de la tarea");
            targetElement.textContent = newContent;
            s.classList.add('showSecond');
            h.classList.add('showSecond');
            r.classList.add('showSecond');
        }
    }

    // Agrega el evento clic a todos los li en el DOM
    var allElements = document.querySelectorAll("li");
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].addEventListener("click", (event) => {
            handleClick(event);
        });
    }
}