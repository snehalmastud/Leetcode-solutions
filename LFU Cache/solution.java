
public class LFU_Cache {

    public class LFUCache {

        // Save the key, value
        HashMap<Integer, Integer> vals;

        // Save the key to the value of the number of visits
        HashMap<Integer, Integer> counts;

        // 频率和一个里面所有key都是当前频率的list之间的映射
        HashMap<Integer, LinkedHashSet<Integer>> lists;

        int capacity;

        // Initialize the frequency of data occurrences
        int min = -1;

        public LFUCache(int cap) {
            capacity = cap;
            vals = new HashMap<>();
            counts = new HashMap<>();
            lists = new HashMap<>();
        }

        public int get(int key) {
            if (!vals.containsKey(key))
                return -1;

            int count = counts.get(key);
            counts.put(key, count + 1);
            lists.get(count).remove(key);

            // Determine whether min should add 1
            if (count == min && lists.get(count).size() == 0) {
                min++;
            }

            if (!lists.containsKey(count + 1)) {
                lists.put(count + 1, new LinkedHashSet<>());
            }

            lists.get(count + 1).add(key);
            return vals.get(key);
        }

        public void put(int key, int value) {
            if (capacity <= 0)
                return;

            if (vals.containsKey(key)) {
                vals.put(key, value);
                get(key);
                return;
            }

            if (vals.size() >= capacity) {
                int minFreKey = lists.get(min).iterator().next();
                lists.get(min).remove(minFreKey);
                vals.remove(minFreKey);
                counts.remove(minFreKey);
            }

            vals.put(key, value);
            counts.put(key, 1);
            min = 1;
            if (!lists.containsKey(1)) {
                lists.put(1, new LinkedHashSet<>());
            }
            lists.get(1).add(key);
        }
    }
}

############

class LFUCache {

    private final Map<Integer, Node> map;
    private final Map<Integer, DoublyLinkedList> freqMap;
    private final int capacity;
    private int minFreq;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>(capacity, 1);
        freqMap = new HashMap<>();
    }

    public int get(int key) {
        if (capacity == 0) {
            return -1;
        }
        if (!map.containsKey(key)) {
            return -1;
        }
        Node node = map.get(key);
        incrFreq(node);
        return node.value;
    }

    public void put(int key, int value) {
        if (capacity == 0) {
            return;
        }
        if (map.containsKey(key)) {
            Node node = map.get(key);
            node.value = value;
            incrFreq(node);
            return;
        }
        if (map.size() == capacity) {
            DoublyLinkedList list = freqMap.get(minFreq);
            map.remove(list.removeLast().key);
        }
        Node node = new Node(key, value);
        addNode(node);
        map.put(key, node);
        minFreq = 1;
    }

    private void incrFreq(Node node) {
        int freq = node.freq;
        DoublyLinkedList list = freqMap.get(freq);
        list.remove(node);
        if (list.isEmpty()) {
            freqMap.remove(freq);
            if (freq == minFreq) {
                minFreq++;
            }
        }
        node.freq++;
        addNode(node);
    }

    private void addNode(Node node) {
        int freq = node.freq;
        DoublyLinkedList list = freqMap.getOrDefault(freq, new DoublyLinkedList());
        list.addFirst(node);
        freqMap.put(freq, list);
    }

    private static class Node {
        int key;
        int value;
        int freq;
        Node prev;
        Node next;

        Node(int key, int value) {
            this.key = key;
            this.value = value;
            this.freq = 1;
        }
    }

    private static class DoublyLinkedList {

        private final Node head;
        private final Node tail;

        public DoublyLinkedList() {
            head = new Node(-1, -1);
            tail = new Node(-1, -1);
            head.next = tail;
            tail.prev = head;
        }

        public void addFirst(Node node) {
            node.prev = head;
            node.next = head.next;
            head.next.prev = node;
            head.next = node;
        }

        public Node remove(Node node) {
            node.next.prev = node.prev;
            node.prev.next = node.next;
            node.next = null;
            node.prev = null;
            return node;
        }

        public Node removeLast() {
            return remove(tail.prev);
        }

        public boolean isEmpty() {
            return head.next == tail;
        }
    }
}
