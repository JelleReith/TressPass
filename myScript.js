var myData = [];

d3.csv("data/ATM Attack Events-Table 1.csv", function(error, data) {
  if (error) throw error;
  // console.log(data); // [{"Hello": "world"}, …]

  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]);
    myData.push(data[i]);

  }
});
