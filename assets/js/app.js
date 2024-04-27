function cadAlunos(){
    window.location = "register1.html"
}

function saveAlun(){
    
        const nome = document.getElementById('input_nome').value;
        const ra = document.getElementById('input_ra').value;
        const email = document.getElementById('input_email').value;

        // Verifica se os campos não estão vazios antes de salvar
        if (nome && ra && email) {
            let aluno = {
                nome: nome,
                ra: ra,
                email: email
            };

            // Convertendo o objeto para string JSON antes de salvar no localStorage
            localStorage.setItem('aluno', JSON.stringify(aluno));
            alert('Aluno registrado');
        } else {
            alert('Erro, campos não preenchidos');
        }
    
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
}

function calcularMediaBimestral(notaProva, notaAEP, notaProvaIntegrada) {
    // Calcular a média bimestral usando a fórmula dada
    let mediaBimestral = (notaProva * 0.8) + (notaAEP * 0.1) + (notaProvaIntegrada * 0.1);
    // Limitar a média entre 0 e 10
    mediaBimestral = Math.min(mediaBimestral, 10);
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
function statusAprovacao() {
    const mediaFinal = document.getElementById('mediaFinal').value;

    if (mediaFinal >= 6) {
        document.getElementById('status').innerText = 'Aprovado';
    } else if (mediaFinal >= 3) {
        document.getElementById('status').innerText = 'Recuperação';
    } else {
        document.getElementById('status').innerText = 'Reprovado';
    }
}
function adicionaDadosAluno() {
    // Obter os valores dos campos do formulário
    let nome = document.getElementById("input_nome").value;
    let email = document.getElementById("input_email").value;
    let ra = document.getElementById("input_ra").value;
    let notaProva1 = parseFloat(document.getElementById("notaProva1").value);
    let notaAEP1 = parseFloat(document.getElementById("notaAEP1").value);
    let notaProvaIntegrada1 = parseFloat(document.getElementById("notaProvaIntegrada1").value);
    let notaProva2 = parseFloat(document.getElementById("notaProva2").value);
    let notaAEP2 = parseFloat(document.getElementById("notaAEP2").value);
    let notaProvaIntegrada2 = parseFloat(document.getElementById("notaProvaIntegrada2").value);

    // Validar os campos obrigatórios
    if (!nome || !email || !ra) {
        alert("preencha todos os campos obrigatórios.");
        return;
    }

