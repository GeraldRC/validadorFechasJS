$(document).ready(function () {
  //funcion para agregar datePicket desde JqueryUI
  $(function () {
    $(".datepicker").datepicker($.datepicker.regional["es"]);
  });

  //variables para obtener fechas desde datepicker
  var currentDate1;
  var currentDate2;
  //evento click para obtner fechas
  $("#validar").click(function (e) {
    currentDate1 = $("#date1").datepicker("getDate");
    currentDate2 = $("#date2").datepicker("getDate");

    if (currentDate1 == null || currentDate2 == null) {
      alert("ingrese Fechas");
    } else {
      verificarFechas(currentDate1, currentDate2);
    }
  });
  //variables para obtener diferencias entre fechas
  var diferencia;
  var diferenciafin;
  //variable la cual obtiene la fecha de fin de año
  var findeaño = new Date(2020, 12, 31);
  //funciones para verificar fechas (<> 0 =)
  function verificarFechas(val1, val2) {
    if (Date.parse(val1) < Date.parse(val2)) {
      $("#esmayor1").html(" ");
      $("#iguales").html(" ");
      $("#esmayor2").html("Fecha 2 es Mayor");
      diferenciafin = Date.parse(findeaño) - val2;
      diferencia = val2 - val1;
    } else if (Date.parse(val1) > Date.parse(val2)) {
      $("#esmayor2").html(" ");
      $("#iguales").html(" ");
      $("#esmayor1").html("Fecha 1 Es mayor");
      diferenciafin = Date.parse(findeaño) - val1;
      diferencia = val1 - val2;
    } else {
      $("#esmayor2").html(" ");
      $("#esmayor1").html(" ");
      $("#iguales").html("Las dos Fechas son Iguales");
    }
    if (isNaN(diferencia / (1000 * 60 * 60 * 24))) {
      $("#diasRestantes").html(`la diferencia es : 0 dias`);
      diferencia = 0;
    } else {
      $("#diasRestantes").html(
        `la diferencia es : ${diferencia / (1000 * 60 * 60 * 24)} dias entre 
        las fechas establecidas`
      );
      $("#findeano").html( 
        `Quedan : ${
          diferenciafin / (1000 * 60 * 60 * 24)
        } dias desde la fecha mayor hasta fin de año`
      );

      diferencia = 0;
    }
  }
});
