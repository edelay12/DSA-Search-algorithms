/* 7. Max profit
The share price for a company over a week's trading is as follows: 
[128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a 
particular day, and sell the shares on a subsequent day, write an algorithm to work out 
what the maximum profit you could make would be.
*/

findMax = (input) => {
    let combo= null;
let max = 0;
    input.map((v,i) => {
        let den = v;
        let index = i;
        for(let j =index+1; j< input.length; j++){
               let diff = input[j] - den;
               if(diff > max){
                   max = diff;
                    combo = `buy ${den} and sell ${input[j]} to get the max profit`
               }
            }
    })
     
    console.log(max);
    console.log(combo)
    };

    let input = [128, 37, 121, 123, 98, 97, 105];
    findMax(input);