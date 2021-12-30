//var resultado = confirm("deseja excluir?");

/*
console.log(resultado);
*/

/*
var a = 3;
var b = 2;
*/

function somar(a, b){

    return a + b;

}

function multiplicar(a, b){

    return (a) * (b);

}

function dividir(a, b){

    return a / b;

}

function subtrair(a, b){

    return a - b;

}

console.log(somar(5, 3));
console.log(multiplicar(2, 6));
console.log(dividir(7, 15));
console.log(subtrair(4, 6));

document.querySelector("#Calcular").addEventListener("click",function (){

    let ValorA = document.querySelector("#ValorA").value;
    let ValorB = document.querySelector("#ValorB").value;
    
    if (ValorA.length > 0 && ValorB.length > 0) {
        
        alert(parseInt(ValorA)* parseInt(ValorB));
    
    }else{
        
        alert("Coloque Os Números");
    
    }
    

});