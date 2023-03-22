document.addEventListener("DOMContentLoaded", function() {
    //Parte 1, variables nombres
    let txtFriendNameOne = document.getElementById("txtFriendNameOne");
    let txtFriendNameTwo = document.getElementById("txtFriendNameTwo");
    let txtFriendNameThree = document.getElementById("txtFriendNameThree");
    //let btnCalcularNames = document.getElementById("btnCalcularNames");
    //let resultadoNames = document.getElementById("resultadoNames");
    //Parte 2, variables edades
    let txtFriendAgeOne = document.getElementById("txtFriendAgeOne");
    let txtFriendAgeTwo = document.getElementById("txtFriendAgeTwo");
    let txtFriendAgeThree = document.getElementById("txtFriendAgeThree");
    //let btnCalcularAges = document.getElementById("btnCalcularAges");
    //let resultadoAges = document.getElementById("resultadoAges");
    
    let btnCalcular = document.getElementById("btnCalcular");
    let resultado = document.getElementById("resultado");
    //Parte 1, evento nombres
    /*btnCalcularNames.addEventListener("click", function(event) {
        event.preventDefault(); 
        //Resultado Consola
        console.log("Resultado: "+
        mensajeDeBienvenida(txtFriendNameOne.value, txtFriendNameTwo.value, txtFriendNameThree.value)); 
        //Resultado en el DOM
        resultadoNames.innerHTML ="<strong>Resultado: </strong>"+
        mensajeDeBienvenida(txtFriendNameOne.value, txtFriendNameTwo.value, txtFriendNameThree.value);
    });
    
    //Parte 2, evento edades
    btnCalcularAges.addEventListener("click", function(event) {
        event.preventDefault(); 
        //Resultado en consola
        console.log("Edad aproximada de Friend 1 es "+edadAproximada(txtFriendAgeOne.value)+
        ", Friend 2 es "+edadAproximada(txtFriendAgeTwo.value)+
        ", Friend 3 es "+edadAproximada(txtFriendAgeThree.value));
        
        //Resultado en el DOM
        resultadoAges.innerHTML ="Edad aproximada de Friend 1 es "+edadAproximada(txtFriendAgeOne.value)+
        ", Friend 2 es "+edadAproximada(txtFriendAgeTwo.value)+
        ", Friend 3 es "+edadAproximada(txtFriendAgeThree.value);
    });
    */
    
    //Parte 3, eventos nombres y edades
    btnCalcular.addEventListener("click", function(event) {
        event.preventDefault(); 
        //Resultado en consola
        console.log("Welcome "+txtFriendNameOne.value+", you are "+edadAproximada(txtFriendAgeOne.value)+
        ". <br> Welcome "+txtFriendNameTwo.value+", you are "+edadAproximada(txtFriendAgeTwo.value)+
        ". <br> Welcome "+txtFriendNameThree.value+", you are "+edadAproximada(txtFriendAgeThree.value));
         
        //Resultado en el DOM
        resultado.innerHTML ="Welcome "+txtFriendNameOne.value+", you are "+edadAproximada(txtFriendAgeOne.value)+
        ". <br> Welcome "+txtFriendNameTwo.value+", you are "+edadAproximada(txtFriendAgeTwo.value)+
        ". <br> Welcome "+txtFriendNameThree.value+", you are "+edadAproximada(txtFriendAgeThree.value);
    });
});

function transactionTotal(transaction) {
    //buscamos el total, le agregamos 3 dolares y 0.01 de la transaccion original
    let total = parseInt(transaction)+3+((transaction/100)*0.01);
    return(total);
}//transactionTotal

function mensajeDeBienvenida(nameOne, nameTwo, nameThree) {
    let mensaje = "Bienvenidos "+nameOne+", "+nameTwo+", "+nameThree+"!";
    return (mensaje);
}//mensajeDeBienvenida

function edadAproximada(anioNacimiento) {
    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    return (anioActual-anioNacimiento);
}//edadAproximada

console.log(edadAproximada(1996));
console.log("-----------"); 

function edadExacta(anioNac,mesNac,diaNac) {
    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    let mesActual = fecha.getMonth()+1;
    let diaActual = fecha.getDate(); 

    let calAnios = (anioActual-anioNac)-1;
    
    let calMeses = (mesActual)+(12-mesNac);
    console.log("meses"+calMeses);
    if (calMeses >= 12) {          
        calAnios=calAnios+1;
        calMeses=calMeses-12;
    }

    let calDias = (diaActual)+(30-diaNac);
    if (calDias >= 30) {          
        calMeses=calMeses+1;
        calDias=calDias-30;
    }

    return (calAnios+" años, "+calMeses+" meses y "+calDias+" Dias!");
}
console.log(edadExacta(1996,4,25));  