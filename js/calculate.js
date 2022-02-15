export function calculate() {
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
        let finalValue = "";

        if (currAmt <= 0) {
            alert(`Please enter an amount to convert`);
        } else {
            if (coin1 !== coin2) {
                finalValue = ((+coin1Price / +coin2Price) * +currAmt).toFixed(5);
                calculatorResultsDiv.innerHTML = `<h2>${currAmt} ${coin1.toUpperCase()} = ${finalValue} ${coin2.toUpperCase()}</h2>`;
                let currencies = `currencies=${coin1}%2C${coin2}&amp;`
                document.getElementById('newsframe').src = `https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;${currencies}font_family=sans&amp;header_bg_color=ffffff&amp;header_text_color=666&amp;link_color=0091C2&amp;news_feed=trending&amp;posts_limit=8&amp;text_color=0c0c0c&amp;title=CryptoPanic%20News
                `
            } else  {
                alert(`Please select two different currencies`);
            }
        }
    }
}    
