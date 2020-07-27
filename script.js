function valida() {
    let nome = document.getElementById("nome");
    let dtn = document.getElementById("dtn");
    let email = document.getElementById("email");
    let tele = document.getElementById("tele");

  
    if (nome.value == "") {
      document.getElementById('erro').innerHTML="<div class='erro' id='erro'>Preencha de forma adequada</div>";
    }
  
    if (dtn.value == "") {
      document.getElementById('erro').innerHTML="<div class='erro' id='erro'>Preencha de forma adequada</div>";
    }
  
    if (email.value == "") {
      document.getElementById('erro').innerHTML="<div class='erro' id='erro'>Preencha de forma adequada</div>";
    }
    if (tele.value == "") {
      document.getElementById('erro').innerHTML="<div class='erro' id='erro'>Preencha de forma adequada</div>";
    }
  }
  
function limpar() {
  document.getElementById('erro').innerHTML="<h2 id='erro'></h2>";
  console.log('adadadsa')
}
  