function getChart(name, name1, name2, data, data2) {
    var ctx = document.getElementById(`${name}Chart`).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['PTS', 'REB', 'AST', 'PER', 'BLK', 'STL'],
            datasets: [{
                label: name1,
                data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: name2,
                data: data2,
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                borderColor: 'rgba(0, 0, 255, 0.2)',
                borderWidth: 1,
            }]
        }
    })
}
