class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
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
