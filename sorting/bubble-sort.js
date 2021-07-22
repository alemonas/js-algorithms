// Bubble sort
// Usually we shouldn't use this algorigthm in production (there are more efficient algorithms for sorting)
// Time Complexity: Loop inside a loop -> O(n^2)
// Spacial Complexity: Constant (because we are creating any aditional arrays, just operating over the array itself)
// Mutate the array which is good in this case (don't worry about rules of Funcional Programming)

function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}

module.exports = bubbleSort;
