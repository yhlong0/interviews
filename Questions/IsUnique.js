/*
  Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
  
*/



function UniqueString(str) {
  if(str.length > 128) {
    return false;
  }
  
  let charObjs = {};
  
  for(let i = 0; i < str.length; i++) {
    if(charObjs[str.charAt(i)]) {
      return false;
    }
    charObjs[str.charAt(i)] = true    
  }
  
  return true;
}


