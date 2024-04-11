class MathHelper {
    // Properti statis
    static PI: number = 3.14;

    // Metode statis untuk menghitung luas lingkaran
    static hitungLuasLingkaran(jariJari: number): number {
        return this.PI * jariJari * jariJari;
    }
}

// Mengakses properti statis
console.log("Nilai PI:", MathHelper.PI); // Output: Nilai PI: 3.14

// Memanggil metode statis
let luasLingkaran: number = MathHelper.hitungLuasLingkaran(5);
console.log("Luas lingkaran dengan jari-jari 5 adalah:", luasLingkaran); // Output: Luas lingkaran dengan jari-jari 5 adalah: 78.5
