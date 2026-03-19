class NestedIterator {
    private vals: number[];
    private index: number;

    constructor(nestedList: NestedInteger[]) {
        this.index = 0;
        this.vals = [];
        this.dfs(nestedList);
    }

    dfs(nestedList: NestedInteger[]) {
        for (const v of nestedList) {
            if (v.isInteger()) {
                this.vals.push(v.getInteger());
            } else {
                this.dfs(v.getList());
            }
        }
    }

    hasNext(): boolean {
        return this.index < this.vals.length;
    }

    next(): number {
        return this.vals[this.index++];
    }
}
