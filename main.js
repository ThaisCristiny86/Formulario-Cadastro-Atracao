function validar()
{
var nome = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var rua = document.getElementById("rua");
var numero = document.getElementById("numero");
var celular = document.getElementById("celular");
if (nome.value==""){
alert("Favor preencher o nome completo");
return;
}

if (cpf.value==""){
    alert("Favor preencher o CPF"); 
return;
}

if (rua.value==""){
    alert("Favor preencher o nome da rua"); 
return;
}

if (numero.value==""){
 alert("Favor preencher o numero");
return;
}

if (celular.value==""){
    alert("Favor preencher o número de celular"); 
return;
}

alert ("Obrigada pelo envio!")


}

