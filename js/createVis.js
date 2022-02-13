export function tableOnClick() {
   let visEl = document.getElementById("graphsDiv");
   visEl.innerHTML += `<img src="./img/sample_graph.png">`;
   let table = document.querySelector('table');
   for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].addEventListener('click', function() {
         let coinKey = this.cells[1].innerText;
         let headingName = this.cells[0].innerText;
         visEl.innerHTML = `
            <h3>${headingName} Historical Data</h3>
            <img src="./img/${coinKey.toLowerCase()}.png">
         `;
      })
   }
}