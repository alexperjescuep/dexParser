//first parse pass to isolate elements
parsedJSON = JSON.parse(msg.payload.Messages[0].Body)
//split DexData into PA1 objects    
    var dexLines = parsedJSON.DexData.toString().split('PA1');
//find PA1 object that contains CAPPUCCINO
    var cappuccinoData = dexLines.filter(s => s.includes('CAPPUCCINO'));
//find PA1 object that contains CAFFE LATTE
    var caffeeLatteData = dexLines.filter(s => s.includes('CAFFE LATTE'));    
//find PA1 object that contains WHITE COFFEE
    var whiteCoffeeData = dexLines.filter(s => s.includes('WHITE COFFEE'));    
//find PA1 object that contains AMERICANO
    var americanoData = dexLines.filter(s => s.includes('AMERICANO'));        
//find PA1 object that contains FLAT WHITE
    var flatWhiteData = dexLines.filter(s => s.includes('FLAT WHITE'));
//find PA1 object that contains DOUBLE ESPRESSO
    var doubleEspressoData = dexLines.filter(s => s.includes('DOUBLE ESPRESSO'));        
//find PA1 object that contains CAFFE MOCHA
    var caffeeMochaData = dexLines.filter(s => s.includes('CAFFE MOCHA'));  
//find PA1 object that contains HOT CHOCOLATE
    var hotChocolateData = dexLines.filter(s => s.includes('HOT CHOCOLATE')); 
//find PA1 object that contains BLACK TEA
    var blackTeaData = dexLines.filter(s => s.includes('BLACK TEA'));       
//find PA1 object that contains WHITE TEA
    var whiteTeaData = dexLines.filter(s => s.includes('WHITE TEA'));
//find PA1 object that contains CARAMEL
    var caramelData = dexLines.filter(s => s.includes('CARAMEL'));        
//find PA1 object that contains VANILLA
    var vanillaData = dexLines.filter(s => s.includes('VANILLA'));   
//find PA1 object that contains HAZELNUT
    var hazelnutData = dexLines.filter(s => s.includes('HAZELNUT'));   

//find PA4 and split cappuccinoSalesVal & cappuccinoTestVendVal
    var cappuccinoSalesVal = cappuccinoData[0].match(
        /(PA4)\*([0-9]*)/
     );
     var cappuccinoTestVendVal = cappuccinoData[0].match(
        /(PA3)\*([0-9]*)/
     );     
//include cappuccinoSalesVal & cappuccinoTestVendVal in msg
    msg.cappuccinoSales = cappuccinoSalesVal[2];
    msg.cappuccinoTestVend = cappuccinoTestVendVal[2];
    
// debug data    
msg.parsedJSON = parsedJSON;
// msg.lines = dexLines;
// msg.cappuccinoData = cappuccinoData;

//return message
return msg;