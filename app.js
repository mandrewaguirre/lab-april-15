function sum (x,y) {
  var add = x + y;
  console.log('The sum of ' + x + ' ' + y + ' is ' + add);
  return add;
}


function mul (x,y) {
  var multiply = x * y;
  console.log('The product of ' + x + ' ' + y + ' is ' + multiply);
  return multiply;
}



function sumAddMultiply(x,y,z){
  var total = [mul(mul(x,y),z), sum(sum(x,y),z)];
  console.log (x + ' and ' + y + ' and ' + z + ' sum to ' + ' ' + total [0]);
  console.log ( 'The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + ' ' + total [1]);
  return total;
}


function summArray (b) {
  var sum = 0;
  for (i = 0; i < b.length; i++) {
    sum = sum + b[i];
  }
  console.log (b.toString() + ' was passed in as an array of numbers, and ' + sum + ' is their sum.' );
  console.table(b);
  return sum;
}
