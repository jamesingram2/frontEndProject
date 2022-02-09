async function fetchTable() {
   const coinTableDIV = document.getElementById('coinTable');
   const response = await fetch("https://api.coincap.io/v2/assets");
   const data = await response.json();

   const tableData = data.data;
   let count = 0;
   tableData.forEach((coin) => {
      let rank = coin.rank;
      let symbol = coin.symbol;
      let name = coin.name;
      let price = +coin.priceUsd;
      let cap = +coin.marketCapUsd;
      let changePercent = +coin.changePercent24Hr;
      const tempCoinHTNL = `
      <tr>
         <td>${rank}</td>
         <td>${symbol}</td>
         <td>${name}</td>
         <td>${price}</td>
         <td>${cap}</td>
         <td>${changePercent}</td>
      </tr>
      `;
      coinTableDIV.innerHTML += tempCoinHTNL;
   });
}
fetchTable();