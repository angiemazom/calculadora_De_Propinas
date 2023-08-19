document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos referencias a los elementos del DOM que vamos a utilizar
    const montoInput = document.getElementById('monto');
    
    const propinaPorcentajeInput = document.getElementById('propina');
    const numPersonasInput = document.getElementById('no-de-personas');
    const valorPropinaElement = document.getElementById('valor-propina');
    const totalPagoElement = document.getElementById('total-pago');
    const propinaPorPersonaElement = document.getElementById('propina-por-persona');
    const propinaPorcentajeElement = document.getElementById('propina-porcentaje');
    const numPersonasElement = document.getElementById('num-personas');

    //Referencia al boton de restablecer valores
    const resetButton = document.getElementById('reset-button');
    //Evento de click en el boton
    resetButton.addEventListener('click', function(){
        //Restablecer valores a su estado inicial
        montoInput.value='';
        propinaPorcentajeInput.value=0;
        numPersonasInput.value=1; 
    
        actualizarResultados();
    });

    // Función que realiza los cálculos de la propina
    function calcularPropina(monto, propinaPorcentaje, numPersonas) {
        const propina = (monto * propinaPorcentaje) / 100;
        const totalPago = monto + propina;
        const propinaPorPersona = propina / numPersonas;
        return { propina, totalPago, propinaPorPersona };
    }

      // Función para formatear un número como moneda usando la biblioteca numeral.js
      function formatearMoneda(valor) {
        return numeral(valor).format('$0,0.00');
    }


    // Función que se ejecuta cada vez que los inputs cambian
    function actualizarResultados() {
        const monto = parseFloat(montoInput.value);
        const propinaPorcentaje = parseFloat(propinaPorcentajeInput.value);
        const numPersonas = parseInt(numPersonasInput.value);

  // Calculamos los valores de propina y total
  const { propina, totalPago, propinaPorPersona } = calcularPropina(monto, propinaPorcentaje, numPersonas);

  // Actualizamos los elementos en el DOM con los resultados formateados
  valorPropinaElement.textContent = formatearMoneda(propina);
  totalPagoElement.textContent = formatearMoneda(totalPago);
  propinaPorPersonaElement.textContent = formatearMoneda(propinaPorPersona);
  propinaPorcentajeElement.textContent = `${propinaPorcentaje}%`;
  numPersonasElement.textContent = numPersonas;
}

// Agregamos los eventos de input a los elementos para que se ejecute la función de actualización
montoInput.addEventListener('input', actualizarResultados);
propinaPorcentajeInput.addEventListener('input', actualizarResultados);
numPersonasInput.addEventListener('input', actualizarResultados);



// Al cargar la página, llamamos a la función de actualización para mostrar los resultados iniciales
actualizarResultados();
});