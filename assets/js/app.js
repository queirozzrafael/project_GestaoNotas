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
}

