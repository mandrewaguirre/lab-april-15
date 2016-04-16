function sum (x,y) {
  var add = x + y;
  console.log('The sum of ' + x + ' ' + y + ' is ' + add);
  var sum2nums = document.getElementById('sum2nums');
  sum2nums.textContext = ('The sum of ' + x + ' ' + y + ' is ' + add);
  return sum;
}

function multiply (x,y) {
  var m = x * y;
  console.log('The product of ' + x + ' ' + y + ' is ' + m);
  var multiply2nums = document.getElementById('multiply2nums');
  multiply2nums.textContext = ('The product of ' + x + ' ' + y + ' is ' + m);
  return m;
}

function sumAndMultiply(x,y,z){
  var total = [multiply(multiply(x,y),z), sum(sum(x,y),z)];
  console.log (x + ' and ' + y + ' and ' + z + ' sum to ' + ' ' + total[0]);
  console.log ( 'The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + ' ' + total [1]);
  var add2Multy1 = document.getElementById('add2Multy1');
  add2Multy1.textContext = (x + ' and ' + y + ' and ' + z + ' sum to ' + ' ' + total[1]);
  add2Multy1.textContext = ('The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + ' ' + total[0]);
  return total;
}

function summArray (b) {
  var sum = 0;
  for (i = 0; i < b.length; i++) {
    sum = sum + b[i];
  }
  console.log (b.toString() + ' was passed in as an array of numbers, and ' + sum + ' is their sum.');
  console.table(b);
  var sumaAray = document.getElementById('sumaAray');
  sumaAray.textContext = (b.toString() + ' was passed in as an array of numbers, and ' + sum + ' is their sum.');
  return sum;
}

function multiplyArray(x) {
  var mply = 1;
  for (var multyper = 0; multyper < x.length; multyper++ ) {
    mply = mply + x[multyper];
  }
  console.log ('The nubers ' + x.toString() + ' have a product of ' + mply);
  console.table(x);
  var mltyplyAry = document.getElementById('mltyplyAry');
  mltyplyAry.textContext = ('The nubers ' + x.toString() + ' have a product of ' + mply);
  return mply;
}
