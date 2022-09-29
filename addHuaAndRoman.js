const huaAndRoman = document.createElement('img');
huaAndRoman.src = 'hua-and-roman.png';
huaAndRoman.className = 'handsomeFellas';
huaAndRoman.style.position = 'fixed';
huaAndRoman.style.top = '0';
huaAndRoman.style.left = '0';
huaAndRoman.style.zIndex = '100';
huaAndRoman.widthNumber = 50;
huaAndRoman.style.width = `${this.widthNumber}px`;


//append to body of html doc
document.querySelector('body').appendChild(huaAndRoman);
