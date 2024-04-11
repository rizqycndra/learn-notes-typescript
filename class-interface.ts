// Mendefinisikan interface untuk objek Orang
interface Orang {
    nama: string;
    umur: number;
    sudahMenikah: boolean;
}

// Membuat objek berdasarkan interface Orang
let person: Orang = {
    nama: "John",
    umur: 30,
    sudahMenikah: true
};

// Menggunakan objek berdasarkan interface Orang
console.log("Nama:", person.nama);
console.log("Umur:", person.umur);
console.log("Sudah Menikah:", person.sudahMenikah);
