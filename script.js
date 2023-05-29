function encriptar() {
  var texto = document.querySelector("#input_Texto").value;
  var textoCifrado = texto
      .replace(/(?<!i)a/gi, "ai")
      .replace(/(?<!n)e/gi, "enter")
      .replace(/ i/gi, "imes")
      .replace(/(?<!b)o/gi, "ober")
      .replace(/(?<!f)u/gi, "ufat");

  document.querySelector("#txtInputSalida").value = textoCifrado;
}

function desencriptar() {
  var texto = document.querySelector("#input_Texto").value;
  var textoDesencriptado = texto
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

  document.querySelector("#txtInputSalida").value = textoDesencriptado;
}

document.querySelector("#btnEncriptar").addEventListener("click", encriptar);
document.querySelector("#btnDesencriptar").addEventListener("click", desencriptar);

document.querySelector("#btnCopiarAbajo").addEventListener("click", function() {
  var campoTexto = document.querySelector("#txtInputSalida");
  campoTexto.select();
  document.execCommand("copy");
});

document.querySelector("#btnBorrar").addEventListener("click", function() {
  document.querySelector("#input_Texto").value = "";
});

document.querySelector("#btnBorrar2").addEventListener("click", function() {
  document.querySelector("#txtInputSalida").value = "";
});