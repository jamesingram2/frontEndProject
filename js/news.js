async function fetchNews() {
    const response = await fetch("https://cryptopanic.com/api/v1/posts/?auth_token=eb162bf88cac2ab2f4c85aff1ceceac5776756a3&type=news&filter=hot&public=true");
    const data = await response.json();
    const news = data.results
    const newsDiv = document.getElementById('news');
    let l = 10
    for (i = 0; i < l; i++) {
        if (news[i].currencies != undefined) {
            if (news[i].title.length > 70) {
                let tempArticle = `
                <div>
                    <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${news[i].currencies[0].code.toLowerCase()}.png">
                    <h6 class="centered">${news[i].title}</h6>
                </div>
                `
                newsDiv.innerHTML += tempArticle
            } else {
                let tempArticle = `
                <div>
                    <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${news[i].currencies[0].code.toLowerCase()}.png">
                    <h6>${news[i].title}</h6>
                </div>
                `
                newsDiv.innerHTML += tempArticle
            }
        } else {
            l++
        }
        
    }
}
fetchNews();