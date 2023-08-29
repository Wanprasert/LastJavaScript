const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log( 
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);

// accumulator: 15, currentValue: 16, index: 1, returns: 31
// accumulator: 31, currentValue: 17, index: 2, returns: 48
// accumulator: 48, currentValue: 18, index: 3, returns: 66
// accumulator: 66, currentValue: 19, index: 4, returns: 85