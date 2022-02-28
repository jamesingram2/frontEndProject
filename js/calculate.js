export function calculate() {
   let calculatorResultsDiv = document.getElementById("calculatorResults");
   document.getElementById('calculate').addEventListener('click', calcFunction);
   document.getElementById('reset').addEventListener('click', function() {
      calculatorResultsDiv.innerHTML = "";
   });

   function calcFunction() {
      let currAmt = document.getElementById('currAmt').value;
      let coin1 = document.getElementById('coin1').value;
      let coin1El = document.getElementById('coin1');
      let coin2 = document.getElementById('coin2').value;
      let finalValue = "";

      if (currAmt <= 0) {
         alert(`Please enter an amount to convert`);
      } else {
         if (coin1 !== coin2) {
            finalValue = ((+coin1 / +coin2) * +currAmt).toFixed(6);
            if (+finalValue >= 1000) {
               finalValue = Number(finalValue).toLocaleString();
            }
            calculatorResultsDiv.innerHTML = `<h2>${finalValue}</h2>`;
         } else {
            alert(`Please enter two different currencies`);
         }
      }
   }
}