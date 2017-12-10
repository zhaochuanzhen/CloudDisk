"use strict";
$(document).ready(function () {
    var c = [];
    var b = Math.floor(Math.random() * 10) + 1;
    for (var a = 0; a < b; a++) {
        c[a] = {label: "Series " + (a + 1), data: Math.floor(Math.random() * 100) + 1}
    }
    $.plot("#chart_pie", c, $.extend(true, {}, Plugins.getFlotDefaults(), {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {show: true}
            }
        }, grid: {hoverable: true}, tooltip: true, tooltipOpts: {content: "%p.0%, %s", shifts: {x: 20, y: 0}}
    }))
});