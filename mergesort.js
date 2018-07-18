// Merges two subarrays of nums[].
// First subarray is nums[l..m]
// Second subarray is nums[m+1..r]

function merge(nums,l,m,r){

    let n1 = m -l +1
    let n2 = r -m 

    // Copy data to temp arrays
    const firstSubarray = nums.slice(0,m)
    console.log("firstSubarray")
    console.log(firstSubarray)

    const secondSubarray = nums.slice(m,r)
    console.log("secondSubarray")
    console.log(secondSubarray)

    let i = 0
    let j = 0
    let k = l

    while (i < n1 && j < n2){
        if (firstSubarray[i] <= secondSubarray[j]){
            //in place value change copied from subarray, copy the smaller one
            nums[k] = firstSubarray[i] 
            i++
        }
        else{
            nums[k] = secondSubarray[j]
            j++
        }
        k++
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1){
        nums[k] = firstSubarray[i]
        i ++
        k ++
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2){
        nums[k] = secondSubarray[j]
        j ++
        k ++
    }
        
    
}

function mergeSort(nums) {
    
    if (nums.length < 2 ) {
        return nums;
    }

    const length = nums.length;
    const middle = Math.floor(length/2);
    const left = nums.slice(0,middle);
    const right = nums.slice(middle,length);
    
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return stitch(sortedLeft,sortedRight);

    // if (l<r){
    //     m = Math.floor((l+r)/2)
    //     console.log(`l:${l} m:${m} r:${r}`)
    //     mergeSort(nums,l,m)
    //     mergeSort(nums,m+1,r)
    //     merge(nums,l,m,r)
    //     //console.log(nums)
    // }
    

}



const stitch = (left, right) =>{
    const results =[];

    while (left.length && right.length) {
        if(left[0] <=right[0]){
            results.push(left.shift());
        }
        else{
            results.push(right.shift());
        }
    }

    // while(left.length){
    //     results.push(left.shift());
    // }

    // while(right.length){
    //     results.push(right.shift());
    // }

    //results.concat(left, right)

    return [...results, ...left, ...right];


}



var nums = [10,5,3,8,2,6,4,7,9,1]

mergeSort(nums)
console.log(mergeSort(nums))
