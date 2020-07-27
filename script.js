function valida() {
    let nome = document.getElementById("nome");
    let dtn = document.getElementById("dtn");
    let email = document.getElementById("email");
    let tele = document.getElementById("tele");

  
    if (nome.value == "") {
      alert("Coloque novamente o seu nome");
    }
  
    if (dtn.value == "") {
      alert("Coloque a data de seu nascimento");
    }
  
    if (email.value == "") {
      alert("Coloque novamente a sua idade");
    }
    if (tele.value == "") {
        alert("indique seu numero")
    }
  }
  