var table_plot = makeTable()
  .datum(viewport_data)
  .sortBy('pval', true)
  .filterCols(['col', 'x', 'y']);

d3.select('#viewport-container').call(table_plot);

table_plot.on('highlight', function(data, on_off){
  if(on_off){//if the data is highlighted
    d3.select('#highlighted').text(
      'Currently on ' + data.symb
    );
  }
});
table_plot.on('select', function(data, on_off){
  if(on_off){//if the data is highlighted
    d3.select('#selected').text(
      'You have chosen ' + data.Device Name
    );
  }
});
