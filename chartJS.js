//Ethan McCarthy
//Exploration Activity 2
//chartJS

// chartJS.js

function generateChart() {
    const chartTitle = document.getElementById("chartTitle").value;
    const chartType = document.getElementById("chartType").value;

    let data;
    let options;

    if (chartType === 'bar' || chartType === 'pie') {
        const labelsInput = document.getElementById("labelsInput").value;

        data = {
            labels: labelsInput.split(' ').map(pair => {
                const [label, value] = pair.split(',');
                return label;
            }),
            datasets: [{
                data: labelsInput.split(' ').map(pair => {
                    const [label, value] = pair.split(',');
                    return parseFloat(value);
                }),
                label: ''
            }]
        };
        console.log(data);

        options = {
            maintainAspectRatio: false,
            responsive: true, 
            plugins: {
                title: {
                    display: true,
                    text: chartTitle
                }
            }
        };
    } else {
        const xAxisLabel = document.getElementById("xLabel").value;
        const yAxisLabel = document.getElementById("yLabel").value;
        const dataInput = document.getElementById("dataInput").value;

        data = {
            labels: [],
            datasets: [{
                data: dataInput.split(' ').map(pair => {
                    let split = pair.split(',');
                    const x = parseFloat(split[0]);
                    const y = parseFloat(split[1]);
                    console.log(typeof x, typeof y);
                    return { x, y };
                }),
                label: 'Line 1'
            }]
        };
        console.log(data);

        options = {
            maintainAspectRatio: false, 
            responsive: true, 
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: xAxisLabel
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: yAxisLabel
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: chartTitle
                }
            }
        };
    }

    const chartContainer = document.getElementById("myChart");

    chartContainer.innerHTML = '<canvas id="myChart"></canvas>';

    myChart = new Chart("myChart", {
        type: chartType,
        data: data,
        options: options
    });
}


function updateChartType() {
    const chartType = document.getElementById("chartType").value;
    const labelsInputDiv = document.getElementById("labelsInputDiv");
    const xAxisLabel = document.getElementById("xLabel");
    const yAxisLabel = document.getElementById("yLabel");
    const dataInputDiv = document.getElementById("dataInputDiv");

    if (chartType === 'bar' || chartType === 'pie') {
        labelsInputDiv.style.display = 'block';

        xAxisLabel.style.display = 'none';
        yAxisLabel.style.display = 'none';
        dataInputDiv.style.display = 'none';
    } else {
        labelsInputDiv.style.display = 'none';

        xAxisLabel.style.display = 'block';
        yAxisLabel.style.display = 'block';
        dataInputDiv.style.display = 'block';
    }
}



