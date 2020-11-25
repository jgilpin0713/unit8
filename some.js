function hasOddNumber(arr){
    return arr.some(function(num){
        return num %2 === 1
    })
}
hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false


function hasAZero(number){
    number = number.toString();
    number = number.split("");
   return number.some(function(num){
        return num.indexOf(0) !== -1
    })
}
hasAZero([33321232131012]) // true
hasAZero(1212121) // false

function hasOnlyOddNumbers(arr){
   
    return arr.every(function(num){
        return num %2 ===1
    })
}
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val[key] !== undefined
    })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

 hasCertainKey(arr,'first') // true
 hasCertainKey(arr,'isCatOwner') // false

function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value
    })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false