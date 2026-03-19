class TwoSum {
    private cnt: Map<number, number> = new Map();
    constructor() {}

    add(number: number): void {
        this.cnt.set(number, (this.cnt.get(number) || 0) + 1);
    }

    find(value: number): boolean {
        for (const [x, v] of this.cnt) {
            const y = value - x;
            if (this.cnt.has(y) && (x !== y || v > 1)) {
                return true;
            }
        }
        return false;
    }
}
