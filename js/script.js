function atualizarRelogio(){
    const horaElement = document.getElementById('hora');
    const minutoElement = document.getElementById('minuto');
    const segundoElement = document.getElementById('segundo');

    // Obter o horário atual
    const now = new Date();

    // Obter horas, minutos e segundos
    let hora = now.getHours();
    let minuto = now.getMinutes();
    let segundo = now.getSeconds();

    // Formatar para ter 2 dígitos
    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundo = segundo < 10 ? '0' + segundo : segundo;

    // Atualizar os elementos na página
    horaElement.textContent = hora;
    minutoElement.textContent = minuto;
    segundoElement.textContent = segundo;
}

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função para atualizar o relógio
atualizarRelogio();