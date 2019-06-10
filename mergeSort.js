(function main() {
    
function merge(arr1,arr2){
let arr3 =[];
let i=0;
let j=0;
while(i<arr1.length && j<arr2.length){
             if(arr1[i] >= arr2[j])
             {
                 arr3.push(arr2[j]);
                 j++;
             } else {
                 arr3.push(arr1[i])
                 i++;
             }
    
    }
    return arr3.concat(arr1.slice(i),arr2.slice(j)) 
}  

function mergeSort(low,high,arr){
   if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = mergeSort(low,middle,arr.slice(0, middle)) // items on the left side
  const right = mergeSort(middle+1,high,arr.slice(middle)) // items on the right side
  return merge(left,right)

}
let arr =[1,1,8,7,5,9,12,34,55,23,65,11,33]

console.log(mergeSort(0,arr.length,arr))


}());
