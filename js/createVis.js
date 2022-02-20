export function history() {
   const coinListEl = document.getElementsByClassName("coinList");
   for (let items of coinListEl) {
      const tempGraphDiv = document.getElementById("tempGraph");
      items.addEventListener('click', function() {
         let coinKey;
         const graphsDiv = document.getElementById("graphs");
         tempGraphDiv.style.display="none";
         graphsDiv.innerHTML = "";
         coinKey = items.value;
         async function fetchHistory() {
            let xArr = [];
            let yArr = [];
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=d1`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + " (One Year)"
            };
            Plotly.newPlot('graphs', dataPoints, layout);
         }
         setTimeout(fetchHistory, 800);

         document.getElementById("year").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=d1`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + " (One Year)"
            };
            Plotly.newPlot('graphs', dataPoints, layout);
         })

         document.getElementById("month").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=h1`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + " (One Month)"
            };
            Plotly.newPlot('graphs', dataPoints, layout);
         })

         document.getElementById("week").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=m15`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + " (One Week)"
            };
            Plotly.newPlot('graphs', dataPoints, layout);
         })

         document.getElementById("day").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=m1`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + " (One Day)"
            };
            Plotly.newPlot('graphs', dataPoints, layout);
         })
      })
   }
}
history();
