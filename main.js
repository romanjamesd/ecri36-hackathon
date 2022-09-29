goBackToWork(document.body)

function goBackToWork(el) {
    if(el.hasChildNodes()) {
        el.childNodes.forEach(replaceText)
    } else if (el.nodeType === Text.TEXT_NODE) {
        el.textContent = 'GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! GO BACK TO CODING! '
        
    }
}