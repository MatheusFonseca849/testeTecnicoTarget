import dados from "../database/dados.js";

export const exercicio2 = (input) => {

    let fibonacciArray = [0, 1]
    let counter = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
    while (counter < input) {
        counter = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
        fibonacciArray.push(counter)
    }

    let isOnFibonacci = false
    for (let i = 0; i < fibonacciArray.length; i++) {
        if (fibonacciArray[i] == input) {
            isOnFibonacci = true
        } else {
            isOnFibonacci = false
        }
    }
    return isOnFibonacci

}


export const exercicio3 = () => {
    
    let filteredSales = dados.filter((dado) => dado.valor > 0.0)
    let smallestValue = dados[0].valor
    let greaterValue = dados[0].valor
    let aboveAvg = 0
    let tmp

    let sum = filteredSales.reduce((a, b) => a + b.valor, 0)
    let avg = sum/filteredSales.length
    

    for(let i = 0 ; i < filteredSales.length ; i++){
        
        tmp = filteredSales[i].valor
        if(filteredSales[i].valor > greaterValue){
            greaterValue = tmp.toFixed(2)
        }
        if(filteredSales[i].valor < smallestValue){
            smallestValue = tmp.toFixed(2)
        }
        if(filteredSales[i].valor > avg){
            aboveAvg = aboveAvg + 1
        }
    }

    const response = [smallestValue, greaterValue, aboveAvg]
    
    return response

}

export const exercicio4 = () => {
    
    let stateInvoiceArray = [
        {
            state: "SP",
            invoice: 67836.43
        }, 
        {
            state: "RJ",
            invoice: 36678.66
        }, 
        {
            state: "MG",
            invoice: 29229.88
        }, 
        {
            state: "ES",
            invoice: 27165.48
        }, 
        {
            state: "Outros",
            invoice: 19848.53
        }, 
    ]

    let total = stateInvoiceArray.reduce((a, b) => a + b.invoice, 0).toFixed(2)
    let percentagePerState = []
    for(let i = 0 ; i < stateInvoiceArray.length ; i++){
        let percentage = ((stateInvoiceArray[i].invoice * 100) / total).toFixed(2) 
        percentagePerState.push({...stateInvoiceArray[i], percentage: percentage})
    }
    

    let p = document.createElement("p")
    p.innerHTML
    
    return percentagePerState
}

export const exercicio5 = (input) => {

    if(input == ""){
        alert("String vazia")
    }else{
        let invertedStringArray = []
        for(let i = input.length - 1 ; i >= 0 ; i--){
            invertedStringArray.push(input[i])
        }
        return invertedStringArray.toString().replaceAll(",", "")
    }

}