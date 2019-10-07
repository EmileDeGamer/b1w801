let order
let prices = [1.50, 2, 2.50, 3, 6]
let orderedAmounts = [0, 0, 0, 0, 0]

let products = {
    'bier' : 0,
    'fris' : 0
};

//Begin functie
function Main(){
    let question = prompt("Welke bestelling wilt u toevoegen?:", "Fris, Bier, Wijn, Snack")
    if (question.toLowerCase().trim() == "stop"){
        Bill()
    }
    else if (question.toLowerCase().trim() == "snack" && isNaN(question.toLowerCase().trim())){
        AddOrder(question.toLowerCase().trim())
    }
    else if (question.toLowerCase().trim() == "fris" && isNaN(question.toLowerCase().trim())){
        AddOrder(question.toLowerCase().trim())
    }
    else if (question.toLowerCase().trim() == "bier" && isNaN(question.toLowerCase().trim())){
        AddOrder(question.toLowerCase().trim())
    }
    else if (question.toLowerCase().trim() == "wijn" && isNaN(question.toLowerCase().trim())){
        AddOrder(question.toLowerCase().trim())
    }
    else{
        alert("Verkeerde invoer! :(")
        Main()
    }
}

//Hoeveelheid van een product invoeren
function AddOrder(orderType){
    if (orderType == "snack"){
        let size = prompt("Hoeveel bitterballen wilt u toevoegen aan uw bestelling?:", "8/16")
        if (size.toLowerCase().trim() == "stop"){
            Bill()
        }
        else if (size.toLowerCase().trim() == "8" && !isNaN(size.toLowerCase().trim()) || size.toLowerCase().trim() == "16" && !isNaN(size.toLowerCase().trim())){
            let amount = prompt("Hoeveel " + orderType + " in de maat: " + size + " wilt u toevoegen aan uw bestelling?:", "Hoeveelheid:")
            if (amount.toLowerCase().trim() == "stop"){
                Bill()
            }
            else if(!isNaN(amount.toLowerCase().trim())){
                AddSnackToBill(orderType, size, amount)
            }
            else{
                alert("U kunt alleen een getal invoeren")
                AddOrder(orderType)
            }
        }
        else{
            alert("U kunt alleen een keuze maken tussen 8 of 16 biterballen! :(")
            AddOrder(orderType)
        }
    }
    else {
        let question = prompt("Hoeveel " + orderType + " wilt u toevoegen aan uw bestelling?:", "Hoeveelheid:")
        if (question.toLowerCase().trim() == "stop"){
            Bill()
        }
        else if(!isNaN(question.toLowerCase().trim())){
            AddToBill(orderType, question)
            console.log("hier")
        }
        else{
            AddOrder(orderType)
        }
    }
}

//Drinken toevoegen aan de rekening
function AddToBill(orderType, amount){
    console.log("hier")
    if(orderType == "fris"){
        orderedAmounts[0] += parseInt(amount)
        console.log("hier")
    }
    else if (orderType == "bier"){
        orderedAmounts[1] += parseInt(amount)
    }
    else if (orderType == "wijn"){
        orderedAmounts[2] += parseInt(amount)
    }
    Main()
}

//Snack toevoegen aan de rekening
function AddSnackToBill(orderType, amount, amount2){
    if(orderType == "snack"){
        if (amount == 8){
            orderedAmounts[3] += parseInt(amount2)
        }
        else if (amount == 16){
            orderedAmounts[4] += parseInt(amount2)
        }
    }
    Main()
}

//Rekening berekenen
function Bill(){
    let bill = document.getElementById('bill')
    if(orderedAmounts[0] != 0){
        let price = orderedAmounts[0] * prices[0]
        bill.innerHTML += ("Fris: " + orderedAmounts[0] + " Prijs: " + orderedAmounts[0] + " * " + prices[0] + " = €" + price + "<br>") 
    }
    if(orderedAmounts[1] != 0){
        let price = orderedAmounts[1] * prices[1]
        bill.innerHTML += ("Bier: " + orderedAmounts[1] + " Prijs: " + orderedAmounts[1] + " * " + prices[1] + " = €" + price + "<br>")
    }
    if(orderedAmounts[2] != 0){
        let price = orderedAmounts[2] * prices[2]
        bill.innerHTML += ("Wijn: " + orderedAmounts[2] + " Prijs: " + orderedAmounts[2] + " * " + prices[2] + " = €" + price + "<br>")
    }
    if(orderedAmounts[3] != 0){
        let price = orderedAmounts[3] * prices[3]
        bill.innerHTML += ("Bitterballen in schalen van 8: " + orderedAmounts[3] + " Prijs: " + orderedAmounts[3] + " * " + prices[3] + " = €" + price + "<br>")
    }
    if(orderedAmounts[4] != 0){
        let price = orderedAmounts[4] * prices[4]
        bill.innerHTML += ("Bitterballen in schalen van 16: " + orderedAmounts[4] + " Prijs: " + orderedAmounts[4] + " * " + prices[4] + " = €" + price + "<br>")
    }
}