export async function fetchGlobalData() {
   const global1 = document.getElementById('activeCurrencies');
   const global2 = document.getElementById('newICOs');
   const global3 = document.getElementById('endICOs');
   const global4 = document.getElementById('marketChange');
   const global5 = document.getElementById('markets');
   const global6 = document.getElementById('topMarketCap');

   const response = await fetch("https://api.coingecko.com/api/v3/global");
   const data = await response.json();
   const geckoData = data.data;
   console.log(geckoData);

   let activeCurr = geckoData.active_cryptocurrencies;
   let activeCurrFormatted = Number(activeCurr).toLocaleString();
   let markets = geckoData.markets;
   let upcomingICOs = geckoData.upcoming_icos;
   let upcomingICOsFormatted = Number(upcomingICOs).toLocaleString();
   let endedICOs = geckoData.ended_icos;
   let endedICOsFormated = Number(endedICOs).toLocaleString();
   let globalMarketCapChange = geckoData.market_cap_change_percentage_24h_usd;
   globalMarketCapChange = globalMarketCapChange.toFixed(2);
   let marketCapPercentage = geckoData.market_cap_percentage.btc;
   marketCapPercentage = marketCapPercentage.toFixed(2);

   global1.innerHTML += `<i class="bi bi-cash-coin"></i><br><h4>${activeCurrFormatted}</h4>`;
   global2.innerHTML += `<i class="bi bi-check-circle"></i><br><h4>${upcomingICOsFormatted}</h4>`;
   global3.innerHTML += `<i class="bi bi-x-circle"></i><br><h4>${endedICOsFormated}</h4>`;
   if (globalMarketCapChange < 0) {
      global4.innerHTML += `<i class="bi bi-arrow-down-circle"></i><h4>${globalMarketCapChange}%</h4>`;
   } else {
      global4.innerHTML += `<i class="bi bi-arrow-up-circle"></i><br><h4>${globalMarketCapChange}%</h4>`;
   }
   global5.innerHTML += `<i class="bi bi-bank2"></i><br><h4>${markets}</h4>`;
   global6.innerHTML += `<i class="bi bi-currency-bitcoin"></i><br><h4>${marketCapPercentage}%</h4>`;

   const globalArr = [global1, global2, global3, global4, global5, global6];

   for (let el of globalArr) {
      el.addEventListener('mouseover', function() {
         el.style.backgroundColor = "#03465e";
         el.style.color = "#fff";
      });
      el.addEventListener('mouseout', function() {
         el.style = "";
      });
   }
}