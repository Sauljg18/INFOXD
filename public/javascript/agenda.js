const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventCliente= document.querySelector(".event-cliente"),
  addEventid = document.querySelector(".event-id"),
  addEventColaborador = document.querySelector(".event-colaborador"),
  addEventDescripcion = document.querySelector(".event-descripcion"),
  addEventfecha = document.querySelector(".event-fecha"),
  addEventtipo = document.querySelector(".event-tipo"),
  addEventduracion = document.querySelector(".event-duracion"),
  addEventFrom = document.querySelector(".event-time-from "),
  addEventTo = document.querySelector(".event-time-to "),
  addEventSubmit = document.querySelector(".add-event-btn ");
  
 
  let botonactivar = document.getElementById("activar");
  let botonguardar = document.getElementById("guardar");


  botonactivar.style.display='none'; 

  botonguardar.onclick =function(){     //Funcion de boton 01
    botonactivar.style.display='block';   //Vista reaccion a boton
  }

  function openModal(id) {
    // Realiza una solicitud para obtener los datos de la tarea específica
    fetch(`/tarea/${id}`)
      .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar la tarea");
        return response.json();
      })
      .then(data => {
        // Llenar los campos del modal con los datos de la tarea
        document.getElementById('modalCliente').value = data.cliente;
        document.getElementById('modalColaborador').value = data.colaborador;
        document.getElementById('modalDescripcion').value = data.descripcion;
        document.getElementById('modalfecha').value = data.fecha;
        document.getElementById('modaltipo').value = data.tipo;
        
        // Mostrar el modal
        document.getElementById('modal').style.display = 'block';
      })
      .catch(error => console.error('Error al cargar los datos de la tarea:', error));
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const eventsArr = [
//   {
//     day: 13,
//     month: 11,
//     year: 2022,
//     events: [
//       {
//         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
//         time: "10:00 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
// ];

const eventsArr = [];
getEvents();
console.log(eventsArr);

//function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}

//function to add month and year on prev and next button
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

//function to add active on day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      //remove active
      days.forEach((day) => {
        day.classList.remove("active");
      });
      //if clicked prev-date or next-date switch to that month
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        //add active to clicked day afte month is change
        setTimeout(() => {
          //add active where no prev-date or next-date
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        //add active to clicked day afte month is changed
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Invalid Date");
}

//function get active day day name and date and update eventday eventdate
function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

// Evento para abrir el formulario de nueva tarea
addEventBtn.addEventListener("click", () => {
  addEventWrapper.classList.toggle("active");
});

// Evento para cerrar el formulario de nueva tarea
addEventCloseBtn.addEventListener("click", () => {
  addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    addEventWrapper.classList.remove("active");
  }
});

// Función para actualizar los eventos en el contenedor
function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event" onclick="openModal('${event.id}')">
          <div class="cliente">
            <h3 class="event-cliente">${event.cliente}</h3>
          </div>
          <div class="colaborador">
            <h3 class="event-colaborador">${event.colaborador}</h3>
          </div>
          <div class="descripcion">
            <h3 class="event-descripcion">${event.descripcion}</h3>
          </div>
          <div class="fecha" >
            <h3 class="event-fecha"></h3>
          </div>
          <div class="tipo" >
            <h3 class="event-tipo"></h3>
          </div>
        </div>`;
      });
    }
  });

  if (events === "") {
    events = `<div class="no-event"><h3>No Events</h3></div>`;
  }
  eventsContainer.innerHTML = events;
  saveEvents();
}


//allow 50 chars in eventtitle
addEventid.addEventListener("input", (e) => {
  addEventid.value = addEventid.value.slice(0, 60);
});

addEventCliente.addEventListener("input", (e) => {
  addEventCliente.value = addEventCliente.value.slice(0, 60);
});

addEventColaborador.addEventListener("input", (e) => {
  addEventColaborador.value = addEventColaborador.value.slice(0, 60);
});

addEventDescripcion.addEventListener("input", (e) => {
  addEventDescripcion.value = addEventDescripcion.value.slice(0, 60);
});

addEventfecha.addEventListener("input", (e) => {
  addEventfecha.value = addEventfecha.value.slice(0, 60);
});

addEventtipo.addEventListener("select", (e) => {
  addEventtipo.value = addEventtipo.value.slice(0, 60);
});


function defineProperty() {
  var osccred = document.createElement("div");
  
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

//function to add event to eventsArr
addEventSubmit.addEventListener("click", () => {

  const eventid = addEventid.value;
  const eventCliente = addEventCliente.value;
  const eventColaborador = addEventColaborador.value;
  const eventDescripcion = addEventDescripcion.value;
  const eventfecha= addEventfecha.value;
  const eventtipo= addEventtipo.value;
  if (eventid === ""|| eventColaborador === "" || eventCliente === "" || eventDescripcion === "" || eventfecha === "" || eventtipo === "") {
    alert("Please fill all the fields");
    return;
  }
  //check if event is already added
  let eventExist = false;
  eventsArr.forEach((event) => {
    if (
      event.day === activeDay &&
      event.month === month + 1 &&
      event.year === year
    ) {
      event.events.forEach((event) => {
        if (event.id === eventid) {
          eventExist = true;
        }
        if (event.cliente === eventCliente) {
          eventExist = true;
        }
        if (event.colaborador === eventColaborador) {
          eventExist = true;
        }
        if (event.descripcion === eventDescripcion) {
          eventExist = true;
        }
        if (event.fecha === eventfecha) {
          eventExist = true;
        }
        if (event.tipo === eventtipo) {
          eventExist = true;
        }
      });
    }
  });
  
  const newEvent = {
    id: eventid,
    cliente: eventCliente,
    colaborador: eventColaborador,
    descripcion: eventDescripcion,
    fecha: eventfecha,
    tipo: eventtipo,
  };
  console.log(newEvent);
  console.log(activeDay);
  let eventAdded = false;
  if (eventsArr.length > 0) {
    eventsArr.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }

  if (!eventAdded) {
    eventsArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent],
    });
  }
  console.log(eventsArr);
  addEventWrapper.classList.remove("active");
  addEventid.value = "";
  addEventCliente.value = "";
  addEventColaborador.value = "";
  addEventDescripcion.value = "";
  addEventfecha.value = "";
  addEventtipo.value = "";
  const tarea = req.body;
  // Corregir los nombres de las variables para que coincidan con el formulario

  updateEvents(activeDay);
  //select active day and add event class if not added
  const activeDayEl = document.querySelector(".day.active");
  if (!activeDayEl.classList.contains("event")) {
    activeDayEl.classList.add("event");
  }
});

// Funciones de almacenamiento
function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

function getEvents() {
  if (localStorage.getItem("events") === null) {
    return;
  }
  eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}
