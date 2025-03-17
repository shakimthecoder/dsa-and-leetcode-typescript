// Given an array of integers nums, and an integer target, return the indices of  the two numbers such that they add up to target.

//ex [2,7,11,15], target = 9 => [0,1]

function twoSum(nums: number[], target: number): number[]{
    for (let i=0; i < nums.length; i++){
        for (let j=0; j < nums.length; j++){
            if (i === j) continue;
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return [];
}

// More efficent solution 

/*function tooSum(nums: number[], target: number): number[]
{
    const complements = new Map<number, number>();
     for(let i =0; i < nums.length; i++){
        const complement = target - nums[i];
        if(complements.has(complement) {
            return [complements.get(complement), i]
            complements.set(nums[i], i);
        })
     }
}
*/