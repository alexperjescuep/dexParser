Agent.receive = function () {
    var events = this.incomingEvents();
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      var receiveCount = event["payload"]["body"].match(
        /(?:ApproximateReceiveCount","Value":")([0-9]*)/
      );
      var messageID = event["payload"]["body"].match(
        /(?:MessageId":")([a-zA-Z0-9-]*)/
      );
      var machineDate = event["payload"]["body"].match(
        /(?:MachineDate.....)([0-9]{8}).([0-9]{6})/
      );
      var machineSerial = event["payload"]["body"].match(
        /(?:HWSerial.....)([0-9]*)/
      );
      var DEXraw = event["payload"]["body"].match(/(DexData)(.|\s)*/);
      var DEXdata = DEXraw.toString().split("*");
      var salesDataRaw = event["payload"]["body"].match(/(PA1)(.|\s)*/);
      var salesData = salesDataRaw.toString().split("*");
      var findTomatoSoup = event["payload"]["body"].match(/(PA1\*[0-9]+\*[0-9].\*)([A-Z ]+)/gm);

if(receiveCount[1] < 2) {
  if(findTomatoSoup.includes('TOMATO')) {
    this.createEvent({
      SQSreceiveCount: receiveCount[1],
      SQSmessageID: messageID[1],
      machineSerial: machineSerial[1],
      machineDate: machineDate[1],
      machineTime: machineDate[2],
      vendCappuccino: salesData[12],
      testCappuccino: salesData[8],
      vendCaffeeLatte: salesData[29],
      testCaffeeLatte: salesData[25],
      vendWhiteCoffee: salesData[46],
      testWhiteCoffee: salesData[42],
      vendAmericano: salesData[63],
      testAmericano: salesData[59],
      vendFlatWhite: salesData[80],
      testFlatWhite: salesData[76],
      vendDoubleEspresso: salesData[97],
      testDoubleEspresso: salesData[93],
      vendMocha: salesData[114],
      testMocha: salesData[110],
      vendHotChocolate: salesData[131],
      testHotChocolate: salesData[127],
      vendBlackTea: salesData[148],
      testBlackTea: salesData[144],
      vendWhiteTea: salesData[165],
      testWhiteTea: salesData[161],
      vendTomatoSoup: salesData[182],
      testTomatoSoup: salesData[178],
      vendCaramel: salesData[199],
      testCaramel: salesData[195],
      vendVanilla: salesData[216],
      testVanilla: salesData[212]
    });
  }
  else {
      this.createEvent({
        SQSreceiveCount: receiveCount[1],
        SQSmessageID: messageID[1],
        machineSerial: machineSerial[1],
        machineDate: machineDate[1],
        machineTime: machineDate[2],
        vendCappuccino: salesData[12],
        testCappuccino: salesData[8],
        vendCaffeeLatte: salesData[29],
        testCaffeeLatte: salesData[25],
        vendWhiteCoffee: salesData[46],
        testWhiteCoffee: salesData[42],
        vendAmericano: salesData[63],
        testAmericano: salesData[59],
        vendFlatWhite: salesData[80],
        testFlatWhite: salesData[76],
        vendDoubleEspresso: salesData[97],
        testDoubleEspresso: salesData[93],
        vendMocha: salesData[114],
        testMocha: salesData[110],
        vendHotChocolate: salesData[131],
        testHotChocolate: salesData[127],
        vendBlackTea: salesData[148],
        testBlackTea: salesData[144],
        vendWhiteTea: salesData[165],
        testWhiteTea: salesData[161],
        vendTomatoSoup: '0',
        testTomatoSoup: '0',
        vendCaramel: salesData[199],
        testCaramel: salesData[195],
        vendVanilla: salesData[216],
        testVanilla: salesData[212]
      });
    }
  }
  };
}