function theBeatlesPlay(musicians,instruments){
  let newArr = [];
  for (var i=0 ;i<musicians.length; i++){
    newArr.push(musicians[i]+' plays '+instruments[i]);
  }
  return newArr;
}
