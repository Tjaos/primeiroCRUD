var dados = [];

window.onload = () => {
  populaTabela();
};
function populaTabela() {
  dados = JSON.parse(localStorage.getItem("__dados__")) || [];
  dados.map((dado, index) => {
    const tableBodyElement = document.querySelector(".tableBody");
    const trElement = document.createElement("tr");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement("button");
    console.log("dados: ", dado);

    Object.keys(dado).forEach((key) => {
      const tdElement = document.createElement("td");

      tdElement.innerText = dado[key];
      trElement.appendChild(tdElement);
      tableBodyElement.appendChild(trElement);

      btnEdit.setAttribute("type", "button");
      btnEdit.setAttribute("class", "btn btn-primary");
      btnEdit.setAttribute("onclick", "edit()");
      btnEdit.innerText = "editar";
      tdElement.appendChild(btnEdit);

      btnDelete.setAttribute("type", "button");
      btnDelete.setAttribute("class", "btn btn-danger");
      btnDelete.setAttribute("onclick", "excluir(" + index + ")");
      btnDelete.innerText = "excluir";
      tdElement.appendChild(btnDelete);
    });
  });
}

function salvar() {
  //EVENTO CLICK DO BOTÃO SALVAR
  let Nome = document.querySelector("#txtNome");
  let Sobrenome = document.querySelector("#txtSobrenome");
  let Idade = document.querySelector("#txtIdade");
  let Formacao = document.querySelector("#txtFormacao");
  let ultimoIdInserido = dados[dados.length - 1].ID + 1;
  let registro = {};

  registro.ID = ultimoIdInserido;
  registro.Nome = Nome.value;
  registro.Sobrenome = Sobrenome.value;
  registro.Idade = Idade.value;
  registro.Formacao = Formacao.value;
  registro.Excluir = document.createElement("input").value;

  localStorage.getItem("__dados__");
  dados.push(registro);
  localStorage.setItem("__dados__", JSON.stringify(dados));

  alert("Registro feito com sucesso!");
  //LIMPA OS NOMES DOS INPUTS
  limpaCampos();
  location.reload();
}

function limpaCampos() {
  limpaNome = document.querySelector("#txtNome");
  limpaNome.value = "";

  limpaSobrenome = document.querySelector("#txtSobrenome");
  limpaSobrenome.value = "";

  limpaIdade = document.querySelector("#txtIdade");
  limpaIdade.value = "";

  limpaFormacao = document.querySelector("#txtFormacao");
  limpaFormacao.value = "";
}

function edit() {
  alert("editando...");
}

function excluir(key) {
  dados = JSON.parse(localStorage.getItem("__dados__")) || [];
  //pega o index(posição) para excluir de um array
  dados.splice(key, 1);
  localStorage.setItem("__dados__", JSON.stringify(dados));
  location.reload();
}
