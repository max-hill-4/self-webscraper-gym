async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}



var options = {
    container: document.getElementById(''),
    title: {
      text: '',
    },

    
    data:[],
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

// this probably doesnt need to be async but i have no idea lmaoo!
fetchJSON('data.json')
  .then(data => {
    // i could actually build the graphs and then add the data later.
    // not sure how i am going to handle the data though.
    for (let i = 0; i < daysOfTheWeek.length; i++) {
      options.container = document.querySelector("#" + daysOfTheWeek[i]);
      options.title.text = '' +daysOfTheWeek[i];
      if (daysOfTheWeek[i] in data){
        options.data = data[daysOfTheWeek[i]];
      }
      else{
        options.data = [];
      }
      agCharts.AgChart.create(options);
  };
});
