

export const sumaArray = (inputList) => {
    let sum = 0;
    inputList.forEach(item => {
        if (Array.isArray(item)) {
            sum += item.reduce((a, b) => a + b, 0);
            return;
        }
        if (typeof item === 'number'){
            sum += item;
        }
    })   
    return sum;
}