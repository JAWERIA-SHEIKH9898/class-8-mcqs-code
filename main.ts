//? What is the output of the following code?

// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc,current) => acc + current,0);
// console.log(result);


//? accumalte value : 0 1 3 6 10 15
//? current vlue ka sequnce kiya : 1, 2 , 3 ,4 ,5

// ! initial value kiya 0

// ! acc 0 + current 1 = 1
// ! acc 1 + current 2 = 3
// ! acc 3 + current 3 = 6
// ! acc 6 + current 4 = 10
// ! acc 10 + current 5 = 15

//* A) 15...
//* B) 20
//* C) 25
//* D) 30

//? What is the output of following code? 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// const result = arr.filter(num => num % 2 === 0);
// console.log(result);

//* A) [1,3,5]
//* B) [1, 2, 3, 4, 5]
//* C) [2, 4, 6, 8, 10].....
//* D) [2, 5, 6, 9, 4]

//? What is the output of following code? 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const result = arr.slice(2,7);
// console.log(result);

//* A) [1,3,6]
//* B) [3,4,5,6,7]....
//* C) [3,4,5,6]
//* D) [2,3,4,5,6]

//? What is the output of the following code?

// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter(num => num % 2 === 0).map(num => num * 2).reduce((acc,current)=>   acc + current, 0)
// console.log(result);


//* A) 20
//* B) 12...
//* C) 30
//* D) 40

//? What is the output of following code?

// const arr = ["a","b","c"];
// const result = arr.join(" -!- ");
// const result1 = arr.join(" =/= ");
// console.log(result);
// console.log(result1);

//* A) a,b,c

//* B) [a =/= b =/= c=/= ]
   //* [a -!- b -!- c -!- ]  
       
//* C) [a -!- b -!- c -!- ] 
   //* [a =/= b =/= c=/= ] .....

//* D) [a  ,  b , c ]

//? What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(6));

//* A)  true
//* A) false.....
//* A) 0
//* A) -1


//? Which method is use to concatenate two or more array?

//* A) merge()
//* B) join()
//* C) concat()...
//* D) push()


//?  What is the output of following code?

// const arr = [1,2,3,4,5]
// const result = arr.map(num => num * 2)
// console.log(result);

//* A) [1, 2, 3]
//* B) [2, 4, 6, 8, 10]....
//* C) [2, 4, 6, 8]
//* D) [3, 4, 5]

//?  What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0, -1);
// arr.pop();
// console.log(arr);

//* A) [0, -1, 1, 2, 3, 4]......
//* A) [-1, 0, 1, 2, 3, 4]
//* A) [0, -1, 1, 2, 3, 5]
//* A) [-1, 0, 1, 2, 4, 5]

//? What is the output of following code? 

// const arr1 = [1,2]
// const arr2 = [9,10]
// const result = arr1.concat(arr2)
// console.log(result);

//* A) [1, 9, 2, 10]
//* B) [1, 2, 3, 4]
//* C) [1, 2, 9, 10].....
//* D) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//? What is the output of following code? 

// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const result =arr1.concat(arr2).join(" - ")
// console.log(result);

//* A) [1,2,3,4]
//* B) [1 - 2 - 3 - 4]
//* C)  1 - 2 - 3 - 4....
//* D) [ "1 - 2 - 3 - 4"]


//? Which element is used to transform each element of an array?

//* A) filter()
//* A) reduce()
//* A) map()....
//* A) join()

//? Which is the output of the following code ?

// const names:string[] = ["a","b","c","d","e","c","e","f","c"]
// const ans1:boolean = names.includes("c",3,)
// const ans2:boolean = names.includes("c",7,)
// console.log(ans1);
// console.log(ans2);

//* A) false false 
//* B) true true....
//* C) false true
//* D) true false

//?  What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// arr.push(6, 7);
// arr.shift();
// console.log(arr);

//* A) [2, 3, 4, 5, 6, 7].....
//* A) [6, 7, 2, 3, 4, 5]
//* A) [1, 3, 4, 5, 6, 7]
//* A) [7, 2, 3, 4, 5, 6]



//? What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// arr.fill(0, 1, 3);
// console.log(arr);

//* A) [1, 0, 0, 0, 5]
//* B) [1, 0, 3, 4, 5]
//* C) [1, 0, 0, 4, 5]....
//* D) [1, 2, 3, 4, 0]


//?  What is the purpose of the fill() method in an array?

//* A)  To add elements to the end of an array
//* A) To remove elements from an array
//* A) To fill an array with a specified value....
//* A) To sort an array


//?  What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));

//* A)  true....
//* B)  false
//* C)  0
//* D)  -1



//? What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// arr.push(6, 7);
// arr.shift();
// arr.splice(2, 1);
// console.log(arr);

//* A) [2, 3, 5, 6, 7]....
//* B) [2, 4, 5, 6, 7]
//* C) [2, 3, 6, 7]
//* D) [7, 2, 3, 5, 6]

//? What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0, -1);
// arr.splice(2, 2);
// console.log(arr);

//* A) [-1, 0, 1, 4, 5]
//* B) [0, -1, 4, 5]
//* C) [0, -1, 1, 2, 5]
//* D) [0, -1, 3, 4, 5]....



//? What is the output of the following code:

// let arr = [1, 2, 3, 4, 5];
// arr.slice(1, 3);
// console.log(arr);

//* A) [1, 2, 3, 4, 5]
//* B) [2, 3]
//* C) [1, 4, 5].....
//* D) [1, 2, 4, 5]























