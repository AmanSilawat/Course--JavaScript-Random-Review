let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers.forEach((num) => {
    console.log(String(num).padStart(2, '0'));
});
