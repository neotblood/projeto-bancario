let saldo = 0;
let limite = 500;
let extrato = ""
let numeroSaques = 0

const limiteSaque = 3;

while(true) {
    menu = prompt(`
    ========== M E N U ==========
    [d] Deposito
    [s] Saque
    [e] Extrato
    [q] Sair
    =============================
    `)

    if (menu == "d") {
        valor = parseFloat(prompt("Informe o valor do depósito: R$"));

        if (valor > 0) {
          saldo += valor;
          extrato += `Depósito de R$${valor} \n`  ;
          alert(`Depósito de R$${valor} realizado`);
        } else {
          alert("Operação falhou! O valor informado é inválido!");
        }

}   else if (menu == "s") {
        valor = parsefloat(prompt("Informe o valor de saque"))
        excedeuSaldo = valor > saldo;
        excedeuLimite = valor > limite;
        excedeuSaque = numeroSaques > limiteSaque;

        if(excedeuSaldo) {
            alert("Operação falhou!Você não tem saldo suficiente")
        } else if(excedeuLimite) {
            alert("Operação falhou!Você excedeu o limite do saque")
        } else if(excedeuSaque) {
            alert("Operação falhou!Você excedeu o número máximo de saque")
        } else if(valor > 0) {
            saldo -= valor;
            extrato += `Saque de R$${valor} \n`
            alert (`Saque de R$${valor} realizado`);
            numeroSaques++;
        }    else {
                alert("Operação falhou! O valor informado é invalido");
            }
    } else if(menu =="e") {
        mensagem = extrato == true ? "Não foram realizadas movimentações" : extrato
      alert(`
      ======== E X T R A T O ========
      ${mensagem}
      Saldo: R$ ${saldo.toFixed(2)}
      `)

    }  else if (menu == "q"){
    alert("Obrigado pela preferência!")
    break
    } else {
    alert("Opção inválida, por favor selecione novamente a operação desejada!");
    } 
}