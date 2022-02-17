export function fetchHistory() {
   document.getElementById('reset2').addEventListener('click', function() {
      document.getElementById("graph").innerHTML = "";
   });
   document.getElementById("getHistory").addEventListener('click', async function() {
      let xArr = [];
      let yArr = [];
      let historyKey = document.getElementById("tokenName").value;
      console.log(historyKey);
      const response = await fetch(`https://api.coincap.io/v2/assets/${historyKey}/history?interval=d1`);
      const data = await response.json();
      const historyData = data.data;
      for (let items of historyData) {
         let x = items.priceUsd;
         xArr.push(x);
         let y = items.date
         yArr.push(y);
      }
      let trace1 = {
         y: xArr,
         x: yArr,
         type: 'scatter'
      };
      let dataPoints = [trace1]
      Plotly.newPlot('graph', dataPoints);
   })
}
fetchHistory()