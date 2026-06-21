class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        // let water = 0;
        
        // let i = 0;
        // let j = i+1;

        // while (j <= height.length - 1) {
        //     if(height[i] < height[j]) {
        //         i++;
        //         j++;
        //     } else if (height[i] >= height[j]) {
        //         j++;

        //         //logic
        //     }
        // }

        let water = 0;
        let counter = 0;

        let l = 0;
        let r = height.length - 1;

        while (l < r) {
            counter = Math.max(counter, Math.min(height[l], height[r]));

            if(height[l] < counter) {
                water = water + counter - height[l];
            }
            if(height[r] < counter) {
                water = water + counter - height[r];
            }

            if(height[l] <= height[r]) {
                l++;
            } else if (height[l] > height[r]) {
                r--;
            }
        }
        
        return water;
    }
}
