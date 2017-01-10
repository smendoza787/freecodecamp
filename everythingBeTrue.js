function truthCheck(collection, pre) {
  // Is everyone being true?
  var trueArr = [];

  for (var i in collection) {
    if (!!collection[i][pre]) {
      trueArr.push("true");
    }
  }

  if (collection.length === trueArr.length) {
    return true;
  } else {
    return false;
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
