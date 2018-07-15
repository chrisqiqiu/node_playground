function bubbleSort (nums) {
    let swap=true
    while (swap){
      swap = false
      for (let i = 1 ; i < nums.length; i ++ ){
        
        if (nums[i-1] > nums[i]){
          tmp = nums[i-1]
          nums[i-1]  = nums[i]
          nums[i] = tmp
          swap=true
        }
      }
    }
  }

  nums=[4,3,2,5,2,1,6,9];
  bubbleSort(nums);
  
  console.log(nums);

  // unit tests
  // do not modify the below code
  // xdescribe('bubble sort', function() {
  //   it('should sort correctly', () => {
  //     var nums = [10,5,3,8,2,6,4,7,9,1];
  //     bubbleSort(nums);
  //     expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
  //     done();
  //   });
  // });