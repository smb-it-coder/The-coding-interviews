
// Using reduce function 
function arrSum(arr, dimention){
    //let sum = 0;
    let arrFlat = arr.reduce((acc, value)=>  acc.concat(value), []);
    console.log('arrFlat initial', arrFlat);
    for(let i = 0; i < dimention - 2; i++ ){
        arrFlat = arrFlat.reduce((acc, value)=>  acc.concat(value), []);
    }
    console.log('arrFlat final', arrFlat);

   let sum = arrFlat.reduce((total, element) => total + element, 0);
    console.log('total sum', sum);
}


let arr = [1, 2, [3, 4, [5 ,[6,8]]]];
let dimention = 4
arrSum(arr, dimention);


// Using recursive function in javascript


function arrSum1(arr, sum = 0) {
    const size =  arr.length;
    
    for (let i = 0; i < size; i++) {
        if(Array.isArray(arr[i])) {
            sum = arrSum1(arr[i], sum); // recursive function calling here
        } else {
            sum = sum + arr[i];
        }

    }

    console.log('Final Array Sum :', sum);
    
     return sum;
}


let arr = [1, 2, [3, 4, [5]]];
console.log(arrSum1(arr))