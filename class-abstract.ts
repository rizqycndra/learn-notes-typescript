// Abstract class dengan satu metode abstrak
abstract class Bentuk {
    // Metode abstrak yang harus di-implementasikan oleh class turunannya
    abstract hitungLuas(): number;
}

// Class turunan yang mengimplementasikan abstract class
class Lingkaran extends Bentuk {
    private jariJari: number;

    constructor(jariJari: number) {
        super();
        this.jariJari = jariJari;
    }

    // Implementasi metode abstrak
    hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

// Membuat objek dari class Lingkaran
let lingkaran: Lingkaran = new Lingkaran(5);
console.log("Luas lingkaran:", lingkaran.hitungLuas()); // Output: Luas lingkaran: 78.53981633974483
