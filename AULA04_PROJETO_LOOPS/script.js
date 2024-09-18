/*
//whire = enquanto

var x = 0;
document.write("<br>Testando o loop com whire ");
while(x<10){
    document.write('<br>O valor de x é: '+x);
    //incremento de x 
    //x = x+1 
    x++;
}

//for = para
var valor = 13
document.write('<br><br>Testando o loop com For')
for(a=0;a<=valor;a++){
    document.write("<br>O valor de a é: "+a);
    console.log(a*2);

}
*/

// switch =  tratar escolha (escolha)

function pedir(){
    var valor = prompt("Digite uma opção de 1 a 4")
    
    console.log(valor);
    console.log(typeof valor);
    console.log(typeof Number(valor));
    console.log(valor);

    switch(Number(valor)){
        case 1:
            alert("Voce escolheu suco");
            break;
        case 2:
            alert("Voce escolheu Agua gelada");
            break;
        case 3:
            alert("Voce escolheu Sorvete");
            break;               
        case 4:
            alert("Voce escolheu Chamar o garçom");
            break;
        default:
            alert('Escolha de 1 até 4');
            break;

        
    }
}