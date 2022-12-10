
fetch('./sample.json')
.then((response) => response.json())
.then((json) => console.log(json));

var options = {
    container: document.getElementById(''),
    title: {
      text: '',
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
        type: 'time',
        position: 'bottom',
        title: { text: 'Time' },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'People' },
      },
    ],
    height: 400,
  };


var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
for (let i = 0; i < daysOfTheWeek.length; i++) {
    options.container = document.querySelector("#" + daysOfTheWeek[i]);
    options.title.text = '' +daysOfTheWeek[i];
    agCharts.AgChart.create(options);

};