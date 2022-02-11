let calculatorResultsDiv = document.getElementById("calculatorResults");
document.getElementById("calculate").addEventListener('click', calcFunction);
document.getElementById('reset').addEventListener('click', function() {
   calculatorResultsDiv.innerHTML = "";
   window.location.reload();
})

function calcFunction() {
    let currAmt = document.getElementById('currAmt').value;
    let coin1 = document.getElementById('coin1').value;
    let coin1Price = document.getElementById(coin1).innerHTML;
    let coin2 = document.getElementById('coin2').value;
    let coin2Price = document.getElementById(coin2).innerHTML;

    if (currAmt <= 0) {
        alert('Please enter a valid currency amount');
    } else {
        if (coin1 === coin2) {
            alert('Please select two different currencies to compare');
        } else {
           const finalValue = ((+coin1Price / +coin2Price) * +currAmt).toFixed(4);
            calculatorResultsDiv.innerHTML = `<h2>${currAmt} ${coin1.toUpperCase()} = ${finalValue} ${coin2.toUpperCase()}</h2>`;
        }
    }
}
