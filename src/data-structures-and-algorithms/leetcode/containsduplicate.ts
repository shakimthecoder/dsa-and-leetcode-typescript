// Given an integer arr nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// ex [1,2,3,1] => true, [1,2,3,4] => false

/*function containsDuplicate(nums: number[]): boolean { 
    type Tally = {
        [num: number] : number;
    }
    const tally: Tally = {};

    for(let num of nums){
        if(tally[num]){
            return true;
            tally[num] = 1;
        }
        else return false;
    }
}
*/

// T O(n)
// S O(1)

function containsDuplicate(nums: number[]): boolean {
    const uniqueNums = new Set <number>(nums);
    return uniqueNums.size < nums.length;
}


