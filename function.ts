// Deklarasi fungsi dengan tipe kembalian
function tambah(a: number, b: number): number {
    return a + b;
}

// Panggil fungsi tambah
let hasilTambah: number = tambah(5, 3);
console.log("Hasil penjumlahan:", hasilTambah);

// Fungsi tanpa tipe kembalian (void)
function sapa(nama: string): void {
    console.log("Halo,", nama);
}

// Panggil fungsi sapa
sapa("John");
