import { exercicio2, exercicio3, exercicio4, exercicio5 } from "./respostas.js";

const resetResults = () => {
    const display = document.getElementById("display")
    display.innerHTML = ""
}

const createTemplate = () => {
    const div = document.createElement("div")
    div.className = "outputField"
    return div
}

const showTemplate = (template) => {
    const display = document.getElementById("display")
    display.append(template)
}

const exercise2 = () => {
    resetResults()
    const template = createTemplate()

    let form = document.createElement("form")
    form.classList = "outputForm"

    let label = document.createElement("label")
    label.innerHTML = "Insira um número para verificar se ele está na sequência Fibonacci:"

    let input = document.createElement("input")
    input.type = "number"

    let btn = document.createElement("button")
    btn.innerHTML = "Verificar"

    let result = document.createElement("p")

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let userInput = input.value
        const answer = exercicio2(userInput)
        answer ?
            result.innerHTML = `O número ${userInput} pertence a sequência Fibonacci`
            :
            result.innerHTML = `O número ${userInput} não pertence a sequência Fibonacci`
    })

    label.append(input)
    form.append(label, btn)
    template.append(form, result)
    showTemplate(template)
}

const exercise3 = () => {
    resetResults()

    let template = createTemplate()

    let p = document.createElement("p")
    p.innerHTML = "Clique no botão abaixo para calcular os valores solicitados:"
    let result = document.createElement("p")

    let btn = document.createElement("button")
    btn.innerHTML = "Calcular"
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        const answer = exercicio3()
        result.innerHTML = `O menor valor de faturamento no mês foi de R$:${answer[0]} e o de maior faturamento foi R$:${answer[1]}. O faturamento foi superior a média mensal em ${answer[2]} dias.`
    })

    template.append(p, btn, result)
    showTemplate(template)
}

const exercise4 = () => {
    resetResults()
    let template = createTemplate()

    let answer = exercicio4()
    
    let p = document.createElement("div")
    let ul = document.createElement("ul")
    p.innerHTML = "A porcentagem de faturamento para cada estado é:"

    for(let i = 0 ; i < answer.length ; i ++){
        let li = document.createElement("li")
        li.innerHTML = `${answer[i].state} - ${answer[i].percentage}%`
        ul.append(li)
    }


    template.append(p, ul)
    showTemplate(template)
}

const exercise5 = () => {

    resetResults()
    let template = createTemplate()
    
    let form = document.createElement("form")

    let label = document.createElement("label")
    label.innerHTML = "Insira uma string para invertê-la:"

    let input = document.createElement("input")

    label.append(input)

    let result = document.createElement("p")
    
    let btn = document.createElement("button")
    btn.innerHTML = "Inverter"
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let userInput = input.value
        
        let answer = exercicio5(userInput)

        result.innerHTML = `String invertida: ${answer}`
    })

    form.append(label, btn)
    template.append(form, result)
    showTemplate(template)
}

const addEventListeners = () => {
    const btn2 = document.getElementById("btn_2")
    btn2.addEventListener("click", (e) => {
        e.preventDefault()
        exercise2()
    })

    const btn3 = document.getElementById("btn_3")
    btn3.addEventListener("click", (e) => {
        e.preventDefault()
        exercise3()
    })

    const btn4 = document.getElementById("btn_4")
    btn4.addEventListener("click", (e) => {
        e.preventDefault()
        exercise4()
    })

    const btn5 = document.getElementById("btn_5")
    btn5.addEventListener("click", (e) => {
        e.preventDefault()
        exercise5()
    })
}

addEventListeners()
