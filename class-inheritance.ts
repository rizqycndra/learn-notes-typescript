// Mendefinisikan class Individu sebagai class dasar
class Individu {
    // Properti
    nama: string;
    umur: number;

    // Constructor
    constructor(nama: string, umur: number) {
        this.nama = nama;
        this.umur = umur;
    }

    // Metode
    sapa(): void {
        console.log("Halo, nama saya", this.nama);
    }
}

// Mendefinisikan class AnggotaKeluarga yang mewarisi class Individu
class AnggotaKeluarga extends Individu {
    // Properti tambahan
    hubungan: string;

    // Constructor
    constructor(nama: string, umur: number, hubungan: string) {
        // Memanggil constructor class Individu
        super(nama, umur);
        this.hubungan = hubungan;
    }

    // Override metode dari class Individu
    sapa(): void {
        console.log("Halo,", this.hubungan, "saya", this.nama);
    }
}

// Membuat objek menggunakan class Individu
let individu: Individu = new Individu("John", 30);
individu.sapa(); // Output: Halo, nama saya John

// Membuat objek menggunakan class AnggotaKeluarga
let anggota: AnggotaKeluarga = new AnggotaKeluarga("Jane", 25, "saudari");
anggota.sapa(); // Output: Halo, saudari saya Jane
