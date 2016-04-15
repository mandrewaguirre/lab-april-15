function sum (x,y) {
  var add = x + y;
  console.log('The sum of ' + x + ' ' + y + ' is ' + add);

}


function mul (x,y) {
  var multiply = x * y;
  console.log('The product of ' + x + ' ' + y + ' is ' + multiply);
}


function sumAddMultiply(x,y,z){
  var total = [mul(mul(x,y),z), sum(sum(x,y),z)];
  console.log (x + ' and ' + y + ' and ' + z + ' sum to ' + ' ' + total [0]);
  console.log ( 'The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + ' ' + total [1]);
}
