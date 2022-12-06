var options = {
    container: document.getElementById('myChart'),
    title: {
      text: 'Prize money distribution',
    },

    data: histogramData,
    series: [
      {
        type: 'histogram',
        xKey: 'time',
        yKey: 'people',
        aggregation: 'sum',
      },
    ],
    legend: {
      enabled: false,
    },
    axes: [
      {
        type: 'number',
        position: 'bottom',
        title: { text: 'People' },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'Time' },
      },
    ],
    height: 500,
  };

agCharts.AgChart.create(options);


var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
for (let i = 0; i < daysOfTheWeek.length; i++) {
    options.container = document.querySelector("#" + daysOfTheWeek[i]);
    options.title.text = daysOfTheWeek[i];
    agCharts.AgChart.create(options);

};