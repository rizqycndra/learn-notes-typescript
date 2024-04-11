// Mendefinisikan namespace
namespace Geometri {
    // Deklarasi class dalam namespace
    export class Lingkaran {
        private jariJari: number;

        constructor(jariJari: number) {
            this.jariJari = jariJari;
        }

        hitungLuas(): number {
            return Math.PI * this.jariJari * this.jariJari;
        }
    }
}

// Membuat objek dari class dalam namespace
let lingkaran2: Geometri.Lingkaran = new Geometri.Lingkaran(5);
console.log("Luas lingkaran:", lingkaran2.hitungLuas()); // Output: Luas lingkaran: 78.53981633974483
