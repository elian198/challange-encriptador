const bEncriptar = document.querySelector(".encriptar");
const bDesencriptar = document.querySelector(".desencriptar");
var textoEncriptado = document.querySelector(".resultado");
var texto = document.querySelector(".texto");
var imagen = document.querySelector(".imagen-muñeco");
let bCopiar = document.querySelector(".bCopiar");
var footer = document.querySelector(".footer-principal");



bEncriptar.addEventListener("click",(e)=>{
    textoEncriptado.innerHTML = "";
    encriptar();
    texto.value = '';
    imagen.style.display = 'none';
    footer.style.display = 'none';

   
});

bCopiar.addEventListener("click", (e)=>{
    texto.value = textoEncriptado.innerHTML;
  });


bDesencriptar.addEventListener("click",()=>{
 desencriptar();
 imagen.style.display = 'block';
})


function desencriptar (){
     let textodesencriptado = texto.value.replaceAll("enter","").replaceAll("imes","").replaceAll("ai","")
     .replaceAll("ober","").replaceAll("ufat","");
     textoEncriptado.innerHTML = textodesencriptado;
    
     }
 
 function encriptar( ) {

    for(let i = 0; i< texto.value.length ; i++){
        
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