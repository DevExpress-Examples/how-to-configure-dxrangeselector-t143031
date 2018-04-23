$(document).ready(function () {

    var dataSource = [
        { x: new Date(2012, 2, 10), y1: 0, y2: 10 },
        { x: new Date(2012, 2, 15), y1: 6, y2: 12 },
        { x: new Date(2012, 2, 20), y1: 8, y2: 15 },
        { x: new Date(2012, 2, 30), y1: 10, y2: 10 },
        { x: new Date(2012, 3, 20), y1: 16, y2: 5 },
        { x: new Date(2012, 4, 25), y1: 12, y2: 6 },
        { x: new Date(2012, 5, 5), y1: 8, y2: 10 }
    ];

    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'x',
        },
        series: [
                { valueField: 'y1' },
                { valueField: 'y2' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        argumentAxis: { valueMarginsEnabled: false }
    });

    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        chart: {
            commonSeriesSettings: {
                type: 'line',
                argumentField: 'x'
            },
            series: [
                { valueField: 'y1' }, { valueField: 'y2' }
            ]
        },
        selectedRangeChanged: function (e) {
            var chart = $("#chartContainer").dxChart("instance");
            chart.zoomArgument(e.startValue, e.endValue);
        },
        behavior: {
            callSelectedRangeChanged: 'onMoving'
        }
    });
})