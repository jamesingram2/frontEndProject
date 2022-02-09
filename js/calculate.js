// Template Code (will be updated with correct code later)

// const select = document.querySelectorAll('.currency');
// const number = document.getElementById("number");
// const output = document.getElementById("output");


// fetch('https://api.frankfurter.app/currencies').then((data) => data.json())
// .then((data) => {
// display(data);
// });


// function display(data) {
// const entries = Object.entries(data);
// for (var i = 0; i < entries.length; i++) { select[0].innerHTML +=`<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
//     select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
//     }
//     }



//     function updatevalue() {
//     let currency1 = select[0].value;
//     let currency2 = select[1].value;

//     let value = number.value;


//     if (currency1 != currency2) {
//     convert(currency1, currency2, value);
//     } else {
//     alert("Choose Diffrent Currency");
//     }
//     }


//     function convert(currency1, currency2, value) {
//     const host = "api.frankfurter.app";

//     fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
//     .then((val) => val.json())
//     .then((val) => {
//     console.log(Object.values(val.rates)[0]);
//     output.value = Object.values(val.rates)[0];
//     });

//     }