let btCadastrar = document.getElementById("bt-cadastrar");
let nomePessoa = document.getElementById("nome")
let nomeAnimal = document.getElementById("nome-animal")
let raca = document.getElementById("raca");
let telefone = document.getElementById("telefone");
let dataHora = document.getElementById("data-hora");
let obs = document.getElementById("observacao");
let modal = document.getElementById('modal');
let tr = document.getElementById("tr-body");



function openmodal() {
    let modal = document.getElementById('modal');

    modal.style.visibility = 'visible';
}

function enviar() {
  

   let nada = ""
  
   
   nada += `<td>1</td>
            <td>${nomePessoa.value}</td>
            <td>${nomeAnimal.value}</td>
            <td>${raca.value}</td>
            <td>${telefone.value}</td>
            <td>Andamento</td>
            <td>${dataHora.value}</td>
            <td class="td-botao"> <button class="tb-botao">Editar</button>
            <button class="tb-botao">Apagar</button>
            <button class="tb-botao">&#10004</button>
           
            <td>${obs.value}</td>
   `
  tr.innerHTML = nada;  

  modal.style.visibility = 'hidden';

 
}
function fechar() {
  let modal = document.getElementById('modal');

  modal.style.visibility = 'hidden';

 
}
