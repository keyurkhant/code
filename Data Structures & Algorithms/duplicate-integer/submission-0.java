class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> setData = new HashSet<>();
        for (int num: nums) {
            if (!setData.add(num)) return true;
        }
        return false;
    }
}