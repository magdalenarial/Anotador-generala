var nombresLabels= ['1','2','3','4','5','6','Escalera','Full','Poker','Generala','Generala Doble','Total']

function generarColumnas(){
    var cantidad = document.getElementById("seleccionCantidad").value; // cantidad seleccionada en el select
    document.getElementById("divContenedor").innerHTML = ""; // limpia el container si ya se habia cargado
    var divContenedor = document.getElementById("divContenedor"); // contenedor del tablero de todas las jugadas
    for(let i=0; i<cantidad; i++){
        divContenedor.appendChild(generarTableros(i)); //agrega el tablero del jugador al container de tableros
    }
}

function generarTableros(i){
    var tableroJugador = document.createElement("DIV") // crea el tablero de un jugador
    var nombreJugador = document.createElement("h4"); 
    nombreJugador.innerHTML=`Jugador ${i+1}`; // nombre del jugador
    var atributoJugador = document.createAttribute("class"); 
    atributoJugador.value = "nombreJugador";
    nombreJugador.setAttributeNode(atributoJugador); // agrega el atributo clase al elemento
    tableroJugador.appendChild(nombreJugador); // agrega el elemento h4 al tablero del jugador
    for(let k=0; k<12; k++){ // agrega los labels y los inputs al tablero del jugador
        var lbl = document.createElement("LABEL");
        lbl.innerHTML = nombresLabels[k];
        var inpt = document.createElement("INPUT");
        inpt.type = "number";
        inpt.value = 0;
        inpt = definirMaxMinStep(inpt, k+1);
        tableroJugador.appendChild(lbl);
        tableroJugador.appendChild(inpt);
    }
    var att = document.createAttribute("class");
    att.value = "jugador";
    tableroJugador.setAttributeNode(att); // agrega el atributo clase al elemento
    return tableroJugador;
}

function definirMaxMinStep(inpt, value){ // reinicia a 0 el minimo, coloca el maximo y de cada cuanto a cuanto suma y resta
    switch(value){
        case 1:
            inpt.min = 0;
            inpt.step = 1;
            inpt.max = 6;
            break;
        case 2:
            inpt.min = 0;
            inpt.step = 2;
            inpt.max = 10;
            break;
        case 3:
            inpt.min = 0;
            inpt.step = 3;
            inpt.max = 15;
            break;
        case 4:
            inpt.min = 0;
            inpt.step = 4;
            inpt.max = 20;
            break;
        case 5:
            inpt.min = 0;
            inpt.step = 5;
            inpt.max = 25;
            break;
        case 6:
            inpt.min = 0;
            inpt.step = 6;
            inpt.max = 36;
            break;
        case 7:
            inpt.min = 0;
            inpt.step = 5;
            inpt.max = 25;
            break;
        case 8:
            inpt.min = 0;
            inpt.step = 5;
            inpt.max = 35;
            break;
        case 9:
            inpt.min = 0;
            inpt.step = 5;
            inpt.max = 45;
            break;
        case 10:
            inpt.min = 0;
            inpt.step = 5;
            inpt.max = 55;
            break;
        case 11:
            inpt.min = 0;
            inpt.step = 5;
            inpt.max = 65;
            break;
        case 12:
            inpt.min = 0;
            break;
    }
    return inpt;
}
