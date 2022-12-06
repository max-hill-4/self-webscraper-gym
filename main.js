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

agCharts.AgChart.create({
    container: document.querySelector("#Monday"),
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





})


var options = {
    container: HTMLElement | string,
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


for (let i = 0; i < 7; i++) {
    options.container = document.querySelector("#Monday");
    agCharts.AgChart.create(options);
  }

agCharts.AgChart.create(options);