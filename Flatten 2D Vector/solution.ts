class Vector2D {
    i: number;
    j: number;
    vec: number[][];

    constructor(vec: number[][]) {
        this.i = 0;
        this.j = 0;
        this.vec = vec;
    }

    next(): number {
        this.forward();
        return this.vec[this.i][this.j++];
    }

    hasNext(): boolean {
        this.forward();
        return this.i < this.vec.length;
    }

    forward(): void {
        while (this.i < this.vec.length && this.j >= this.vec[this.i].length) {
            ++this.i;
            this.j = 0;
        }
    }
}
