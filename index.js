function theBeatlesPlay(musicians,instruments){
  let newArr = [];
  for (var i=0 ;i<musicians.length; i++){
    newArr.push(musicians[i]+' plays '+instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(facts){
  var newArr = [];
  var i =0;
  while(i<facts.length){
    newArr.push (facts[i]+"!!!");
    i++
  }
  return newArr;
}

function iLoveTheBeatles(num){
  let newArr=[];
  while (num<15){
    newArr.push("I love the Beatles!")
    num++
  }
  return newArr;
}