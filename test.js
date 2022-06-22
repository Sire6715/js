let divisibleBy5 = [ ];
let divisibleBy2 = [ ];
myArray = [1,2,3,4,5,6,7,8,9,10];
 
for (let i = 0;( i <  myArray.length); i++){
    if(myArray[i] % 5 === 0){
        let newArray = myArray[i]
        divisibleBy5.push (newArray)
        }

        else if (myArray[i] % 2 === 0){
            let newArray2 = myArray[i]
            divisibleBy2.push (newArray2)
        }
    }

console.log(divisibleBy5);
console.log(divisibleBy2);

//Assignment2

let divisibleBy3=[ ];

for (let i = 0;i <= 100;i++){
    console.log([i]);
    if ([i] % 3 === 0)
 {   let testArray = i;
    divisibleBy3.push(testArray)}
}

console.log(divisibleBy3)



