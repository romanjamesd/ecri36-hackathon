function goBackToCode() {
	if (
		document.body.innerHTML.includes("Javascript") ||
		document.body.innerHTML.includes("JavaScript") ||
		document.body.innerHTML.includes("javascript") ||
		document.body.innerHTML.includes("HTML") ||
		document.body.innerHTML.includes("CSS")
	) {
    console.log('Found Something!')
  } else {
    console.log("No Javascript, HTML, or CSS Found!")
    document.body.innerHTML = document.body.innerHTML.replaceAll("", "GO BACK TO CODING BRO ");
  }
}
goBackToCode();

// document.addEventListener("DOMContentLoaded", () => {
// 	console.log("this script loads");
// 	//use func to create element
// 	const ourPic = makeHuaRomanElement();
// 	//collect all img elements
// 	const images = document.querySelectorAll("img");
// 	//replace each with pic of us
// 	for (let image of images) {
// 		image.replaceWith(ourPic);
// 	}
// });
// const makeHuaRomanElement = () => {
// 	const huaAndRoman = document.createElement("img");
// 	huaAndRoman.src = "ecri36-hackathon/huaRoman1.png";
// 	huaAndRoman.className = "handsomeFellas";
// 	huaAndRoman.style.zIndex = "100";
// 	huaAndRoman.style.maxWidth = `100%`;
// 	return huaAndRoman;
// };
