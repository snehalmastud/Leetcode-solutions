import java.util.Stack;

public class Verify_Preorder_Sequence_in_Binary_Search_Tree {

    public static void main(String[] args) {
        Verify_Preorder_Sequence_in_Binary_Search_Tree out = new Verify_Preorder_Sequence_in_Binary_Search_Tree();
        Solution_dfs s = out.new Solution_dfs();

        System.out.println(s.verifyPreorder(new int[]{5,2,6,1,3}));
        System.out.println(s.verifyPreorder(new int[]{5,2,1,3,6}));


        Solution sss = out.new Solution();

        System.out.println(sss.verifyPreorder(new int[]{5,2,6,1,3}));
        System.out.println(sss.verifyPreorder(new int[]{5,2,1,3,6}));
    }


    public class Solution {
        public boolean verifyPreorder(int[] preorder) {
            int lowBound = Integer.MIN_VALUE;
            Stack<Integer> sk = new Stack<>();
            for (int each : preorder) {
                if (each < lowBound) {
                    return false;
                }

                while (!sk.empty() && each > sk.peek()) { // s>peek => right value
                    lowBound = sk.pop();
                }
                sk.push(each);
            }
            return true;
        }
    }


    public class Solution_dfs {
        public boolean verifyPreorder(int[] preorder) {
            return dfs(preorder, 0, preorder.length - 1, Integer.MIN_VALUE, Integer.MAX_VALUE);
        }

        boolean dfs(int[] preorder, int start, int end, int lower, int upper) {
            if (start > end) return true;

            int val = preorder[start];
            if (val <= lower || val >= upper) return false;

            int i = 0;
            for (i = start + 1; i <= end; ++i) {
                if (preorder[i] >= val) break; // @note: i stops at root's first right child, same as above "if (each < lowBound) {"
            }

            return dfs(preorder, start + 1, i - 1, lower, val) && dfs(preorder, i, end, val, upper);
        }

    }
}

############

class Solution {
    public boolean verifyPreorder(int[] preorder) {
        Deque<Integer> stk = new ArrayDeque<>();
        int last = Integer.MIN_VALUE;
        for (int x : preorder) {
            if (x < last) {
                return false;
            }
            while (!stk.isEmpty() && stk.peek() < x) {
                last = stk.poll();
            }
            stk.push(x);
        }
        return true;
    }
}
