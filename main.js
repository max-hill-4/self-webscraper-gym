var data = [
    {
        beverage: 'Hour1',
        People: 30,
    },
    {
        beverage: 'Tea',
        People: 10,
    },
    {
        beverage: 'Milk',
        People: 5,
    }
];

var options = {
    container: document.querySelector('#Monday'),
    data: data,
    title: {
        text: 'Day'
    },

    padding: {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40
    },
    series: [
        { type: 'column', xKey: 'beverage', yKey: 'People', stacked: false,showInLegend: false, fill: '#7ec8e3'},

    ],
    legend: {
        spacing: 50,
    }
};




var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
for (let i = 0; i < daysOfTheWeek.length; i++) {
    options.container = document.querySelector("#" + daysOfTheWeek[i]);
    options.title.text = daysOfTheWeek[i];
    agCharts.AgChart.create(options);

};