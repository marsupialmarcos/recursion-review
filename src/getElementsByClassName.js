// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

var result = []

function callDOM (obj){
    var keys = Object.keys(obj)

    for (var i = 0; i < keys.length; i++){
        var curValue = obj[i];
        if (curValue.classList.contains(className)){
            result.push(curValue);
        }        
        if (curValue.hasChildNodes()){
            callDOM(curValue.children);
        }
    }
    return result
};

return callDOM(document.children)

};

