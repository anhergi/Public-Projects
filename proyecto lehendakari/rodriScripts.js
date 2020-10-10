
var logo = document.getElementById("logo");

var presentationPage = document.getElementById("presentationPage");
var servicios = document.getElementById("servicios");
var proyectos = document.getElementById("proyectos"); 
var proyecto = document.getElementById("proyecto"); 
var sobreMi = document.getElementById("sobreMi");
var contacto = document.getElementById("contacto");

var opcionesArray = [presentationPage, servicios, proyectos, sobreMi, contacto];
var lastOption = "presentationPage";

var lisMenu = document.getElementsByClassName('menuItem');
var liServicios = document.getElementsByClassName('menuItem')[0];
var liProyectos = document.getElementsByClassName('menuItem')[1];
var liSobreMi = document.getElementsByClassName('menuItem')[2];
var liContacto = document.getElementsByClassName('menuItem')[3];

var buttonStop = document.getElementsByClassName('stop-button')[0];
var buttonStart = document.getElementsByClassName('start-button')[0];

var projects = document.getElementsByClassName('card-project');
var urlImgProject = ["img/iconoRodri.jpeg", "img/imgRodri1.jpeg", "img/imgRodri2.jpeg"];


var imagenActiva = 0;
var imagenesSlider = document.getElementsByClassName('slider-img');
var processActive = true;
var timer;

logo.onclick = function () {
    clickMenu("presentationPage");
    transformBold(-1);
}
liServicios.onclick = function () {
    clickMenu("servicios");
    transformBold(0);
}
liProyectos.onclick = function () {
    clickMenu("proyectos");
    transformBold(1);
}
liSobreMi.onclick = function () {
    clickMenu("sobreMi");
    transformBold(2);
}
liContacto.onclick = function () {
    clickMenu("contacto");
    transformBold(3);
}

for (let i = 0; i < projects.length; i++) {
    projects[i].onclick = () => {
        proyectos.style.display = "none";
        // proyectos.style.transition = "all .5s ease-in-out"
        proyecto.style.display = "block";
        proyecto.style.backgroundImage = "url(" + urlImgProject[i] + ")";
    }
}

presentationInit();

function presentationInit() {
    imagenActiva = 0;
    processActive = true;
    imagenesSlider[imagenActiva].classList.add("active");
    timer = setTimeout(changeImgDer, 3000);
    // changeStateButtons();
}

function clickMenu(opcion) {
    for (let i = 0; i < opcionesArray.length; i++) {
        if (opcion == opcionesArray[i].id) {
            opcionesArray[i].style.display = "block";
        } else {
            opcionesArray[i].style.display = "none";
        }
    }
    if (opcion === opcionesArray[0].id && lastOption !== opcionesArray[0].id) {
        imagenesSlider[imagenActiva].classList.remove("active");
        clearTimeout(timer);
        presentationInit();
    }
    lastOption = opcion;
    proyecto.style.display = "none";
}

function clickProject() {
    proyectos.style.display = "none";
    proyecto.style.display = "block";
}

function comeBackProject() {
    proyecto.style.display = "none";
    proyectos.style.display = "block";
}

function transformBold(index) {
    for (let i = 0; i < lisMenu.length; i++) {
        if (i === index) {
            lisMenu[i].classList.add("activo");
        } else {
            lisMenu[i].classList.remove("activo");
        }
    }
}

function changeImgDer() {
    imagenesSlider[imagenActiva].classList.remove("active");
    if (imagenActiva < imagenesSlider.length - 1) {
        imagenesSlider[imagenActiva + 1].classList.add("active");
        imagenActiva++;
    } else {
        imagenesSlider[0].classList.add("active");
        imagenActiva = 0;
    }

    if (processActive) {
        timer = setTimeout(changeImgDer, 3000);
    }
}

function changeImgIzq() {
    imagenesSlider[imagenActiva].classList.remove("active");
    if (imagenActiva > 0) {
        imagenesSlider[imagenActiva - 1].classList.add("active");
        imagenActiva--;
    } else {
        imagenesSlider[imagenesSlider.length - 1].classList.add("active");
        imagenActiva = imagenesSlider.length - 1;
    }

    if (processActive) {
        timer = setTimeout(changeImgDer, 3000);
    }
}

function leftSlider() {
    clearTimeout(timer);
    processActive = false;
    changeImgIzq();
}

function rightSlider() {
    clearTimeout(timer);
    processActive = false;
    changeImgDer();
}

function stopSlider() {
    clearTimeout(timer);
    processActive = false;
    changeStateButtons();
}

function startSlider() {
    processActive = true;
    changeImgDer();
    changeStateButtons();
}

// function changeStateButtons() {
//     buttonStart.disabled = processActive;
//     buttonStop.disabled = !processActive;
// }