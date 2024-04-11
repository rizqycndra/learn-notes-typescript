// Generic class Queue
class Queue<T> {
    private items: T[] = [];

    // Method untuk menambahkan item ke antrian
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Method untuk menghapus item dari antrian dan mengembalikan item yang dihapus
    dequeue(): T | undefined {
        return this.items.shift();
    }
}

// Membuat objek Queue dengan tipe string
let queueString: Queue<string> = new Queue<string>();
queueString.enqueue("John");
queueString.enqueue("Jane");
console.log(queueString.dequeue()); // Output: John

// Membuat objek Queue dengan tipe number
let queueNumber: Queue<number> = new Queue<number>();
queueNumber.enqueue(1);
queueNumber.enqueue(2);
console.log(queueNumber.dequeue()); // Output: 1

// Generic class Pair untuk menyimpan pasangan nilai dengan tipe yang berbeda
class Pair<T, U> {
    private first: T;
    private second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    // Metode untuk mengambil nilai pertama
    getFirst(): T {
        return this.first;
    }

    // Metode untuk mengambil nilai kedua
    getSecond(): U {
        return this.second;
    }
}

// Membuat objek Pair dengan tipe data yang berbeda
let pair1: Pair<number, string> = new Pair<number, string>(1, "Hello");
console.log("Nilai pertama:", pair1.getFirst()); // Output: Nilai pertama: 1
console.log("Nilai kedua:", pair1.getSecond()); // Output: Nilai kedua: Hello

let pair2: Pair<boolean, number[]> = new Pair<boolean, number[]>(true, [1, 2, 3]);
console.log("Nilai pertama:", pair2.getFirst()); // Output: Nilai pertama: true
console.log("Nilai kedua:", pair2.getSecond()); // Output: Nilai kedua: [1, 2, 3]
