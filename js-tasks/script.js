// 1.
for (var i = 5; i <= 100; i++) {
    console.log(i);
}

// 2.
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for( let i = 0; i < array1.length; i++){
    if(array1[i] >0 && array1[i] <10){
        console.log(array1[i]);
    }
}

// 3.
let array3= [1, 2, 3, 4, 5];
let sum = 0;
for (let i=0; i<array3.length; i++){
    sum += array3[i];
}
console.log(sum);

// 4.
let array4 = [1, 2, 3, 7, 6, 9];
let sum1 = 0;
let sum2 = 0;
for (let i=0; i<array4.length; i++){
    sum1 += array4[i];
    sum2 = sum1 / array4.length
}
console.log(sum2);

// 5.
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  console.log(user.studentstatus);

// 6.
let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
if(user1.age < 18 && user1.studentstatus == 'active'){
    console.log("hello");
}else if(user1.name == 'levani'){
    console.log("hello levani");
}else if(user1.studentstatus == 'active'|| user1.age < 25){
    console.log("hello world");
}else{
    console.log("error");
}

// 7.
let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];
 for(let a=0; a<array.length; i++){
    const numbersArray = array[a];
        for (let x = 0; x <numbersArray.length; x++) {
            const number = numbersArray[x];    
            if (number > 0) {
                console.log(number);
            }
        }
 }  

//  8.
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for(let i=0; i<users.length; i++){
    if(users[i].status == true){
        console.log(users[i]);
    }
}

// 9.
let name1 = "elene";
if(name1 =="elene"){
    console.log(true);
}else{
    console.log(false);
}

// 10.
let y = 'მარიამი'

switch (y) {
    case 'მარიამი':
    console.log(true);    
        break;
    default:
    console.log(false);
}