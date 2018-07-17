// Merges two subarrays of nums[].
// First subarray is nums[l..m]
// Second subarray is nums[m+1..r]

function merge(nums,l,m,r){

    n1 = m -l +1
    n2 = r -m 

    firstSubarray = []
    secondSubarray = []
    // Copy data to temp arrays
    for(let i = 0 ; i < n1; i ++){
        firstSubarray.push(nums[l+i])
    }

    for(let j = 0 ; j < n2; j ++){
        secondSubarray.push(nums[m+1+j])
    }

    i = 0
    j = 0
    k = l

    while (i < n1 && j < n2){
        if (firstSubarray[i] <= secondSubarray[j]){
            //in place value change copied from subarray, copy the smaller one
            nums[k] = firstSubarray[i] 
            i++
        }
        else{
            nums[k]=secondSubarray[j]
            j++
        }
        k++
    }

    // Copy the remaining elements of L[], if there
    // are any
    while (i < n1){
        nums[k] = firstSubarray[i]
        i ++
        k ++
    }

    // Copy the remaining elements of R[], if there
    // are any
    while (j < n2){
        nums[k] = secondSubarrayj[j]
        j += 1
        k += 1
    }
        
    //console.log(firstSubarray)
}

function mergeSort(nums,l,r) {
    if (l<r){
        m = (l+(r-1))/2
        
        mergeSort(nums,l,m)
        mergeSort(nums,m+1,r)
        merge(nums,l,m,r)
        //console.log(nums)
    }
    

}



var nums = [10,5,3,8,2,6,4,7,9,1]

mergeSort(nums,0,nums.length)
console.log(nums)
