//console.log (dados[1].link); // Linha comentada, provavelmente usada para testes.

function pesquisar() {

    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML selecionado (para depuração).

let campoPesquisa = document.getElementById ("campo-pesquisa").value

if (!campoPesquisa) {
    section.innerHTML = "<b>Digite um Peixe</b>"
return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);


    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";

    // Itera sobre cada elemento (dado) no array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se o titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)||tags.includes(campoPesquisa)) {
          
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Wiki Oficial</a>
            </div>
        `;

        }

        console.log(dado.titulo.includes(campoPesquisa))
        // Concatena HTML para criar um novo elemento de resultado:
        // - Um título com um link para mais detalhes (ancora '#', ajustar se necessário).
        // - Uma descrição curta.
        // - Um link para a Wiki Oficial.
      if (!resultados) {
      resultados = "<b>Nenhum resultado encontrado.</b>"

      }
        
    }

    // Atribui o HTML gerado para o conteúdo da seção de resultados.
    section.innerHTML = resultados;
}







  
