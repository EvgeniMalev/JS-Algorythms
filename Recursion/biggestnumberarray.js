let numbers = [12, 45, 7, 89, 23, 56];


let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}


console.log("Най-голямото число е: " + max);
