// Mendefinisikan class Orang
class Orang2 {
    // Properti
    nama: string
    umur: number
    sudahMenikah: boolean

    // Constructor untuk inisialisasi objek
    constructor(nama: string, umur: number, sudahMenikah: boolean) {
        this.nama = nama;
        this.umur = umur
        this.sudahMenikah = sudahMenikah
    }

    // Metode
    sapa(): void {
        console.log("Halo, nama saya", this.nama)
    }

    private getNama(): string {
        return this.nama
    }
}

// Membuat objek menggunakan class Orang
let persons: Orang2 = new Orang2("John", 30, true)

// Memanggil metode objek
persons.sapa()
