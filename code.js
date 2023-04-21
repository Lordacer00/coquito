function calcular() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var num4 = parseInt(document.getElementById("num4").value);
  var num5 = parseInt(document.getElementById("num5").value);
  var num6 = parseInt(document.getElementById("num6").value);
  var num7 = parseInt(document.getElementById("num7").value);
  var numeros = [num1, num2, num3, num4, num5, num6, num7];

  // Ordenar los números
  numeros.sort(function(a, b){return a-b});

  // Calcular la media
  var media = numeros.reduce(function(sum, value){
    return sum + value;
  }, 0) / numeros.length;

  // Calcular la moda
  var modeMap = {};
  var maxCount = 0;
  var modes = [];

  for(var i = 0; i < numeros.length; i++){
    var el = numeros[i];

    if(modeMap[el] == null)
      modeMap[el] = 1;
    else
      modeMap[el]++;

    if(modeMap[el] > maxCount){
      modes = [el];
      maxCount = modeMap[el];
    }
    else if(modeMap[el] == maxCount){
      modes.push(el);
    }
  }

  // Calcular la mediana
  var mediana = 0;
  var half = Math.floor(numeros.length / 2);

  if(numeros.length % 2)
    mediana = numeros[half];
  else
    mediana = (numeros[half-1] + numeros[half]) / 2.0;

  // Mostrar los resultados
  var resultado = "Números ordenados: " + numeros.toString() + "<br>" +
                  "Media: " + media.toFixed(2) + "<br>" +
                  "Moda: " + modes.toString() + "<br>" +
                  "Mediana: " + mediana.toFixed(2);

  document.getElementById("resultado").innerHTML = resultado;
}
