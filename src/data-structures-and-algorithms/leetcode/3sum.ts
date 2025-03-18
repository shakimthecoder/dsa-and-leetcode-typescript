// Given an integer arr nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

function returnTriplets (nums: number[]): number[][] {
    const triplets: number[][] = [];
    nums.sort((a ,b) => a - b); // sort array 
    for(let i=0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;// skip duplicates    
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum < 0){
                l++;
            }
            else if(sum > 0){
                r--;
            }
            else{
                triplets.push([nums[i], nums[l], nums[r]]);
                l++;
            }
            while(l <r && nums[l] === nums[l-1]) l++;
        }
        }

    return triplets;