var machineID = input.dexData.match(/(?<=\HWSerial":")[0-9]*/);
var machineDate = input.dexData.match(/(?<=\MachineDate":")([0-9]{8}) ([0-9]{6})/);
var operatorID = input.dexData.match(/(?<=\OperatorIdentifier":")[0-9]*/);
var dexSelect = input.dexData.match(/(?=PA1\*).*/);
var dexParsed = dexSelect.toString().split("*");

var testCappuccinoNew = input.dexData.toString().match(/(?<=\CAPPUCCINO \\r\\nPA2\*[0-9]\*[0-9]\*[0-9]\*[0-9]\\r\\nPA3\*)./);

//check time message sent
var timeSent = input.dexData.match(/(?<=\MachineDate":"[0-9]{8} )[0-9]{6}/);
//select first character from time
var firstChar = timeSent.toString().charAt(0);
//check if first character is more than 0;
if( firstChar === '0') {
    output = { timeSent }
}

else {
    //select everything after DexData:
    var dexRaw = input.dexData.match(/(?<=\"DexData":)(.*)/);
    //stringify and split
    var dexRawString = dexRaw.toString().split("*");

    //check if line 19 contains "EMCU"
    if (dexRawString[19].indexOf("EMCU") >= 0) {

        var vendCappuccino = dexParsed[12];
        var testCappuccino = dexParsed[8];
        var vendCaffeeLatte = dexParsed[29];
        var testCaffeeLatte = dexParsed[25];
        var vendWhiteCoffee = dexParsed[46];
        var testWhiteCoffee = dexParsed[42];
        var vendAmericano = dexParsed[63];
        var testAmericano = dexParsed[59];
        var vendFlatWhite = dexParsed[80];
        var testFlatWhite = dexParsed[76];
        var vendDoubleEspresso = dexParsed[97];
        var testDoubleEspresso = dexParsed[93];
        var vendMocha = dexParsed[114];
        var testMocha = dexParsed[110];
        var vendHotChocolate = dexParsed[131];
        var testHotChocolate = dexParsed[127];
        var vendBlackTea = dexParsed[148];
        var testBlackTea = dexParsed[144];
        var vendWhiteTea = dexParsed[165];
        var testWhiteTea = dexParsed[161];
        var vendTomatoSoup = dexParsed[182];
        var testTomatoSoup = dexParsed[178];
        var vendCaramel = dexParsed[199];
        var testCaramel = dexParsed[195];
        var vendVanilla = dexParsed[216];
        var testVanilla = dexParsed[212];

        output = { machineID, machineDate, operatorID, vendCappuccino, testCappuccino, testCappuccinoNew, vendCaffeeLatte, testCaffeeLatte, vendWhiteCoffee, testWhiteCoffee, vendAmericano, testAmericano, vendFlatWhite, testFlatWhite, vendDoubleEspresso, testDoubleEspresso, vendMocha, testMocha, vendHotChocolate, testHotChocolate, vendBlackTea, testBlackTea, vendWhiteTea, testWhiteTea, vendTomatoSoup, testTomatoSoup, vendCaramel, testCaramel, vendVanilla, testVanilla }
    }
}