const makeHuaRomanElement = () => {
  const huaAndRoman = document.createElement('img');
  huaAndRoman.src = 'ecri36-hackathon/hua-and-roman.png';
  huaAndRoman.className = 'handsomeFellas';
  huaAndRoman.style.zIndex = '100';
  huaAndRoman.style.maxWidth = `100%`;
  return huaAndRoman;
}
document.onload(() => {
  //use func to create element
  const ourPic = makeHuaRomanElement();
  //collect all img elements
  const images = document.querySelectorAll('img');
  //replace each with pic of us
  for (let image of images){
    image.replaceWith(ourPic);
  }
  
});

  
//   huaAndRoman.grow = () => {
//     //convert, intrement, and revert width
//     const stringVal = this.style.width;
//     let newVal = parseInt(stringVal.slice(0, stringVal.length - 2)) + 50;
//     this.style.width = newVal + 'px';
//   }
