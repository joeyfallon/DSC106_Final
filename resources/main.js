function getChart(name, name1, name2, data1, data2) {
    var ctx = document.getElementById(`${name}Chart`).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['PTS', 'REB', 'AST'],
            datasets: [{
                label: name1,
                data: data1,
                backgroundColor: 'rgba(142, 195, 167, 0.5)',
                borderColor: 'rgba(142, 195, 167, 1)',
                borderWidth: 1,
            },
            {
                label: name2,
                data: data2,
                backgroundColor: 'rgba(250, 203, 105, 0.5)',
                borderColor: 'rgba(250, 203, 105, 1)',
                borderWidth: 1,
            }]
        }
    })
}
