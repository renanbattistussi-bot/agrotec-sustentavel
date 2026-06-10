// Curiosidade sobre o agro sustentável
const btnCuriosidade = document.getElementById("btnCuriosidade");
const curiosidade = document.getElementById("curiosidade");

btnCuriosidade.addEventListener("click", () => {
    const fatos = [
        "O Brasil é líder mundial em produção de soja e café sustentável.",
        "Agricultores usam drones para monitorar lavouras e economizar água.",
        "Sistemas agroflorestais aumentam a biodiversidade e protegem o solo.",
        "O plantio direto reduz a erosão e mantém a fertilidade do solo."
    ];
    const aleatorio = Math.floor(Math.random() * fatos.length);
    curiosidade.textContent = fatos[aleatorio];
});

// Formulário de contato
const form = document.getElementById("contatoForm");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    form.reset();
});
