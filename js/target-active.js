const URLActual = window.location.hash
console.log(URLActual)
var selector = 'a[href="' + URLActual + '"] , '+ URLActual

  function agregarClase() {
    var elementos = document.querySelectorAll(selector);
    console.log(elementos)
    if(elementos){
        elementos.forEach(function(elemento) {
            elemento.classList.add("show","active");
          });
    } else{
        console.error("no se encontró el elemento")
    }
    
  }
  agregarClase()