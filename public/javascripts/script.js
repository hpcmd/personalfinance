

var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["01/01/2020", "01/02/2020", "01/03/2020", "01/04/2020", "01/05/2020", "01/06/2020", "01/07/2020"
  ,"01/08/2020","01/09/2020","01/10/2020"
],
  
  datasets: [
  {
    data: [639, 465, 493, 478, 589, 632, 674,690,682,685,637,710],
    backgroundColor: colors[3],
    borderColor: colors[1],
    borderWidth: 4,
    pointBackgroundColor: colors[1]
  }]
};

if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          label:'test'
        }
      }]
    },
    legend: {
      display: true,
      label:'test'
    }
  }
  });
  
}


var pieData = {
  datasets: [{
    data: [300, 110, 50, 100,25],
    backgroundColor: [
      "#F7464A",
      "#46BFBD",
      "#FDB45C",
      "#C38D9E",
      "#05386B"
    ]
  }],
  labels: [
    "Liquidité",
    "Epargne",
    "Assurance-Vie",
    "Amazon",
    "FEC"
  ]
};

$(document).ready(
  function() {
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var myNewChart = new Chart(ctx, {
      type: 'pie',
      data: pieData
    });

    canvas.onclick = function(evt) {
      var activePoints = myNewChart.getElementsAtEvent(evt);
      if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        var value = chartData.datasets[0].data[idx];

        var url = "/detailed_info.html";
        location.href = url;
      }
    };
  }


  );
