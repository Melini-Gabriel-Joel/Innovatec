//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar {
    constructor(selector, date = new Date()) {
        this.calendar = document.querySelector(selector);
        this.date = date;
        this.selectedDate = new Date();
        this.createHeader();
        this.createWeekDays();
        this.createDays();
    }

    createHeader() {
        const title = this.calendar.querySelector('.calendar-title');
        title.textContent = monthNames[this.date.getMonth()] + ' ' + this.date.getFullYear();
    }

    createWeekDays() {
        const weekDaysContainer = this.calendar.querySelector('.calendar-week-days');
        weekDays.forEach(day => {
            const weekDay = document.createElement('div');
            weekDay.textContent = day;
            weekDay.classList.add('calendar-week-day');
            weekDaysContainer.appendChild(weekDay);
        });
    }

    createDays() {
        const year = this.date.getFullYear();
        const month = this.date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        const daysContainer = this.calendar.querySelector('.calendar-days');
        daysContainer.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            const day = document.createElement('div');
            day.classList.add('calendar-day');
            daysContainer.appendChild(day);
        }

        for (let i = 1; i <= lastDay; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            day.classList.add('calendar-day');

            if (i === this.selectedDate.getDate() && this.date.getMonth() === this.selectedDate.getMonth() && this.date.getFullYear() === this.selectedDate.getFullYear()) {
                day.classList.add('calendar-selected');
            }

            if (i === this.date.getDate()) {
                day.classList.add('calendar-today');
            }

            day.addEventListener('click', () => {
                this.selectedDate.setDate(i);
                this.createDays();
            });

            daysContainer.appendChild(day);
        }
    }
}

new Calendar('.calendar');