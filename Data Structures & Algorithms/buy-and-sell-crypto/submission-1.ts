class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // let l = 1;
        // let r = l + 1;

        // let bp = prices[0];
        // let sp = prices[1];

        // while (r <= prices.length - 1) {
        //     if (bp > prices[l]) {
        //         bp = prices[l];                
        //     }
        //     if (sp < prices[r]) {
        //         sp = prices[r];
        //     }
        //     l++;
        //     r++;
        // }
        // console.log(bp, sp);
        // if (bp >= sp) return 0;
        // return sp - bp;

        let bp = Number.MAX_VALUE;
        let profit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < bp) {
                bp = prices[i];
            } else if (prices[i] - bp > profit) {
                profit = prices[i] - bp;
            }            
        }

        return profit;
    }
}
