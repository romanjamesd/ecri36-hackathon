
// function goBackToCode() {
//     if(!document.body.innerHTML.includes('javascript')) {
//         document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')
//     }
    // }
    // if(!document.body.innerHTML.includes('code')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')  
        
    // }
    // if(!document.body.innerHTML.includes('coding')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')  
        
    // }
    // if(!document.body.innerHTML.includes('java')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')  
         
    // }
    // if(!document.body.innerHTML.includes('python')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')   
         
    // }
    // if(!document.body.innerHTML.includes('algorithm')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')   
         
    // }
    // if(!document.body.innerHTML.includes('array')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')  
         
    // }
    // if(!document.body.innerHTML.includes('object')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')  
         
    // }
    // if(!document.body.innerHTML.includes('function')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')   
        
    // }
    // if(!document.body.innerHTML.includes('html')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')   
        
    // }
    // if(!document.body.innerHTML.includes('HTML')) {
    //     document.body.innerHTML = document.body.innerHTML.replaceAll('', 'GO BACK TO CODING BRO ')   
        
//     // }
    
// }

// goBackToCode();
document.addEventListener('DOMContentLoaded', () => {
  console.log('this script loads');
  //use func to create element
  const ourPic = makeHuaRomanElement();
  //collect all img elements
  const images = document.querySelectorAll('img');
  //replace each with pic of us
  for (let image of images){
    image.replaceWith(ourPic);
  }
  
});
const makeHuaRomanElement = () => {
  const huaAndRoman = document.createElement('img');
  huaAndRoman.src = 'ecri36-hackathon/hua-and-roman.png';
  huaAndRoman.className = 'handsomeFellas';
  huaAndRoman.style.zIndex = '100';
  huaAndRoman.style.maxWidth = `100%`;
  return huaAndRoman;
}