import java.util.HashMap;
import java.util.Map;

public class Strobogrammatic_Number {


    class Solution {
        public boolean isStrobogrammatic(String num) {
            Map<Character, Character> m = new HashMap<Character, Character>(){ {
                put('0', '0');
                put('1', '1');
                put('8', '8');
                put('6', '9');
                put('9', '6');
            } };

            for (int i = 0; i <= num.length() / 2; ++i) {
                if (m.get(num.charAt(i)) != num.charAt(num.length() - i - 1)) return false;
            }
            return true;

        }
    }

    class Solution_noExtraSpace {
        public boolean isStrobogrammatic(String num) {
            if (num == null || num.length() == 0) {
                return true;
            }
            if (num.length() == 1) {
                return num.equals("0") || num.equals("1") || num.equals("8");
            }

            int l = 0, r = num.length() - 1;
            while (l <= r) {
                if (num.charAt(l) == num.charAt(r)) {
                    if (num.charAt(l) != '1' && num.charAt(l) != '0' && num.charAt(l) != '8'){
                        return false;
                    }
                } else {
                    if ((num.charAt(l) != '6' || num.charAt(r) != '9') && (num.charAt(l) != '9' || num.charAt(r) != '6')) {
                        return false;
                    }
                }
                ++l; --r;
            }

            return true;
        }
    }

}

############

class Solution {
    public boolean isStrobogrammatic(String num) {
        int[] d = new int[] {0, 1, -1, -1, -1, -1, 9, -1, 8, 6};
        for (int i = 0, j = num.length() - 1; i <= j; ++i, --j) {
            int a = num.charAt(i) - '0', b = num.charAt(j) - '0';
            if (d[a] != b) {
                return false;
            }
        }
        return true;
    }
}
