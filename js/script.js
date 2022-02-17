import { fetchNews } from "./news.js";
import { ticker } from "./ticker.js";
import { tableFunction } from "./dataTable.js";
import { calculate } from "./calculate.js";
import { fetchHistory } from "./createVis.js";
// import { fetchHistory } from "./history.js";

fetchNews()
ticker()
// setTimeout(ticker, 500);
tableFunction();
setTimeout(calculate, 500);
