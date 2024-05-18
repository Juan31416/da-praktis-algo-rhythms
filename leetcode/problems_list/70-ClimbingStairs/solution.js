/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1 ) return 1

    let result = n%2 == 0 ? 2 : 1;

    const repetitions = n%2 == 0 ? Math.floor(n/2) - 1 : Math.floor(n/2); 

    for(let i = 1; i <= repetitions; i++){
      result += (((n - i*2)/2) * ((n - i*2)/1)) + 1
    }

    return result;
};