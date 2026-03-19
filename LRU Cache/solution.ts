class LRUCache {
    capacity: number;
    map: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const val = this.map.get(key)!;
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
    }
}
