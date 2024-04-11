// File: Main.ts (Penggunaan module)
import { Lingkaran } from './Shape.ts';
// import { Lingkaran } from './Shape';

// Membuat objek dari class yang diimpor
let lingkaran: Lingkaran = new Lingkaran(5);
console.log("Luas lingkaran:", lingkaran.hitungLuas()); // Output: Luas lingkaran: 78.53981633974483
