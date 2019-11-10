var apiBase = "https://private-anon-42137e8580-witei.apiary-proxy.com/api/v1/tasks/";
var token = "Bearer 16002a3e-983e-438b-9d4e-cc461744646e";

function addTaskPage() {
    // console.log("clickado boton", apiBase, token);
    // addTask();
    location.href = 'addTask.html';
}

function cancelTask() {
    location.href = 'tasks.html';
}

function saveTask() {
    console.log();
}

function getAllTask() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', token);

    return fetch(apiBase, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(response => {
        response.json()
        .then(data => {
            var lista = data.results.filter(r => r.done);
            createTable(lista);
        })
      })
      .catch((error) => {
        console.error(error);
      });
    //     var res = new XMLHttpRequest();
    // res.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       //document.getElementById("get").innerHTML = this.responseText;
    //     //   destinos = this.responseText;
    //     }
    //   };
    //   res.open("GET", apiBase, true);
    //   res.setRequestHeader("Authorization", token);
    //   res.send();
  }

function addTask(task) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', token);

    return fetch(apiBase + "add", {
        method: 'POST',
        body: JSON.stringify(task),
        headers: myHeaders,
      })
        .then(response => {
          response.json()
          .then(data => {
            console.log(data);
          })
        })
        .catch((error) => {
          console.error(error);
        });

}

function createTable(lista) {
    var body = document.getElementsByTagName("body")[0];
 
    // Crea <table>, <thead> y <tbody>
    var tabla   = document.createElement("table");
    var theader = document.createElement("thead");
    var tblBody = document.createElement("tbody");

    // Crea columnas
    var rowHeader = document.createElement("tr");
    for (const field in lista[0]) {
        var fieldHeader = document.createElement("th");
        var textFieldHeader = document.createTextNode(field);
        fieldHeader.appendChild(textFieldHeader);
        rowHeader.appendChild(fieldHeader);
    }
    theader.appendChild(rowHeader);

    // Crea las celdas
    for (var i = 0; i < lista.length; i++) {
      var rows = document.createElement("tr");
   
      for (const field in lista[i]) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(lista[i][field]);
        celda.appendChild(textoCelda);
        rows.appendChild(celda);
      }
   
      tblBody.appendChild(rows);
    }
   
    tabla.appendChild(theader);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}