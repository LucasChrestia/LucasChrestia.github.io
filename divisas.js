// Cotizaciones del dia - Banco Nacion, TC Venta

const Dolar = 167;
const Euro = 168.5;
const Real = 32.5;

// Funcion de Conversion

let pesos = 0;
let cotDivisa = 0;
let mostrar = 0;

function conversor(pesos, cotDivisa) {
  let intercambio = pesos / cotDivisa;
  mostrar = intercambio.toFixed(2);
}

// Elegir opcion entre ver cotizaciones | simular un intercambio | Salir

let actividad = prompt(
  "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT) \n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
);
while (actividad != "EXIT") {
  switch (actividad) {
    case "A":
      alert(
        "Las cotizaciones actuales son: \n 1 U$D = $" +
          Dolar +
          "\n 1 Euro = $" +
          Euro +
          "\n 1 Real = $" +
          Real
      );
      actividad = prompt(
        "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT)\n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
      );
      break;

    case "B":
      let seleccionarDivisa = prompt(
        "Seleccione en qué divisa desea convertir sus $Pesos (A/B/C): \n A: Dolar \n B: Euro \n C: Real"
      );
      switch (seleccionarDivisa) {
        case "A":
          pesos = Number(prompt("Ingrese cuántos pesos desea convertir:"));
          cotDivisa = Dolar;
          conversor(pesos, cotDivisa);
          alert("Sus $" + pesos + " equivalen a " + mostrar + " Dolares");
          actividad = prompt(
            "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT)\n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
          );
          break;

        case "B":
          pesos = Number(prompt("Ingrese cuántos pesos desea convertir:"));
          cotDivisa = Euro;
          conversor(pesos, cotDivisa);
          alert("Sus $" + pesos + " equivalen a " + mostrar + " Euros");
          actividad = prompt(
            "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT)\n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
          );
          break;

        case "C":
          pesos = Number(prompt("Ingrese cuántos pesos desea convertir:"));
          cotDivisa = Real;
          conversor(pesos, cotDivisa);
          alert("Sus $" + pesos + " equivalen a " + mostrar + " Reales");
          actividad = prompt(
            "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT)\n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
          );
          break;

        default:
          alert(
            "Disculpe, no contamos con información de la divisa solicitada"
          );
          actividad = prompt(
            "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT)\n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
          );
          break;
      }
      break;

    default:
      alert(
        "Por favor seleccione una alternativa válida o escriba EXIT para salir"
      );
      actividad = prompt(
        "Bienvenido/a a TodoDivisas (Para elegir escriba A/B/EXIT)\n A: Quiero ver las cotizaciones del día \n B: Quiero simular un intercambio \n \nSi desea salir escriba EXIT"
      );
      break;
  }
}
