export const multiply = (array) => {
  let result = 1;
  if (array.length === 0){
    result = 0;
    return result;
  }
  else if (array.length != 0) {
    for(let i = 0; i < array.length;i++){
      result *= array[i];
    }
    return result;
  }
};
