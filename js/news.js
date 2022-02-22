export async function fetchNews() {
   const newsDiv = document.getElementById('news');
   let newsFrame = `
   <iframe id="newsframe" scrolling="no" allowtransparency="true" src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;font_family=sans&amp;header_bg_color=ffffff&amp;header_text_color=666&amp;link_color=0091C2&amp;news_feed=trending&amp;posts_limit=10&amp;text_color=0c0c0c&amp;title=CryptoPanic%20News" width="100%" height="800px" frameborder="0"></iframe>
   `
   newsDiv.innerHTML += newsFrame
}