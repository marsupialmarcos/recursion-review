// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null || Number.isNaN(obj) === true || obj === Infinity){
    return "null"
  } else if(Array.isArray(obj)){
    return jsonifyArray(obj)
  } else if(typeof(obj) === "object"){
    return jsonifyObject(obj)
  } else if (typeof(obj) === "boolean"){
    return jsonifyBoolean(obj)
  } else if (typeof(obj) === "number"){
    return jsonifyNumber(obj)
  } else if (typeof(obj) === "string"){
    return jsonifyString(obj)
  }
};

function jsonifyArray(arr){
  var result = []

  for (var i=0; i <arr.length; i++){
    
    if (arr[i] === undefined || typeof(arr[i]) === "function" || typeof(arr[i]) === "symbol"){
    
    result.push(stringifyJSON(null))
    } else {
    result.push(stringifyJSON(arr[i]))
    }
  }

  return "[" + result.join(",") + "]"
}

// If undefined, a Function, or a Symbol is encountered during conversion it is either omitted (when it is found in an object)


function jsonifyObject(obj){
  var result = []

  for (key in obj){
    if (obj[key] === undefined || typeof(obj[key]) === "function" || typeof(obj[key]) === "symbol"){continue;}

    var value = obj[key];
    var element = jsonifyString(key) + ":" + stringifyJSON(value)
    result.push(element)
  }
  return "{" + result.join(",") + "}"
}

function jsonifyBoolean(bool){
  return bool.toString()
}

function jsonifyNumber(number){
  return number.toString()
}

function jsonifyString(str){
  return "\"" + str + "\""
}