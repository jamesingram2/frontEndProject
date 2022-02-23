export function importData() {
   async function fetchData() {
      const coinListDiv = document.getElementById("coinListDiv");
      const coinListEl = document.getElementsByClassName("coinList");
      const coin1El = document.getElementById('coin1');
      const coin2El = document.getElementById('coin2');
      const comparator = document.getElementById('comparator');
      const response = await fetch("https://api.coincap.io/v2/assets");

      const data = await response.json();
      const coinList = data.data;
      coinList.forEach((coin) => {
         let coinIcon = coin.symbol.toLowerCase()
         switch (coin.symbol) {
            case 'LUNA': coinIcon = 'generic'
            break
            case 'BUSD': coinIcon = 'generic'
            break
            case 'AVAX': coinIcon = 'generic'
            break
            case 'SHIB': coinIcon = 'generic'
            break
            case 'UST': coinIcon = 'generic'
            break
            case 'CRO': coinIcon = 'generic'
            break
            case 'FTT': coinIcon = 'generic'
            break
            case 'NEAR': coinIcon = 'generic'
            break
            case 'STETH': coinIcon = 'generic'
            break
            case 'FTM': coinIcon = 'generic'
            break
            case 'BTCB': coinIcon = 'generic'
            break
            case 'EGLD': coinIcon = 'generic'
            break
            case 'KLAY': coinIcon = 'generic'
            break
            case 'HBAR': coinIcon = 'generic'
            break
            case 'AXS': coinIcon = 'generic'
            break
            case 'FRAX': coinIcon = 'generic'
            break
            case 'HNT': coinIcon = 'generic'
            break
            case 'BTTOLD': coinIcon = 'generic'
            break
            case 'CAKE': coinIcon = 'generic'
            break
            case 'TTT': coinIcon = 'generic'
            break
            case 'FLOW': coinIcon = 'generic'
            break
            case 'GALA': coinIcon = 'generic'
            break
            case 'XEC': coinIcon = 'generic'
            break
            case 'QNT': coinIcon = 'generic'
            break
            case 'CVX': coinIcon = 'generic'
            break
            case 'KDA': coinIcon = 'generic'
            break
            case 'OKB': coinIcon = 'generic'
            break
            case 'CHZ': coinIcon = 'generic'
            break
            case 'CELO': coinIcon = 'generic'
            break
            case 'DFI': coinIcon = 'generic'
            break
            case 'USDP': coinIcon = 'generic'
            break
            case 'SCRT': coinIcon = 'generic'
            break
            case 'MINA': coinIcon = 'generic'
            break
            case 'AR': coinIcon = 'generic'
            break
            case 'TFUEL': coinIcon = 'generic'
            break
            case 'XYM': coinIcon = 'generic'
            break
            case 'ROSE': coinIcon = 'generic'
            break
            case 'CEL': coinIcon = 'generic'
            break
            case 'OMI': coinIcon = 'generic'
            break
            case 'KOK': coinIcon = 'generic'
            break
            case 'RUNE': coinIcon = 'generic'
            break
            case 'CCXX': coinIcon = 'generic'
            break
            case 'ANC': coinIcon = 'generic'
            break
         }
         const tempCoinListHTML = `
         <button name="${coin.symbol}" type="button" class="btn coinList" data-bs-dismiss="offcanvas" value="${coin.id}"><img class="coinIcon" src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${coinIcon}.png">${coin.name}</button><br>
         `;
         coinListDiv.innerHTML += tempCoinListHTML;
         coin1El.innerHTML += `<option value="${coin.priceUsd}">${coin.symbol}</option>`;
         coin2El.innerHTML += `<option value="${coin.priceUsd}">${coin.symbol}</option>`;
         comparator.innerHTML += `<option value="${coin.name}">${coin.symbol}</option>`;
      })
   }
   fetchData();

   function populateData() {
      const coinListEl = document.getElementsByClassName("coinList");
      const coin1El = document.getElementById('coin1');
      const coin2El = document.getElementById('coin2');
      for (let items of coinListEl) {
         items.addEventListener('click', function() {
            let coinKey = items.value;
            let symbol = ''
            async function fetchCoinData() {
               const coinNameDiv = document.getElementById("coinName");
               const coinRankDiv = document.getElementById("coinRank");
               const coinPriceDiv = document.getElementById("coinPrice");
               const coinSymbolDiv = document.getElementById("coinSymbol");
               const coinCapDiv = document.getElementById("coinCap");
               const coinChangeDiv = document.getElementById("coinChange");
               const response = await fetch(`https://api.coincap.io/v2/assets/${coinKey}`);
               const data = await response.json();
               const dataList = data.data;
               let name = dataList.name;
               let rank = "#" + dataList.rank;
               let symbol = dataList.symbol;
               setTimeout(function async () {
                  const newsframe = document.getElementById('newsframe');
                  let currency = `currencies=${symbol}&amp;`
                  newsframe.src = `https://cryptopanic.com/widgets/news/?${currency}bg_color=FFFFFF&amp;font_family=sans&amp;header_bg_color=ffffff&amp;header_text_color=666&amp;link_color=0091C2&amp;posts_limit=10&amp;text_color=0c0c0c&amp;title=CryptoPanic%20News`
               },500)
               let price = +dataList.priceUsd;
               price = price.toFixed(2);
               price = "$" + price;
               let cap = +dataList.marketCapUsd;
               cap = cap.toFixed(2);
               cap = "$" + cap;
               let change = +dataList.changePercent24Hr;
               change = change.toFixed(4);
               change = change + "%";
               coinNameDiv.innerHTML = `Name<br><i class="bi bi-currency-exchange"></i><br>${name}`
               coinRankDiv.innerHTML = `Rank<br><i class="bi bi-bar-chart"></i><br>${rank}`;
               coinSymbolDiv.innerHTML = `Symbol<br><i class="bi 
               bi-info-circle"></i><br>${symbol}`;
               coinPriceDiv.innerHTML = `Price (USD)<br><i class="bi bi-currency-dollar"></i><br>${price}`;
               coinCapDiv.innerHTML = `Market Cap<br><i class="bi bi-pie-chart"></i><br>${cap}`;
               if (+dataList.changePercent24Hr < 0) {
                  coinChangeDiv.innerHTML = `24 Hr Change<br><i class="bi bi-arrow-down-circle"></i><br>${change}`;
               } else {
                  coinChangeDiv.innerHTML = `24 Hr Change<br><i class="bi bi-arrow-up-circle"></i><br>${change}`
               }

               coinNameDiv.addEventListener('mouseover', function() {
                  // coinNameDiv.style.fontSize="1.25rem";
                  coinNameDiv.style.color="#fff";
                  coinNameDiv.style.backgroundColor="#03465e";
                  // coinNameDiv.style.marginBottom="0px";
               })
               coinNameDiv.addEventListener('mouseout', function() {
                  coinNameDiv.style = "";
               })
            
               coinRankDiv.addEventListener('mouseover', function() {
                  // coinRankDiv.style.fontSize="1.25rem";
                  coinRankDiv.style.color="#fff";
                  coinRankDiv.style.backgroundColor="#03465e";
                  // coinRankDiv.style.marginBottom="0px";
               })
               coinRankDiv.addEventListener('mouseout', function() {
                  coinRankDiv.style = "";
               })
            
               coinSymbolDiv.addEventListener('mouseover', function() {
                  // coinSymbolDiv.style.fontSize="1.25rem";
                  coinSymbolDiv.style.color="#fff";
                  coinSymbolDiv.style.backgroundColor="#03465e";
                  // coinSymbolDiv.style.marginBottom="0px";
               })
               coinSymbolDiv.addEventListener('mouseout', function() {
                  coinSymbolDiv.style = "";
               })
            
               coinPriceDiv.addEventListener('mouseover', function() {
                  // coinPriceDiv.style.fontSize="1.25rem";
                  coinPriceDiv.style.color="#fff";
                  coinPriceDiv.style.backgroundColor="#03465e";
                  // coinPriceDiv.style.marginBottom="0px";

               })
               coinPriceDiv.addEventListener('mouseout', function() {
                  coinPriceDiv.style = "";
               })
            
               coinCapDiv.addEventListener('mouseover', function() {
                  // coinCapDiv.style.fontSize="1.25rem";
                  coinCapDiv.style.color="#fff";
                  coinCapDiv.style.backgroundColor="#03465e";
                  // coinCapDiv.style.marginBottom="0px";

               })
               coinCapDiv.addEventListener('mouseout', function() {
                  coinCapDiv.style = "";
               })
            
               coinChangeDiv.addEventListener('mouseover', function() {
                  // coinChangeDiv.style.fontSize="1.25rem";
                  coinChangeDiv.style.color="#fff";
                  coinChangeDiv.style.backgroundColor="#03465e";
                  // coinChangeDiv.style.marginBottom="0px";
               })
               coinChangeDiv.addEventListener('mouseout', function() {
                  coinChangeDiv.style = "";
               })
            } 
            fetchCoinData();
         })
      }
   }
   setTimeout(async function() {
      let topCoin = document.getElementById('coinListDiv').firstElementChild
      topCoin.click()
   }, 1200)
   setTimeout(populateData, 800)
}
importData();