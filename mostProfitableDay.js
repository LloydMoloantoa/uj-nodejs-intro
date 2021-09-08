    
  module.exports = function  mostProfitableDay(salesData){
    var dataMap = {};
    for (var i = 0; i < salesData.length; i++){
    var sData = salesData[i];
    dataMap[sData.day] = 0;
    }
    
     for (var i = 0; i < salesData.length; i++){
     var sData = salesData[i];
     var currentDepTotal = dataMap[sData.day];
     currentDepTotal = currentDepTotal + sData.sales;
     dataMap[sData.day] = currentDepTotal;
    }
   // console.log(dataMap);
    
    var currentMaxSales = 0;
    var current = "";
    for (var salesDataDay in dataMap){
     
      var currentDepSales = dataMap[salesDataDay];
      if(currentDepSales > currentMaxSales){
        currentMaxSales = currentDepSales;
        current = salesDataDay;
      }
    }
  //  console.log(currentMaxSales);
    return current;
  }
   
  