const URLActual = window.location.hash
var selector = 'a[href="' + URLActual + '"] , '+ URLActual

  function agregarClase() {
    var elementos = document.querySelectorAll(selector);
    if(elementos){
        elementos.forEach(function(elemento) {
            elemento.classList.add("show","active");
          });
    } else{
        console.error("no se encontró el elemento")
    }
    
  }
  agregarClase()