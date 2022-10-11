var dados = []

window.onload = () => {
    populaTabela()
  }


function populaTabela(){
    dados = JSON.parse(localStorage.getItem("__dados__")) || []  
    



}



function salvar(){

    //EVENTO CLICK DO BOTÃO SALVAR
        let Nome = document.querySelector("#txtNome");
        let Sobrenome = document.querySelector("#txtSobrenome"); 
        let Idade = document.querySelector("#txtIdade");
        let Formacao = document.querySelector("#txtFormacao");
        
        let registro = {}

        registro.Nome = Nome.value;
        registro.Sobrenome = Sobrenome.value;
        registro.Idade = Idade.value;
        registro.Formacao = Formacao.value;

        registro.ID = dados.length + 1

        localStorage.getItem("__dados__")
        dados.push(registro)
        localStorage.setItem("__dados__", JSON.stringify(dados));

        alert("Registro feito com sucesso!")
        
    //aqui fica o cod de limpar os nomes



}
