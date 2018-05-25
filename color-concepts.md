<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.9.1/d3.min.js"></script>
<script>
  var app = angular.module("chartApp", []);

app.controller("SimulationController", [
  "$scope",
  function($scope) {
    $scope.simulationData = [
      {
        label: "Monday",
        value: 650
      },
      {
        label: "Tuesday",
        value: 75
      },
      {
        label: "Wednesday",
        value: 40
      },
      {
        label: "Thursday",
        value: 42
      },
      {
        label: "Friday",
        value: 67
      }
    ];
  }
]);

app.directive("pieChart", function($window) {
  return {
    restrict: "EA",
    template: "<svg id='chart' width='500' height='450'></svg>",
    link: function(scope, elem, attrs) {
      var data = scope[attrs.chartData],
        rawSvg = elem.find("svg"),
        width = rawSvg.attr("width"),
        height = rawSvg.attr("height"),
        radius = Math.min(width, height) / 2,
        svg = d3.select(rawSvg[0]),
        g = svg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      data.sort(function(a, b) {
        return b.value - a.value;
      });
      var color = d3
        .scaleOrdinal()
        .range(["#28648a", "#d14700", "#b30a43", "#575689", "#1e7006"]);

      var arc = d3.arc().outerRadius(radius * 0.8).innerRadius(radius * 0.4);

      var pie = d3.pie().sort(null).value(function(d) {
        return d.value;
      });

      var slice = g
        .selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

      g
        .append("text")
        .attr("x", 0)
        .attr("y", 0 + radius / 15)
        .attr("class", "text-tooltip")
        .style("text-anchor", "middle")
        .attr("font-weight", "bold")
        .style("font-size", radius / 10 + "px");

      slice
        .append("path")
        .attr("d", arc)
        .attr("stroke", "white")
        // .attr("stroke-width", 5)
        .attr("stroke-width", 0)
        .style("fill", function(d) {
          return color(d.data.label);
        })
        .on("mouseenter", function(e) {
          d3.select(this).transition().duration(300).attr("transform", function(x) {
                    var angle = (x.startAngle + x.endAngle) / 2;
        var xOff = Math.sin(angle) * 20;
        var yOff = -Math.cos(angle) * 20;
        return "translate(" + xOff + "," + yOff + ")";
          });

        })
        .on("mouseleave", function(d) {
          d3
            .select(this)
            .transition()
            .attr("d", arc)
            .attr("stroke-width", 0)
            .attr("transform", "translate(0,0)");
        });
    }
  };
});

</script>


## Color Concepts

<div ng-app="chartApp" ng-controller="SimulationController">
  <div pie-chart chart-data="simulationData"></div>
</div>

### Color Harmony

Color harmony is the combining of colors in a fashion that is harmonious to the eye. In other words, what colors work well together.

#### Warm and Cool Contrast

![Warm and Cool Contrast Example 1](https://usnavy.github.io/Navy-Design-Guide/img/hero-image-2.jpg "Warm and Cool Contrast Example 1")

#### Monochromatic

![Monochromatic Example 1](https://usnavy.github.io/Navy-Design-Guide/img/hero-image-3.jpg "Monochromatic Example 1")
