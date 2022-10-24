// 1.Write an array of months in a year. Using console.log display June, October and January from the array.

var months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];

console.log(months[5], months[9], months[0]);

// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days[6]);

// 3. Print all negative elements from the array [2, -4, 5, -2, -11].

var numbers = [2, -4, 5, -2, -11];

console.log(numbers[1], numbers[3], numbers[4]);

// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].

var divisible = [5, 15, -5, 20, 12, 18, 72, 14, 9];

console.log(divisible[1], divisible[4], divisible[5], divisible[6], divisible[8]);

/* var d = divisible[4];

if (d % 3 === 0) {
    console.log(d);
    
}; */

/*5. What is the index of number 24 in the following array? 
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];

//Index  of number 24 is a[0][3]

Using console.log:
● Display the 3rd element of the array
● Display the 2nd element of the 3rd element.*/


var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];
console.log(a[2]);
console.log(a[2][1]);



