// Deklarasi variabel tanpa tipe
let nilai: any = "123";

// Type assertion dengan menggunakan sintaksis "<tipe>"
let nilaiAngka: number = <number>nilai;
// atau let nilaiAngka: number = nilai as number;

console.log("Nilai angka:", nilaiAngka); // Output: Nilai angka: 123
