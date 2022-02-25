const cardArr = ['card1', 'card2', 'card3'];

function cardHover(arr) {
   for (eventElement of cardArr) {
      let cardEl = document.getElementById(`${eventElement}`);
      cardEl.addEventListener('mouseover', function() {
         cardEl.style.backgroundColor = "darkgray";
      });
      cardEl.addEventListener('mouseout', function() {
         cardEl.style = "";
      }) 
   }
}

cardHover(cardArr);