window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisY: {
            title: "Percentage of Tweets (%)",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "Sports Tweets (%)",
            legendText: "Sports Tweets (%)",
            showInLegend: true, 
            dataPoints:[
                { label: "Auburn", y: 15.33 },
                { label: "LSU", y: 7.16 },
                { label: "Missouri", y: 13.8 },
                { label: "Mississippi State", y: 14.53 },
                { label: "Ole Miss", y: 7.1 },
                { label: "Texas A&M", y: 11.8 },
                { label: "Arkansas", y: 5.3 },
                { label: "Florida", y: 7.63 },
                { label: "Georgia", y: 15.23 },
                { label: "Kentucky", y: 11.07 },
                { label: "Alabama", y: 10.23 },
                { label: "South Carolina", y: 3.97 },
                { label: "UT Knoxville", y: 11.83 },
                { label: "Vanderbilt", y: 6.47 }
            ]
        },
        {
            type: "column",	
            name: "Academic Tweets (%)",
            legendText: "Academic Tweets (%)",
            showInLegend: true,
            dataPoints:[
                { label: "Auburn", y: 8.63 },
                { label: "LSU", y: 13.37 },
                { label: "Missouri", y: 5.17 },
                { label: "Mississippi State", y: 11.53 },
                { label: "Ole Miss", y: 8.87 },
                { label: "Texas A&M", y: 11.43 },
                { label: "Arkansas", y: 24 },
                { label: "Florida", y: 9.37 },
                { label: "Georgia", y: 14.1 },
                { label: "Kentucky", y: 7.9 },
                { label: "Alabama", y: 11.37 },
                { label: "South Carolina", y: 14.2 },
                { label: "UT Knoxville", y: 8.5 },
                { label: "Vanderbilt", y: 13.23 }
            ]
        }]
    });
    chart.render();
    $(".canvasjs-chart-credit").hide();
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }