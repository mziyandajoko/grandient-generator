const color1 = document.getElementById('color-1');
const color2 = document.getElementById('color-2');
const gradient = document.getElementById('gradient');
const colorSplit = document.getElementById('color_split');


// add eventListener
    color1.addEventListener("input", generateColor);
    color2.addEventListener("input", generateColor);
    colorSplit.addEventListener("input", generateColor);


function generateColor(){
    const colorInput1 = color1.value;
    const colorInput2 = color2.value;
    const colorSplitVal = colorSplit.value;
    gradient.style.background = `linear-gradient(${colorInput1}, ${colorSplitVal}%, ${colorInput2})`
}

generateColor(); 