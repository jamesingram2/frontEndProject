export function tableFunction() {
   async function fetchTable() {
   const tokenNameEl = document.getElementById("tokenName");
   const coin1El = document.getElementById("coin1");
   const coin2El = document.getElementById("coin2");
   const coinTableDIV = document.getElementById('tableBody');
   const response = await fetch("https://api.coincap.io/v2/assets");
   const data = await response.json();

   const tableData = data.data;
   tableData.forEach((coin) => {
      let id = coin.id;
      let rank = coin.rank;
      if (+rank < 10) {
         rank = "0" + rank;
      }
      let symbol = coin.symbol;
      let name = coin.name;
      let price = +coin.priceUsd;
      price = price.toFixed(4);
      let cap = +coin.marketCapUsd;
      cap = cap.toFixed(2);
      let changePercent = +coin.changePercent24Hr;
      changePercent = changePercent.toFixed(4);
      const tempCoinHTNL = `
      <tr>
         <td class="coinRank">${rank}</td>
         <td class="coinSymbol">${symbol}</td>
         <td class="coinName">${name}</td>
         <td class="coinPrice" id="${symbol}">${price}</td>
         <td class="coinCap">${cap}</td>
         <td class="change">${changePercent}</td>
      </tr>
      `;
      coinTableDIV.innerHTML += tempCoinHTNL;
      tokenNameEl.innerHTML += `<option value=${name.toLowerCase()}>${name}</option>`;
      coin1El.innerHTML += `<option value="${symbol}">${symbol}</option>`;
      coin2El.innerHTML += `<option value="${symbol}">${symbol}</option>`;


   });
   $(document).ready(function() {
      $('#coinTable').DataTable({
         "pagingType": "full"
      });
   } );
};
fetchTable();
const changeEl = document.getElementsByClassName("change");
const arrowEl = document.getElementsByClassName("arrow");
setTimeout(function() {
   for (let items of changeEl) {
      if (+items.innerHTML < 0) {
         items.innerHTML += `<i class="bi bi-caret-down-fill"></i>`
         items.style.color="red";
      } else {
         items.innerHTML += `<i class="bi bi-caret-up-fill"></i>`
         items.style.color="green";
      }
   }
}, 1200)
}
