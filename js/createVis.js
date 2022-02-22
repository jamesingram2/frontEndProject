export function history() {
   const coinListEl = document.getElementsByClassName("coinList");
   let xArr1 = [];
   let yArr1 = [];
   let xArr2 = [];
   let yArr2 = [];
   let period = ''
   let periodTitle = ''

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
            period = 'm15'
            periodTitle = " (One Week)"
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=${period}`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            xArr1 = xArr
            yArr1 = yArr
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + periodTitle
            };
            Plotly.newPlot('graphs', dataPoints, layout);
            comparator.addEventListener("change", async function() {
               let comparator = document.getElementById('comparator');
               comparator = comparator.value.toLowerCase()
               console.log(comparator)
               const response2 = await fetch(`https://api.coincap.io/v2/assets/${comparator}/history?interval=${period}`);
               const data2 = await response2.json();
               const historyData2 = data2.data;
               console.log(historyData2)
               xArr2 = [];
               yArr2 = [];
               for (let items of historyData2) {
                  let x = items.date;
                  xArr2.push(x);
                  let y = items.priceUsd;
                  yArr2.push(y);
               };
               let trace1 = {
                  x: xArr1,
                  y: yArr1,
                  type: 'scatter'
               };
               let trace2 = {
                  x: xArr2,
                  y: yArr2,
                  type: 'scatter'
               };
               let dataPoints = [trace1,trace2]
               let titleName = `${coinKey}`;
               let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
               let titleName3 = `${comparator}`;
               let titleName4 = titleName3.charAt(0).toUpperCase() + titleName3.slice(1);
               let layout = {
                  title: titleName2 + " vs " + titleName4 + periodTitle
               };
               Plotly.newPlot('graphs', dataPoints, layout);
            })
         }
         setTimeout(fetchHistory, 800);

         async function compare() {
            let comparator = document.getElementById('comparator');
            comparator = comparator.value.toLowerCase()
            const response2 = await fetch(`https://api.coincap.io/v2/assets/${comparator}/history?interval=${period}`);
            const data2 = await response2.json();
            const historyData2 = data2.data;
            xArr2 = [];
            yArr2 = [];
            for (let items of historyData2) {
               let x = items.date;
               xArr2.push(x);
               let y = items.priceUsd;
               yArr2.push(y);
            };
            let trace1 = {
               x: xArr1,
               y: yArr1,
               type: 'scatter'
            };
            let trace2 = {
               x: xArr2,
               y: yArr2,
               type: 'scatter'
            };
            let dataPoints = [trace1,trace2]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let titleName3 = `${comparator}`;
            let titleName4 = titleName3.charAt(0).toUpperCase() + titleName3.slice(1);
            let layout = {
               title: titleName2 + " vs " + titleName4 + periodTitle
            };
            Plotly.newPlot('graphs', dataPoints, layout);
         }

         document.getElementById("year").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            period = 'd1'
            periodTitle = " (One Year)"
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=${period}`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            xArr1 = xArr
            yArr1 = yArr
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
            if (comparator.value != 'Select One…') {
               compare()
            }
         })

         document.getElementById("month").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            period = 'h1'
            periodTitle = " (One Month)"
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=${period}`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            xArr1 = xArr
            yArr1 = yArr
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
            if (comparator.value != 'Select One…') {
               compare()
            }
         })

         document.getElementById("week").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            period = 'm15'
            periodTitle = " (One Week)"
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=${period}`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            xArr1 = xArr
            yArr1 = yArr
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
            if (comparator.value != 'Select One…') {
               compare()
            }
         })

         document.getElementById("day").addEventListener("click", async function() {
            let xArr = [];
            let yArr = [];
            period = 'm1'
            periodTitle = " (One Day)"
            const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}/history?interval=${period}`);
            const data = await response.json();
            const historyData = data.data;
            for (let items of historyData) {
               let x = items.date;
               xArr.push(x);
               let y = items.priceUsd;
               yArr.push(y);
            }
            xArr1 = xArr
            yArr1 = yArr
            let trace = {
               x: xArr,
               y: yArr,
               type: 'scatter'
            };
            let dataPoints = [trace]
            let titleName = `${coinKey}`;
            let titleName2 = titleName.charAt(0).toUpperCase() + titleName.slice(1);
            let layout = {
               title: titleName2 + periodTitle
            };
            Plotly.newPlot('graphs', dataPoints, layout);
            if (comparator.value != 'Select One…') {
               compare()
            }
         })
      })
   }
}