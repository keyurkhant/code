class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        const regex = /^[a-zA-Z0-9]+$/;

        while (l < r) {
            if(!regex.test(s[l])){
                l++;
                continue;
            } 
            if(!regex.test(s[r])) {
                r--;
                continue;
            } 

            if(s[l].toLowerCase() == s[r].toLowerCase()) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true
    }
}
