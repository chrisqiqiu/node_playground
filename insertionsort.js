function insertionSort (nums) {

    for (let i = 1 ; i<nums.length ; i ++)
    {
        //traditional insertion
        let key = nums[i]
        let j= i-1
        while (nums[j]>key && j>=0)
        {
            nums[j+1] = nums[j]
            j--
            console.log(nums)
        }
        nums[j+1]=key 


        // for (let j = 0; j< i; j++)
        // {
        //     if (nums[i] < nums[j]  ){
        //         //bubble swap
        //         // tmp = nums[j] 
        //         // nums[j] = nums[i] 
        //         // nums[i] = tmp
        //         //javascript insert function
        //         const arr = nums.splice(i,1);
        //         nums.splice(j,0,arr[0]);
        //         break;
        //     }
        //     console.log(nums)
        // }
        
    }
}



let nums = [10,5,3,8,2,6,4,7,9,1];
console.log(nums)
insertionSort(nums);
console.log(nums)
