const CSV =
    //data: "https://";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        console.log(rows);
        processData(rows);
    });
}

function processData(allRows) {
    let x = [];
    let y1 = [];
    let y2 = [];
    let row;

    let i = 0;
    while (i < allRows.length) {
        row = allRows[i];
        x.push(row["Date"]);
        y1.push(row["A"]);
        y2.push(row["B"]);
        i += 1;
    }
    
    console.log("X", x);
    console.log("Y1", y1);

    makePlotly(x, y1, y2);
}

function makePlotly(x, y1, y2) {
    let traces = [
        {
            x: x,
            y: y1,
            name: "A",
            line: {
                color: "#387fba",
                width: 3
            }
        },
        {
            x: x,
            y: y2,
            name: "B",
            line: {
                color: "#54ba38",
                width: 3,
                // dash: "dash"
            }
        }
    ];

    let layout = {
        title: "Basic Line Chart",
        yaxis: {
            range: [0, 100]
        },
        xaxis: {
            // tickformat: "%d/%m/%y"
        },
    };

    //https://plot.ly/javascript/configuration-options/
    let config = { 
        responsive: true,
        // staticPlot: true,
        // editable: true
    };

    Plotly.newPlot("plot", traces, layout, config);
}

plotFromCSV();
