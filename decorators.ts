// Contoh decorator untuk logging
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`[${key}] Memanggil ${target.constructor.name}.${key} dengan argumen ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// Contoh class dengan decorator
class Calculator {
    @log
    add(x: number, y: number): number {
        return x + y;
    }
}

// Penggunaan class dengan decorator
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: [add] Memanggil Calculator.add dengan argumen [2,3] 5