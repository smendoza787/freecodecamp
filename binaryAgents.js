function binaryAgent(str) {
  // A binary number is a string of 8 digits
  // Each digit is either a 0 or 1, a yes or no switch
  // Each digit stands for the numbers: 128 64 32 16 8 4 2 1
  // A 1 means to add that number
  var splitStr = str.split(" ");

  var binaryValue = [128, 64, 32, 16, 8, 4, 2, 1];
  var tempCounter = 0;
  var convertedArray = [];

  for (var j = 0; j < splitStr.length; j++) {

    for (var i = 0; i < splitStr[j].length; i++) {
      if (splitStr[j][i] === "1") {
        tempCounter += binaryValue[i];
      }
    }

    convertedArray.push(tempCounter);
    tempCounter = 0;

  }

  // translate each item in convertedArray using .fromCharCode
  for (var p in convertedArray) {
    convertedArray[p] = String.fromCharCode(convertedArray[p]);
  }

  return convertedArray.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
