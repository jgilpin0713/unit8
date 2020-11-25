function doubleValues(arr){
    let doubles = []
    arr.forEach(function(val){
        let doubleVal = val *2
        doubles.push(doubleVal)
    })
   console.log(doubles);
}
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]



function onlyEvenValues(arr){
    let evens = []
    arr.forEach(function(val){
        if (val % 2 === 0)
        evens.push(val)
    })
   console.log(evens);
}
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]



function showFirstAndLast(arr){
    let char = []
    arr.forEach(function(val){
        let chars = ""
        chars += val[0] + val[val.length - 1]
        char.push(chars)
    })
   console.log(char);
}
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


function addKeyAndValue(arr, key, value){
    let result = [];
   
    arr.forEach(function(val){
        val[key];
        val[key] = value;
        result.push(val);
    });
   console.log(result);
}

addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/


function vowelCount(str) {
    let arr = Array.from(str.toLowerCase())
    let result = {};
    let count = 0
    let vowels = "aeiou"
    arr.forEach(function(val){
        if (vowels.indexOf(val) !== -1)
        if (result[val] === undefined){
            count = 1
            result[val] = count
        } else {
            count ++
            result[val] = count
        }
    });
   console.log(result);
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}



function doubleValuesWithMap (arr){
    return arr.map(function (num){
        return num *2
    });
   
}


doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]



function valTimesIndex (arr){
    return arr.map(function (val, index){
        return val *index
    });
   
}

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]

function extractKey (arr, key){
  return arr.map(function(val) {
      return val[key]
    });
   
}


extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)

  // ['Elie', 'Tim', Matt', 'Colt']

function extractFullName (arr){
  return arr.map(function(val) {
      return val["first"] + " "+ val["last"]
    });
   
}



extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])
/*
  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
