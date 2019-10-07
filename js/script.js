let order
let prices = [1.50, 2, 2.50, 3, 6]
let orderedAmounts = {
    'bier' : 0,
    'fris' : 0,
    'wijn' : 0,
    '8bitterballen' : 0,
    '16bitterballen' : 0
};

products["var"]

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
        }
        else{
            AddOrder(orderType)
        }
    }
}

//Drinken toevoegen aan de rekening
function AddToBill(orderType, amount){
    orderedAmounts[orderType] += parseInt(amount)
    Main()
}

//Snack toevoegen aan de rekening
function AddSnackToBill(orderType, amount, amount2){
    if(orderType == "snack"){
        if (amount == 8){
            orderedAmounts['8bitterballen'] += parseInt(amount2)
        }
        else if (amount == 16){
            orderedAmounts['16bitterballen'] += parseInt(amount2)
        }
    }
    Main()
}

//Rekening berekenen
function Bill(){
    let bill = document.getElementById('bill')
    if(orderedAmounts['fris'] != 0){
        let price = orderedAmounts['fris'] * prices[0]
        bill.innerHTML += ("Fris: " + orderedAmounts['fris'] + " Prijs: " + orderedAmounts['fris'] + " * " + prices[0] + " = €" + price + "<br>") 
    }
    if(orderedAmounts['bier'] != 0){
        let price = orderedAmounts['bier'] * prices[1]
        bill.innerHTML += ("Bier: " + orderedAmounts['bier'] + " Prijs: " + orderedAmounts['bier'] + " * " + prices[1] + " = €" + price + "<br>")
    }
    if(orderedAmounts['wijn'] != 0){
        let price = orderedAmounts['wijn'] * prices[2]
        bill.innerHTML += ("Wijn: " + orderedAmounts['wijn'] + " Prijs: " + orderedAmounts['wijn'] + " * " + prices[2] + " = €" + price + "<br>")
    }
    if(orderedAmounts['8bitterballen'] != 0){
        let price = orderedAmounts['8bitterballen'] * prices[3]
        bill.innerHTML += ("Bitterballen in schalen van 8: " + orderedAmounts['8bitterballen'] + " Prijs: " + orderedAmounts[3] + " * " + prices[3] + " = €" + price + "<br>")
    }
    if(orderedAmounts['16bitterballen'] != 0){
        let price = orderedAmounts['16bitterballen'] * prices[4]
        bill.innerHTML += ("Bitterballen in schalen van 16: " + orderedAmounts['16bitterballen'] + " Prijs: " + orderedAmounts[4] + " * " + prices[4] + " = €" + price + "<br>")
    }
}