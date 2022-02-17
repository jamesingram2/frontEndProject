export async function fetchHistory() {
   const response = await fetch(`https://api.coincap.io/v2/assets/${historyKey}/history?interval=d1`);
   const data = await response.json();
   const historyData = data.data;
   console.log(historyData);
}
fetchHistory();