function abrirModal(carregarModal) {
    console.log("Carregar modal: " + carregarModal)
    let modal = document.getElementById(carregarModal);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'
}

function fecharModal(fecharModal) {
    console.log("Fechar modal: " + fecharModal)
    let modal = document.getElementById(fecharModal);

    modal.style.display = 'none';
    document.body.style = 'auto';
}