
function depthSumInverse(nestedList: NestedInteger[]): number {
    let [maxDepth, ws, s] = [0, 0, 0];
    const dfs = (x: NestedInteger, d: number) => {
        maxDepth = Math.max(maxDepth, d);
        if (x.isInteger()) {
            ws += x.getInteger() * d;
            s += x.getInteger();
        } else {
            for (const y of x.getList()) {
                dfs(y, d + 1);
            }
        }
    };
    for (const x of nestedList) {
        dfs(x, 1);
    }
    return (maxDepth + 1) * s - ws;
}
