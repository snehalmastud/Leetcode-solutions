function cleanRoom(robot: Robot) {
    const dirs = [-1, 0, 1, 0, -1];
    const vis = new Set<string>();
    const dfs = (i: number, j: number, d: number) => {
        vis.add(`${i}-${j}`);
        robot.clean();
        for (let k = 0; k < 4; ++k) {
            const nd = (d + k) % 4;
            const [x, y] = [i + dirs[nd], j + dirs[nd + 1]];
            if (!vis.has(`${x}-${y}`) && robot.move()) {
                dfs(x, y, nd);
                robot.turnRight();
                robot.turnRight();
                robot.move();
                robot.turnRight();
                robot.turnRight();
            }
            robot.turnRight();
        }
    };
    dfs(0, 0, 0);
}
