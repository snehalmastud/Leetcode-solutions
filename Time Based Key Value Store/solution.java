class TimeMap {
    private Map<String, TreeMap<Integer, String>> ktv = new HashMap<>();

    public TimeMap() {
    }

    public void set(String key, String value, int timestamp) {
        ktv.computeIfAbsent(key, k -> new TreeMap<>()).put(timestamp, value);
    }

    public String get(String key, int timestamp) {
        if (!ktv.containsKey(key)) {
            return "";
        }
        var tv = ktv.get(key);
        Integer t = tv.floorKey(timestamp);
        return t == null ? "" : tv.get(t);
    }
}
