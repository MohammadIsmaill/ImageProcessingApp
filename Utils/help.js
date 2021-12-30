function removeTimeStamp(word){
  let result = '';
  for(let i = 0 ; i < word.length;i++){
    if(word[i] === '?'){
      break;
    }
    result += word[i];
  }
  if(result === '') return word;
  return result;
}

module.exports = {removeTimeStamp};
