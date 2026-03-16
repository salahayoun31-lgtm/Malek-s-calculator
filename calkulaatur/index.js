const display = document.getElementById('display');

const appendToDisplay = (input) => {
    display.value += input;
}

const clearDisplay = () => {
    display.value = '';
}

const calculate = () => {
    try {
        display.value = eval(display.value);
    } 
    catch (error) {
        display.value = 'Error';
    }
    if (display.value === '999') {
        display.value = 'Malek is SALAH!';
    }
}    



