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
         <td class="coinName">${name}</td>
         <td class="coinSymbol">${symbol}</td>
         <td class="coinRank">${rank}</td>
         <td class="coinPrice" id="${symbol}">${price}</td>
         <td class="coinCap">${cap}</td>
         <td class="change">${changePercent}</td>
      </tr>
      `;
      coinTableDIV.innerHTML += tempCoinHTNL;
      coin1El.innerHTML += `<option value="${symbol}">${symbol}</option>`;
      coin2El.innerHTML += `<option value="${symbol}">${symbol}</option>`;
   });
   const x = document.getElementsByClassName("change")
   for (items of x) {
      let changePlusMinus = items.innerHTML;
      if (+changePlusMinus < 0) {
         items.style.color = "red";
      } else {
         items.style.color = "green";
      }
   }
}
fetchTable();

