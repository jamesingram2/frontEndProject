import { ticker } from "./ticker.js";
import { fetchNews } from "./news.js";
import { importData } from "./importData.js";
import { history } from "./createVis.js";
import { calculate } from "./calculate.js";

setTimeout(history, 500);
setTimeout(calculate, 1000);
fetchNews();
ticker();
