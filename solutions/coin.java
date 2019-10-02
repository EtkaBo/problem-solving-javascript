class Solution {
    public int change(int amount, int[] coins) {
        
        return makeChange(coins, amount,0, new HashMap<String,Integer>());
        
    }
    
    
    

public int makeChange(int[] coins,
int money, int index, HashMap<String,Integer> memo){

    if(money ==0) {
        return 1;

    }

    if(index >= coins.length) {
        return 0;
    }

    String key = money + "-" + index;

    if(memo.containsKey(key)) {
        return memo.get(key);
    }

    int amountWithCoin = 0;
    int ways = 0;

    while(amountWithCoin <= money) {
        int remaining = money - amountWithCoin;
        ways += makeChange(coins,remaining,index +1, memo);
        amountWithCoin += coins[index];
    }

    memo.put(key,ways);
    return ways;

}
    
}