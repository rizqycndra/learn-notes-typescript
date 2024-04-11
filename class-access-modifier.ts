// Contoh penggunaan access modifiers
class Kendaraan {
    // Properti public (default)
    public merek: string;

    // Properti private
    private tahunProduksi: number;

    // Constructor
    constructor(merek: string, tahunProduksi: number) {
        this.merek = merek;
        this.tahunProduksi = tahunProduksi;
    }

    // Metode public
    public infoKendaraan(): void {
        console.log(`Kendaraan ${this.merek}, diproduksi pada tahun ${this.tahunProduksi}`);
    }

    // Metode private
    private periksaKeadaan(): void {
        console.log("Mengecek keadaan kendaraan...");
    }
}

// Membuat objek menggunakan class Kendaraan
let mobil: Kendaraan = new Kendaraan("Toyota", 2020);
mobil.infoKendaraan(); // Output: Kendaraan Toyota, diproduksi pada tahun 2020
// mobil.tahunProduksi; // Error: Properti 'tahunProduksi' adalah private dan hanya dapat diakses dari dalam class 'Kendaraan'
// mobil.periksaKeadaan(); // Error: Metode 'periksaKeadaan' adalah private dan hanya dapat diakses dari dalam class 'Kendaraan'
