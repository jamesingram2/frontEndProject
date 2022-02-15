import { fetchNews } from "./news.js";
import { ticker } from "./ticker.js";
import { tableFunction } from "./dataTable.js";
import { calculate } from "./calculate.js";
import { tableOnClick } from "./createVis.js";

fetchNews()
ticker()
// setTimeout(ticker, 500);
tableFunction();
setTimeout(calculate, 500);
setTimeout(tableOnClick, 1000);