// File: Shape.ts (Definisi module)
export class Lingkaran {
    private jariJari: number;

    constructor(jariJari: number) {
        this.jariJari = jariJari;
    }

    hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}
