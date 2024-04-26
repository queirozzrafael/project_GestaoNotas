function cadAlunos(){
    window.location = "register1.html"
}
function statusAprovacao() {
    let mediaFinal = document.getElementById('mediaFinal').value;

    if (mediaFinal >= 7) {
        document.getElementById('status').innerText = 'Aprovado';
    } else if (mediaFinal >= 3) {
        document.getElementById('status').innerText = 'Recuperação';
    } else {
        document.getElementById('status').innerText = 'Reprovado';
    }
localStorage.setItem(alunos, "alunos");
}

function calcularMedias() {
    // Obter as notas dos inputs
    let notaProva1 = parseFloat(document.getElementById("notaProva1").value);
    let notaAEP1 = parseFloat(document.getElementById("notaAEP1").value);
    let notaProvaIntegrada1 = parseFloat(document.getElementById("notaProvaIntegrada1").value);
    
    let notaProva2 = parseFloat(document.getElementById("notaProva2").value);
    let notaAEP2 = parseFloat(document.getElementById("notaAEP2").value);
    let notaProvaIntegrada2 = parseFloat(document.getElementById("notaProvaIntegrada2").value);

    // Calcular as médias bimestrais e final
    let mediaBimestre1 = calcularMediaBimestral(notaProva1, notaAEP1, notaProvaIntegrada1);
    let mediaBimestre2 = calcularMediaBimestral(notaProva2, notaAEP2, notaProvaIntegrada2);
    let mediaFinal = calcularMediaFinal(mediaBimestre1, mediaBimestre2);

    // Exibir os resultados na página
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Média Bimestre 1: ${mediaBimestre1.toFixed(2)}</p>
        <p>Média Bimestre 2: ${mediaBimestre2.toFixed(2)}</p>
        <p>Média Final: ${mediaFinal.toFixed(2)}</p>
    `;
    localStorage.setItem(alunos, "calculos");
}

function calcularMediaBimestral(notaProva, notaAEP, notaProvaIntegrada) {
    // Limitar cada nota ao seu valor máximo permitido
    notaProva = Math.min(notaProva, 8);
    notaAEP = Math.min(notaAEP, 1);
    notaProvaIntegrada = Math.min(notaProvaIntegrada, 1);

    // Calcular a média bimestral usando os pesos dados
    let mediaBimestral = (notaProva * 0.8) + (notaAEP * 0.1) + (notaProvaIntegrada * 0.1);

    // Limitar a média entre 0 e 10
    mediaBimestral = Math.max(Math.min(mediaBimestral, 10), 0);

    return mediaBimestral;
}


function calcularMediaFinal(mediaBimestre1, mediaBimestre2) {
    // Calcular a média final
    let mediaFinal = (mediaBimestre1 + mediaBimestre2) / 2;
    return mediaFinal;
}

function calcularMedias() {
    // Obter as notas dos inputs
    let notaProva1 = parseFloat(document.getElementById("notaProva1").value);
    let notaAEP1 = parseFloat(document.getElementById("notaAEP1").value);
    let notaProvaIntegrada1 = parseFloat(document.getElementById("notaProvaIntegrada1").value);
    
    // Obter os elementos da tabela
    let tbody = document.getElementById("corpoTabela");

    // Verificar se já existe uma linha para o aluno
    let alunoRow = tbody.querySelector("#alunoRow");

    
    if (!alunoRow) {
        alunoRow = tbody.insertRow();
        alunoRow.id = "alunoRow";
    }

    // preencher a linha com os dados do aluno
    alunoRow.innerHTML = `
        <td>Aluno</td>
        <td>Email</td>
        <td>RA</td>
        <td>${notaProva1}</td>
        <td>${notaAEP1}</td>
        <td>${notaProvaIntegrada1}</td>
        <td>Média Bimestre</td>
        <td>Nota Prova 2</td>
        <td>Nota AEP 2</td>
        <td>Nota Prova Integrada 2</td>
        <td>Média 2º Bimestre</td>
        <td>Média Final</td>
        <td>Status</td>
        <td>Ações</td>
    `;
}

function calcularMedias() {
    // Obter as notas dos inputs
    let notaProva1 = parseFloat(document.getElementById("notaProva1").value);
    let notaAEP1 = parseFloat(document.getElementById("notaAEP1").value);
    let notaProvaIntegrada1 = parseFloat(document.getElementById("notaProvaIntegrada1").value);
    
    // Obter os elementos da tabela
    let tbody = document.getElementById("corpoTabela");

    // Verificar se já existe uma linha para o aluno
    let alunoRow = tbody.querySelector("#alunoRow");

    
    if (!alunoRow) {
        alunoRow = tbody.insertRow();
        alunoRow.id = "alunoRow";
    }

    // preencher a linha com os dados do aluno
    alunoRow.innerHTML = `
        <td>Aluno</td>
        <td>Email</td>
        <td>RA</td>
        <td>${notaProva1}</td>
        <td>${notaAEP1}</td>
        <td>${notaProvaIntegrada1}</td>
        <td>Média Bimestre</td>
        <td>Nota Prova 2</td>
        <td>Nota AEP 2</td>
        <td>Nota Prova Integrada 2</td>
        <td>Média 2º Bimestre</td>
        <td>Média Final</td>
        <td>Status</td>
        <td>Ações</td>
    `;
}

function salvarDados() { 
    const alunos = [];

    // Coletar dados dos alunos
    const inputsAlunos = document.querySelectorAll(".aluno");
    inputsAlunos.forEach(aluno => {
        let nome = aluno.querySelector(".nome").value;
        let notaProva1 = parseFloat(aluno.querySelector(".notaProva1").value);
        let notaAEP1 = parseFloat(aluno.querySelector(".notaAEP1").value);
        let notaProvaIntegrada1 = parseFloat(aluno.querySelector(".notaProvaIntegrada1").value);
        let notaProva2 = parseFloat(aluno.querySelector(".notaProva2").value);
        let notaAEP2 = parseFloat(aluno.querySelector(".notaAEP2").value);
        let notaProvaIntegrada2 = parseFloat(aluno.querySelector(".notaProvaIntegrada2").value);
        
        // Calcular médias
        let mediaBimestre1 = calcularMediaBimestral(notaProva1, notaAEP1, notaProvaIntegrada1);
        let mediaBimestre2 = calcularMediaBimestral(notaProva2, notaAEP2, notaProvaIntegrada2);
        let mediaFinal = calcularMediaFinal(mediaBimestre1, mediaBimestre2);

        // Salvar dados do aluno e suas notas
        alunos.push({
            notas: {
                notaProva1: notaProva1,
                notaAEP1: notaAEP1,
                notaProvaIntegrada1: notaProvaIntegrada1,
                notaProva2: notaProva2,
                notaAEP2: notaAEP2,
                notaProvaIntegrada2: notaProvaIntegrada2
            },
            mediaBimestre1: mediaBimestre1,
            mediaBimestre2: mediaBimestre2,
            mediaFinal: mediaFinal
        });
    });

    // Armazenar os dados no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));
}


function recuperarDados(){
    const armazenados = localStorage.getItem('alunos');
    if (armazenados) {
        return JSON.parse(armazenados);
    } else {
        return[];
    }
}
