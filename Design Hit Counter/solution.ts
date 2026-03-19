class HitCounter {
    private ts: number[] = [];

    constructor() {}

    hit(timestamp: number): void {
        this.ts.push(timestamp);
    }

    getHits(timestamp: number): number {
        const search = (x: number) => {
            let [l, r] = [0, this.ts.length];
            while (l < r) {
                const mid = (l + r) >> 1;
                if (this.ts[mid] >= x) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            return l;
        };
        return this.ts.length - search(timestamp - 300 + 1);
    }
}
