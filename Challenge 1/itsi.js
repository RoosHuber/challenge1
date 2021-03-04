
/*Pie*/
      google.charts.load('current', {
        'packages': ['corechart']
      });

       google.charts.setOnLoadCallback(drawPieChart);
       google.charts.setOnLoadCallback(drawBarChart);
       google.charts.setOnLoadCallback(drawDonutChart);


      function drawPieChart() {

        var data = google.visualization.arrayToDataTable([
          ['Gas', 'percantage'],
          ['Nitrogen', 78],
          ['Oxygen', 21],
          ['Argon', 1],
        ]);

        var options = {
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

/*Bar*/
 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawBarChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Food', 'Consumed', 'Wasted'],
          ['April', 1000, 100, 0],
          ['May', 900, 90, 10],
          ['June', 800, 100, 0],
          ['July', 700, 80, 20]
        ]);

        var options = {
          
          bars: 'horizontal', 
          hAxis: {format: 'decimal'},
          height: 400,
          colors: ['#064E88', '#0764B0', '#097bd7']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

       
      }



/*Donut*/
      function drawDonutChart() {

        var data = google.visualization.arrayToDataTable([
          ['Happiness', 'Happy'],
          ['Grumpy',     10,],
          ['Claustrophobic',     20],
          ['Content',     40],
          ['Happy',     30],
        ]);

        var options = {
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }