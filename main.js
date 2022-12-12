async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

var histogramData;

var options = {
    container: document.getElementById(''),
    title: {
      text: '',
    },

    
    data:histogramData,
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

fetchJSON('sample.json')
  .then(data => {
    // i could actually build the graphs and then add the data later.
    // not sure how i am going to handle the data though.
    options.data = data;
    for (let i = 0; i < daysOfTheWeek.length; i++) {
      options.container = document.querySelector("#" + daysOfTheWeek[i]);
      options.title.text = '' +daysOfTheWeek[i];
      agCharts.AgChart.create(options);
  
  };
  });
