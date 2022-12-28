const bEncriptar = document.querySelector(".encriptar");
const bDesencriptar = document.querySelector(".desencriptar");
var textoEncriptado = document.querySelector(".resultado");
var texto = document.querySelector(".texto");
var imagen = document.querySelector(".candado-abierto");
let bCopiar = document.querySelector(".bCopiar");
var footer = document.querySelector(".footer-principal");
var mensaje = document.querySelector(".mensaje-Encriptado").style.display = 'none';
var candado = document.querySelector(".imagen-muñeco").style.display = 'none';






bEncriptar.addEventListener("click",(e)=>{
    if(texto.value != ''){
    textoEncriptado.innerHTML = "";
    encriptar();
    texto.value = '';
    imagen.style.display = 'none';
    footer.style.display = 'none';
    document.querySelector(".resultado").style.width = 100;
    document.querySelector(".mensaje-Encriptado").style.display = "block";
    document.querySelector(".imagen-muñeco").style.display = "block";
   var resultadoImagen = document.querySelector(".resultado-imagen").style.backgroundColor = '#58ACFA';
    }
   
});

bCopiar.addEventListener("click", (e)=>{
    texto.value = textoEncriptado.innerHTML;
  });


bDesencriptar.addEventListener("click",()=>{
    if(texto.value != ''){
 document.querySelector(".mensaje-Encriptado").innerHTML = "Mensaje Desencrpitado :)";
 desencriptar();
 imagen.style.display = 'block';
document.querySelector(".imagen-muñeco").style.display = 'none';
document.querySelector(".resultado-imagen").style.backgroundColor = 'cadetblue';

    }
});


function desencriptar (){
     let textodesencriptado = texto.value.replaceAll("enter","").replaceAll("imes","").replaceAll("ai","")
     .replaceAll("ober","").replaceAll("ufat","");
     textoEncriptado.innerHTML = textodesencriptado;
    
     }
 
 function encriptar( ) {

    for(let i = 0; i< texto.value.length ; i++){
        
        if(i % 5 == 0){
            textoEncriptado.innerHTML += " ";
        }
    if(texto.value.charAt(i) == 'a'){
        textoEncriptado.innerHTML += texto.value.charAt(i) + "i";
    }
     if(texto.value.charAt(i) == 'e'){
        textoEncriptado.innerHTML += texto.value.charAt(i) + "nter";
    }
     if(texto.value.charAt(i) == 'i'){
        textoEncriptado.innerHTML += texto.value.charAt(i) + "mes";
    }
    if(texto.value.charAt(i) == 'o'){
        textoEncriptado.innerHTML += texto.value.charAt(i) + "ber";
    }
    if(texto.value.charAt(i) == 'u'){
        textoEncriptado.innerHTML += texto.value.charAt(i) + "fat";
    }
    else{
        textoEncriptado.innerHTML += texto.value.charAt(i);
    }
   
   
   }
 }