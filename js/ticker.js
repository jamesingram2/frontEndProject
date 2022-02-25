export async function ticker() {
   const tickerBar = document.getElementsByClassName('hmove')
   const response = await fetch("https://api.coincap.io/v2/assets");
   const data = await response.json();
   const tickerData = data.data;
   tickerData.forEach((coin) => {
       if (coin.changePercent24Hr < 0) {
           let tickerItem = `
               <div class="hitem"><span style="font-weight:bold">${coin.symbol}</span><span style="color:red;font-weight:bold"> (</span>${Math.abs(parseFloat(coin.changePercent24Hr).toFixed(2))}<span style="color:red;font-weight:bold">)</span></div>
               `
           tickerBar[0].innerHTML += tickerItem
       } else {
           let tickerItem = `
               <div class="hitem"><span style="font-weight:bold">${coin.symbol}</span><span style="color:limegreen;font-weight:bold"> (</span>${parseFloat(coin.changePercent24Hr).toFixed(2)}<span style="color:limegreen;font-weight:bold">)</span></div>
               `
           tickerBar[0].innerHTML += tickerItem
       }
   })
}