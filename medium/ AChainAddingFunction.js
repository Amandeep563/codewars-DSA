//TODO: we have to return like this add(1)(2) ==> 3 and it can be more
//and they can store in a variable also and add that shit
//let sum = add(2) <== the sum should store 2 and later we can add like sum + 2 ==> 4

//first how can do this add(1)(2) we can't take two function fuck what should we do
//we need to think

function add(n) {
  function addMore(x) {
    return add(n + x);
  }

  addMore.toString = function () {
    return n;
  };

  addMore.valueOf = function () {
    return n;
  };

  return addMore;
}

console.log(add(1));
