import { fetchGlobalData } from "./globalData.js";
import { importData } from "./importData.js";
import { history } from "./createVis.js";
import { calculate } from "./calculate.js";
import { fetchNews } from "./news.js";
import { ticker } from "./ticker.js";

fetchGlobalData();
importData();
setTimeout(history, 800);
setTimeout(calculate, 1000);
fetchNews();
ticker();
