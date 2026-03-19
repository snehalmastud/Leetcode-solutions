class PhoneDirectory {
    private available: Set<number> = new Set();

    constructor(maxNumbers: number) {
        for (let i = 0; i < maxNumbers; ++i) {
            this.available.add(i);
        }
    }

    get(): number {
        const [x] = this.available;
        if (x === undefined) {
            return -1;
        }
        this.available.delete(x);
        return x;
    }

    check(number: number): boolean {
        return this.available.has(number);
    }

    release(number: number): void {
        this.available.add(number);
    }
}
