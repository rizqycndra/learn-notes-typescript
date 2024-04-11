function printLength(value: string | number) {
    if (typeof value === "string") { // typeof: Type Guard Syntax
        console.log("Panjang string:", value.length);
    } else {
        console.log("Bukan sebuah string");
    }
}

printLength("Hello"); // Output: Panjang string: 5
printLength(123); // Output: Bukan sebuah string
