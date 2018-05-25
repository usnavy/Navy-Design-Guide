
<script>
  var app = angular.module("chartApp", []);

app.controller("SimulationController", [
  "$scope",
  function($scope) {
    $scope.simulationData = [
      {
        label: "001",
        value: 4.16
      },
      {
        label: "002",
        value: 4.16
      },
      {
        label: "003",
        value: 4.16
      },
      {
        label: "004",
        value: 4.16
      },
      {
        label: "005",
        value: 4.16
      },
      {
        label: "006",
        value: 4.16
      },
      {
        label: "007",
        value: 4.16
      },
      {
        label: "008",
        value: 4.16
      },
      {
        label: "009",
        value: 4.16
      },
      {
        label: "010",
        value: 4.16
      },
      {
        label: "011",
        value: 4.16
      },
      {
        label: "012",
        value: 4.16
      },
      {
        label: "013",
        value: 4.16
      },
      {
        label: "014",
        value: 4.16
      },
      {
        label: "015",
        value: 4.16
      },
      {
        label: "016",
        value: 4.16
      },
      {
        label: "017",
        value: 4.16
      },
      {
        label: "018",
        value: 4.16
      },
      {
        label: "019",
        value: 4.16
      },
      {
        label: "020",
        value: 4.16
      },
      {
        label: "021",
        value: 4.16
      },
      {
        label: "022",
        value: 4.16
      },
      {
        label: "023",
        value: 4.16
      },
      {
        label: "024",
        value: 4.16
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
        .range(["#ffff00", "#ffe800", "#ffd300", "ffbf00", "#ffaa00", "#ff9200", "#ff7400", "#ff4900", "#ff0000", "#e40045", "#cd0074", "#a600a6", "#7109aa", "#530fad", "#3914af", "#1b1bb3", "#1240ab", "#0b61a4", "#009999", "#00af64", "#00cc00", "#67e300", "#9fee00", "#ccf600"]);

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

<div id="color-wheel" ng-app="chartApp" ng-controller="SimulationController">
  <div pie-chart chart-data="simulationData"></div>
</div>

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
