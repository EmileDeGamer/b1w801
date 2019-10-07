let order
let prices = [1.50, 2, 2.50, 3, 6]
let orderedAmounts = {
    'bier' : 0,
    'fris' : 0,
    'wijn' : 0,
    '8bitterballen' : 0,
    '16bitterballen' : 0
}

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
    let price1 = 0, price2 = 0, price3 = 0, price4 = 0, price5 = 0
    let bill = document.getElementById('bill')
    if(orderedAmounts['fris'] != 0){
        price1 = orderedAmounts['fris'] * prices[0]
        bill.innerHTML += ("Fris: " + orderedAmounts['fris'] + " Prijs: " + orderedAmounts['fris'] + " * " + prices[0] + " = €" + price1 + "<br>") 
    }
    if(orderedAmounts['bier'] != 0){
        price2 = orderedAmounts['bier'] * prices[1]
        bill.innerHTML += ("Bier: " + orderedAmounts['bier'] + " Prijs: " + orderedAmounts['bier'] + " * " + prices[1] + " = €" + price2 + "<br>")
    }
    if(orderedAmounts['wijn'] != 0){
        price3 = orderedAmounts['wijn'] * prices[2]
        bill.innerHTML += ("Wijn: " + orderedAmounts['wijn'] + " Prijs: " + orderedAmounts['wijn'] + " * " + prices[2] + " = €" + price3 + "<br>")
    }
    if(orderedAmounts['8bitterballen'] != 0){
        price4 = orderedAmounts['8bitterballen'] * prices[3]
        bill.innerHTML += ("Bitterballen in schalen van 8: " + orderedAmounts['8bitterballen'] + " Prijs: " + orderedAmounts['8bitterballen'] + " * " + prices[3] + " = €" + price4 + "<br>")
    }
    if(orderedAmounts['16bitterballen'] != 0){
        price5 = orderedAmounts['16bitterballen'] * prices[4]
        bill.innerHTML += ("Bitterballen in schalen van 16: " + orderedAmounts['16bitterballen'] + " Prijs: " + orderedAmounts['16bitterballen'] + " * " + prices[4] + " = €" + price5 + "<br>")
    }

    let totaal = parseInt(price1) 
    totaal += parseInt(price2) 
    totaal += parseInt(price3) 
    totaal += parseInt(price4) 
    totaal += parseInt(price5)
    bill.innerHTML += ("Totaal: €" + totaal)
}