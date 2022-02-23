const cardArr = ['card1', 'card2', 'card3'];

function cardHover(arr) {
   for (eventElement of cardArr) {
      let cardEl = document.getElementById(`${eventElement}`);
      cardEl.addEventListener('mouseover', function() {
         cardEl.style.backgroundColor = "#0c0c0c";
         cardEl.style.color = "#fff";
         cardEl.style.border = "3px solid #ccc";
      });
      cardEl.addEventListener('mouseout', function() {
         cardEl.style.backgroundColor = "#fff";
         cardEl.style.color = "#000"
         cardEl.style.border = "";
      }) 
   }
}

cardHover(cardArr);