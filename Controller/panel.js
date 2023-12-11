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
date();