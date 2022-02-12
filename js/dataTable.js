async function fetchTable() {
   const coin1El = document.getElementById("coin1");
   const coin2El = document.getElementById("coin2");
   const coinTableDIV = document.getElementById('coinTable');
   const response = await fetch("https://api.coincap.io/v2/assets");
   const data = await response.json();

   const tableData = data.data;
   tableData.forEach((coin) => {
      let id = coin.id;
      let rank = coin.rank;
      let symbol = coin.symbol;
      let name = coin.name;
      let price = +coin.priceUsd;
      let cap = +coin.marketCapUsd;
      let changePercent = +coin.changePercent24Hr;
      const tempCoinHTNL = `
      <tr>
      <td>${name}</td>
      <td>${symbol}</td>
         <td>${rank}</td>
         <td id="${symbol}">${price}</td>
         <td>${cap}</td>
         <td>${changePercent}</td>
      </tr>
      `;
      coinTableDIV.innerHTML += tempCoinHTNL;
      coin1El.innerHTML += `<option value="${symbol}">${symbol}</option>`;
      coin2El.innerHTML += `<option value="${symbol}">${symbol}</option>`;
   });
}
fetchTable();

