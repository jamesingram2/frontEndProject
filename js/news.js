export async function fetchNews() {
    const newsDiv = document.getElementById('news');
    let newsFrame = `
    <iframe id="newsframe" scrolling="yes" allowtransparency="true" src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;font_family=sans&amp;header_bg_color=6a6969&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=trending&amp;posts_limit=10&amp;text_color=333333&amp;title=Latest%20News" width="100%" height="500px" frameborder="0"></iframe>
    `
    newsDiv.innerHTML = newsFrame
}