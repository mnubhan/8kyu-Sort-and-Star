const twoSort = s =>{
  return s.sort().shift().split("").map((e,i)=>{
    return i!=0?e.padStart(4,"*"):e
  }).join("")
}

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
