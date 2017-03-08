function findParenthesisPartner (someString, point){
  var openingParenthesis = "";
  var closingParenthesis = "";
  var locationStore = [];
  var targetParenthesisFound = false;
  var targetStoreLength = 0;
  switch (someString.charAt(point)) {
  
    case "(":      
    case ")":
      openingParenthesis = "(";
      closingParenthesis = ")";
      break;
    
    case "{":      
    case "}":
      openingParenthesis = "{";
      closingParenthesis = "}";
      break;
      
    case "[":      
    case "]":
      openingParenthesis = "[";
      closingParenthesis = "]";
      break;
      
    default:
      throw "invalid selection, please select a point in the input string which is one of the following characters: ( ) [ ] { } ";
  }
  if (openingParenthesis != "") {
    for (var i = 0; ((i < someString.length) && !targetParenthesisFound); i++) {
      if (someString.charAt(i) === openingParenthesis){
        locationStore.push(i);
        if (i === point){
          targetStoreLength = locationStore.length;
        }
      } else if (someString.charAt(i) === closingParenthesis){
        if (i === point){
          if (locationStore.length === 0) {
            throw "No match found for selected parenthesis.";
            targetParenthesisFound = true;
          } else {
            targetParenthesisFound = true;
            return locationStore[locationStore.length - 1];
          }
        } else {
          if (locationStore.length === targetStoreLength) {
            targetParenthesisFound = true;
            return i;
          } else {
            locationStore.pop();
          }  
        }
      }
    }
    if (!targetParenthesisFound) {
      throw "No match found for selected parenthesis.";
    }  
  }
}
