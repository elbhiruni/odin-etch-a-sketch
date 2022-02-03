const sketch = document.getElementById('sketch');
const clearBtn = document.getElementById('clearBtn');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

addDiv(16);
hover();

sizeSlider.oninput = (e) => updateSizeValue(e.target.value);
clearBtn.onclick = () => clearBtn();

sizeSlider.addEventListener('mouseup', () => {
    let cr = sizeSlider.value;
    removeDiv();
    addDiv(cr);
    hover();
});

clearBtn.addEventListener('click', () => {
    sketch.childNodes.forEach(item => {
        item.style.backgroundColor = null;
    });
});

function hover() {
    sketch.childNodes.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        });
    });
}

function addDiv(num) {
    const size = num * num;
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        sketch.appendChild(div);
    }
    sketch.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

function removeDiv() {
    sketch.innerHTML = '';
}

function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`
}

