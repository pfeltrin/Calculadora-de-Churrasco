function calcular() {
  var homem = document.getElementById('qtdhomens')
  var mulher = document.getElementById('qtdmulheres')
  var criança = document.getElementById('qtdcrianças')
  var result = document.getElementById('result')
  var h1 = Number(homem.value)
  var m1 = Number(mulher.value)
  var c1 = Number(criança.value)

  //tabela qtd por pessoa

  var carnebovH = 0.500
  var carnebovM = 0.300
  var carnebovC = 0.200

  var frangoH = 0.200
  var frangoM = 0.200
  var frangoC = 0.100

  var linguiçaH = 0.200
  var linguiçaM = 0.200
  var linguiçaC = 0.200

  var refriH = 0.200
  var refriM = 0.400
  var refriC = 0.200

  var cervejaH = 0.800
  var cervejaM = 0.500
  var cervejaC = 0

  var totalcarnebov = (h1 * carnebovH) + (m1 * carnebovM) + (c1 * carnebovC)
  var totalfrango = (h1 * frangoH) + (m1 * frangoM) + (c1 * frangoC)
  var totallinguiça = (h1 * linguiçaH) + (m1 * linguiçaM) + (c1 * linguiçaC)
  var totalrefri = (h1 * refriH) + (m1 * refriM) + (c1 * refriC)
  var totalcerveja = (h1 * cervejaH) + (m1 * cervejaM) + (c1 * cervejaC)

  result.innerHTML =
  '<li> Carne Bovina: ' + totalcarnebov.toFixed(1) + ' Kg </li><br>' +
  '<li> Frango: ' + totalfrango.toFixed(1) + ' Kg </li><br>' +
  '<li> Linguiça: ' + totallinguiça.toFixed(1) + ' Kg </li><br>' +
  '<li> Refrigerante: ' + totalrefri.toFixed(1) + ' L </li><br>' +
  '<li> Cerveja: ' + totalcerveja.toFixed(1) + ' L </li><br>'
}