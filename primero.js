function promedio(nota1, nota2, nota3){
    let resultado= (nota1+nota2+nota3)/3;
    console.log('El promedio 1 es: ' +resultado);
}

let promedio2 = (nota1, nota2, nota3)=>{
    setTimeout(function(){
        let resultado= (nota1+nota2+nota3)/3;
        console.log('El promedio 2 es: ' + resultado);
    }, 2000);
}

let promedio3=(nota1, nota2, nota3)=>
    console.log('El promedio 3 es: ' + (nota1+nota2+nota3)/3);

promedio(2,3,4);
promedio2(1,3,4);
promedio3(2,4,4);