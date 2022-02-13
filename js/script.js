import { fetchNews } from "./news.js";
// import { ticker } from "./ticker.js";
import { fetchTable } from "./dataTable.js";
import { calculate } from "./calculate.js";
import { tableOnClick } from "./createVis.js";

fetchNews()
// setTimeout(ticker, 500);
fetchTable();
setTimeout(calculate, 500);
setTimeout(tableOnClick, 1000);
