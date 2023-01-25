const enviar = document.querySelector(`#btn`)

enviar.addEventListener(`click`, function (e) {
    e.preventDefault()

    const pegaValor = function (valor) {
        resultado = parseInt(document.querySelector(valor).value)
        return resultado
    }

    let conta1 = pegaValor(`#num1`)
    let conta2 = pegaValor(`#num2`)
    let conta3 = pegaValor(`#num3`)
    let conta4 = pegaValor(`#num4`)
    let conta5 = pegaValor(`#num5`)
    let conta6 = pegaValor(`#num6`)
    let conta7 = pegaValor(`#num7`)

    const resultadoFinal = (conta1 + conta2 + conta3 + conta4 + conta5 + conta6 + conta7) / 7

    document.querySelector(`.resultado`).innerHTML = `A média das camadas é: ${resultadoFinal}`
})