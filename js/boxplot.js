const CSV =
    //data "https://";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        processData(rows);
    });
}

function processData(allRows) {
    let y1 = [];
    let y2 = [];
    let y3 = [];
    let row;

    let i = 0;
    while (i < allRows.length) {
        row = allRows[i];
        y1.push(row["Sim 1"]);
        y2.push(row["Sim 2"]);
        y3.push(row["Sim 3"]);
        i += 1;
    }

    makePlotly(y1, y2, y3);
}

function makePlotly(y1, y2, y3) {
    let traces = [
        {
            y: y1,
            type: "box",
            // boxmean: true,
            name: "Sim 1"
        },
        {
            y: y2,
            type: "box",
            // boxpoints: "all",
            name: "Sim 2"
        },
        {
            y: y3,
            type: "box",
            // boxpoints: false,
            name: "Sim 3"  
        }
    ];

    let layout = {
        title: "Sample Box Plot",
        yaxis: {
            // gridcolor: "lightgrey",
            // gridwidth: 2,
            // zerolinewidth: 3
        }
    };

    let config = { responsive: true };

    Plotly.newPlot("plot", traces, layout, config);
}

plotFromCSV();
