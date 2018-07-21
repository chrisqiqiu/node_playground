

const quickSort = (nums) => {
    console.log(nums)
    if (nums.length<=1){
        return nums;
    }

    const pivot = nums[nums.length-1];

    const left = [];
    const right = [];

    for (let i =0; i<nums.length-1;i++){
        if(nums[i]<pivot){
            console.log("left push")
            left.push(nums[i]);
            console.log(left)
        }
        else if (nums[i]>pivot){
            console.log("right push")
            right.push(nums[i]);
            console.log(right)
        }
    }
    console.log("---------push finished-------------")

    // const leftSorted=quickSort(left);
    // const rightSorted=quickSort(right);

    //return quickSort(left).concat(pivot,quickSort(right));
    //return [].concat(quickSort(left),pivot,quickSort(right));

    return [...quickSort(left), pivot, ...quickSort(right)];
}


const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];

console.log(quickSort(input))