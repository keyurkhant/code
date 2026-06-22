class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        let left = 0;
        let maxWidth = 0;
        let hashSet = new Set();

        for (let right = 0; right < s.length; right++) {

            while (hashSet.has(s[right])) {
                hashSet.delete(s[left]);
                left++;
            }

            hashSet.add(s[right]);

            maxWidth = Math.max(maxWidth, right -left+1)
        }
    
        return maxWidth;
    }
}
