module.exports = function check(str, bracketsConfig) {
  let d = [];
  let open = [];
  let close = [];
  let exept = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
    }else{
      exept.push(bracketsConfig[i][0]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (open.indexOf(str[i]) !== -1) {
      d.push(str[i]);
    }else if(exept.indexOf(str[i]) !== -1){
      if (d.indexOf(str[i]) !== -1) {
        if (d[d.length-1] === str[i]) {
          d.pop();
        }else{
          return false;
        }
      }else{
        d.push(str[i]);
      }
    } else{
      let s = close.indexOf(str[i]);
      if (open[s] === d[d.length - 1]) {
        d.pop();
      } else{
        return false;
      }
    }
  }
  if (d.length === 0) {
    return true;
  } else{
    return false;
  }
  
}
