function mostrarAlerta(){
    alert("Esto es una alerta")
  }
  
  function solicitarConfirmacion(){
    let respuesta = confirm("¿Estás seguro?")
    if(respuesta){
      alert("Aceptaste")
    }else {
      alert("No aceptaste")
    }
  }
  
  function solicitarInformacion(){
    let numero = prompt("¿Cuál es tu número?")
    
    if(numero){
      alert("Tu número +1 es: " + (parseInt(numero)+1))
    }else {
      alert("No has introducido número")
    }
  }