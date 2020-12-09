let f = 122; // fahrenheit

// toCelcius method extend to Number obj
Number.prototype.toCelcius = function() {
    return (this - 32) * 5 / 9;
}

// Access you extended method
f.toCelcius(); // 50