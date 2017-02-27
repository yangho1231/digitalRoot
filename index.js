function digital_root(n) {
  return (n-1)%9 + 1;
}
digital_root(16);

//Alternative Solution

function digital_root(n) {
  var total = 0;
  if(n.toString().length == 1) {
    var num = parseInt(n);
    return num;
  }
  else {
    var split = n.toString().split('');
    for(var i = 0; i < split.length; i++) {
      var int = parseInt(split[i]);
      total += int;
    }
    return digital_root(total);
  }
}