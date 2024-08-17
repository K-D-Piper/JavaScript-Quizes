//DAY ONE QUIZ 7/29/2024 : START
//!TEMPATURE CONVERTER 

//F = C * 9/5 +32
// CONSOLE.LOG(ANSWER)

let ctemp = 30
let ftemp = ctemp * 9/5 + 32
console.log(ftemp)

//! Age calculator 
//subtract the birth year from the current year to get the age. 
// Console.log(answer)

let currentyear = 2024
let birthyear= 1998
let age = currentyear - birthyear
console.log(age)

//TODO Personal Greeting
//? Input the user's name. 
// console out a personalized greeting message. 

let greeting = "Heyyy. Want some cake?"
console.log(greeting)

//TODO Tip Calcualtor 
//? Input the user to input the bill amout and the tip percetage.
// Calcuate the tip amout and console the total bill.

let billamount = 50
let tipPercertage = .20
let tip = billamount * tipPercertage
console.log(tip)
let finalbill = billamount + tip
console.log(finalbill)

//TODO Age Calculator in days
//Ask the user to input their age in years
//Multiply the age in years by 365
//console the total days 

let MyAge =  25
let Days = 365
let TotalDays = MyAge * Days
console.log(TotalDays)

//! DAY 1 (7/29/2024) QUIZ END

// DAY 2 (7/31/2024) QUIZ START


//! Access Array Elements
//TODO Define an array of items 
let items = ["apple" , "banana" , "cherry" , "date", "elderberry"]

//TODO Access specific elements
let firstItem = items[0]
let thirdItem = items[2]
let lastItem = items[4]

//Output the results
console.log("Items: " + items)
console.log("First Item: " + firstItem)
console.log("Third Item: " + thirdItem)
console.log("Last Item: " + lastItem)

//! List of Favorite Movies
//TODO Define an array of favorite movies
//Output each movie individually

fav_movies = ["Barbie Movie", "Coraline", "Princess & the Frog"]
console.log(fav_movies[0])
console.log(fav_movies[1])
console.log(fav_movies[2])

//Sum of Array Elements
//TODO Define an array of numbers
//TODO Calculate sum of the numbers 
//Output the results

let count_array = [3, 6, 9, 12, 15]
let count_sum = 0

for (let i = 0; i< count_array.length; i++) {
    count_sum += count_array[i];
}
console.log(count_sum)

//! Concatenate Strings in an Array 
//TODO Define an array of strings
//TODO Concateate the strings
//Output the result 

let cat_string = ["cats " , "are " , "cute ", "but ", "evil "]
console.log(cat_string[0]+cat_string[1]+ cat_string[2] + cat_string[3] + cat_string[4])

//! Update Array Elements
//TODO Define an array of items
let colors = ["red" , "blue" , "green" , "yellow", "purple"]
//TODO Update
//? green to cyan 
//? purple to orange 
//Output the result 

colors[2] = "cyan"
colors[4] = "orange"
console.log(colors)

// DAY 2 (7/31/2024) QUIZ END
// DAY 3 (8/1/2024) QUIZ START


//! Favorite Fruit Checker (1)
//TODO define an array of favorite fruits
//TODO define a variable for the fruit to check 
//* Check if the fruit is in the array and output the results

let best_fruits = ["strawberries" , "cherries", "kiwis"];
best_fruits = ["pickles"]

if(best_fruits == true){
    console.log("Gimmie dat fruit!")
} else {
    console.log("You can keep that sad fruit. ")
}

//! Grade Categorizer (2)
//TODO Define a varable for the grade
//TODO Catergorize the grade
//* Output the result

//(needs double check/fix)
let grade = [true, 50]

switch (grade == true && grade == 100){
 case grade >= 90: 
    console.log("A")
    break;
 case grade >= 80: 
    console.log("B")
    break;
 case (grade >= 70):
    console.log("C")
    break;
 case (grade >= 60):
    console.log("D")
    break;
 case (grade <= 59):
    console.log("E")
    break;
}

//! Day of the week checker (3)
//TODO Define an array of days of the week
//TODO Define a variable for the day to check
//TODO Check if the day is a weekend or weekday 
//* Output the results 

let days_of_week = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
days_of_week = "Saturday"

if (days_of_week == [ "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"]){
    console.log( "Weekday")
} else {
    console.log("Weekend")
}

//! Tempature Checker (4)
//TODO Define a variable for the tempature 
//TODO Catagorize the tempature and 
//* output the result 

let temp = 92

if (temp >=90){
    console.log("it's hot")
} else if (temp <= 89 && temp >= 60){
    console.log("it's nice")
} if (temp <=59 ) {
    console.log("it's cold")
}

//! Number Sign Checker (5)
//TODO Define a variable for the number 
//TODO Check the sign of the number 
//* output the result 

let sign_num = 50

if(sign_num ===50) {
    console.log( "Thats a good sign")
} else {
    console.log("Thats not a good sign.")
}

//DAY 3 (8/1/2024) QUIZ END
//DAY 4 (8/2/2024) QUIZ START
// JavaScript Quiz. 8/2/2024
 
//Question 1:
//Write a line of code that declares an array called fruits with the elements "apple", "banana", and "cherry". Then, log the second element of the array to the console.
 //Q1
 let quizFruits = ["apple" , "banana" , "cherry"]
 console.log(quizFruits[1])
 
 
 //Question 2:
 //Write a line of code that declares an array called numbers with the elements 1, 2, 3, 4, and 5. Then, create a variable sum that is the sum of the first and third elements of the array, and log sum to the console.
 //Q2
 let numbers = [1 , 2 , 3 , 4, 5]
 let varsum = numbers[0] + numbers[2]
 console.log (varsum)
  
 //Question 3:
 //Write a line of code that declares an array called languages with the elements "JavaScript", "Python", and "Java". Then, change the second element of the array to "Ruby" and log the entire array to the console.
 //Q3 
 
 let languages = ["JavaScript" , "Python" , "Java"]
 languages[1] = "Ruby"
 console.log(languages)
 
  
 //Question 4:
 //Write a line of code that declares a variable age and assigns it the value 20. Then, use an if-else statement to check if age is greater than or equal to 18, and log "Eligible to vote" if true, and "Not eligible to vote" otherwise.
 //Q4
 
 let qAge = 20
     
 if (qAge >= 18) {
     console.log("Eligible to Vote")
 } else{
     console.log("Sorry Kid. Not Eligable to Vote. ")
 } 
 
 //Question 5:
 //Write a line of code that declares an array called cities with the elements "New York", "Los Angeles", and "Chicago". Then, create a variable lastCity that holds the last element of the array, and log lastCity to the console.
  //Q5
 
 let cities = ["New York" , "Los Angeles" , "Chicago"]
 let lastcity = cities[2]
 console.log(lastcity)
 
 //Question 6:
 //Write a line of code that declares a variable x and assigns it the value 7. Then, use an if-else statement to check if x is greater than 5 or less than 10, and log "In range" if true, and "Out of range" otherwise.
 //Q6 
 let x = 7
 
 if (x > 5 || x < 10) {
     console.log ("In range")
 } else {
     console.log ("Out of range")
 }

 // 8/2/2024 JavaScript Quiz END 

 //QUIZ DAY 5 8/5/2024 START 

//! List of Favorite Movies (1) //Check 
//TODO Define an array of favorite movies //Check 
//* Output each movie individually //Check 
 
fav_moviez = ["Barbie Movie", "Coraline", "Princess & the Frog"]

for (let i = 0; i < fav_moviez.length ; i++){
    console.log(fav_moviez[i])
}

//! Sum of Array Elements (2)
//TODO Define an array of 5 numbers //Check 
//TODO Calculate sum of the numbers 
//* Output the result
//! Update Array Elements
 
let numArr = [ 0, 3, 6, 8, 9]; //should be 26
let numArrSum = 0;

for ( let i = 0; i < numArr.length; i++){
    numArrSum += numArr[i];
}
    console.log(numArrSum)

//TODO Define an array of items (3)
let colorzz = ["red", "blue", "green", "yellow", "purple"];
//TODO Update
//? green to cyan
//? purple to orange
//* Output the results

colorzz[2] = "cyan"
colorzz[4] = "orange"

for (let i = 0 ; i < colorzz.length ; i++ ){
    console.log(colorzz[i])}

//! Grade Categorizer (4)
//TODO Define a array of 5 grade numbers
//TODO Categorize each grade
//* output each result

let mahGrades = [30, 50, 75, 100, 80]

for (let i = 0 ; i < mahGrades.length ; i++)
{
    if (mahGrades[i] <= 60) 
        {console.log ( "Try Again Sport. E")}
    else if (mahGrades[i] >= 60 && mahGrades[i] < 70)
        {console.log("Good Try, but maybe one more time. D" )}
    else if (mahGrades[i] >= 70 && mahGrades[i] < 80)
        {console.log("Great Try, but maybe one more time. C" )}
    else if (mahGrades[i] >= 80 && mahGrades[i] < 90)
        {console.log("Great Job! Gotta B." )}
    else if (mahGrades[i] >= 90 && mahGrades[i] <= 100)
        {console.log("Certifed Genius. Good Job A maker." )}
    else if ( mahGrades[i] > 100)
        {console.log ("Overachiever's Award")}
}

 
//! Day of the Week Checker(5)
//TODO Define an array of days of the week (check)
//TODO Define a variable for the day to check 
//TODO Check if the day is a weekday or weekend
//* output the result
 
const mahDays = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]

mahDays = "Wednesday"

for (i = 0; i < mahDays.length ; i++)
{
    if ( mahDays[i] == "Saturday" || "Sunday") {
        console.log("Weekend coding? Weirdo. Go have fun!")
    } else {
        console.log("Ha. Have a good week coding! Weekday Warrior")
    }

}
//! Temperature Checker(6)
//TODO Define a array of 5 temperature numbers
//TODO Categorize the temperatures in 3 types (HOT, COLD, just right)
//*output the result
 
let mahTemps = [ 79, 101, 92, 75, 59]

for (i = 0; i < mahTemps.length ; i++) 
{
    if (mahTemps[i] >= 80) {
        console.log("Its too hot for this")
    } else if (mahTemps[i] <= 79 && mahDays[i] >= 69){
        console.log("just right")
    } else {
        console.log("Too Cold. Sweater Weather")
    }
}



//! Number Sign Checker(7)
//TODO Define a array of 5 numbers
//TODO Check the sign of the number
//* output the result

const SignNumbers = [ -9 , 6 , 55, -8, 0]

for (i = 0; i < SignNumbers.length ; i++) 
{
    if (SignNumbers[i] >= 1){
        console.log("POSTIVE NUMBER")
    } else if (SignNumbers[i] === 0) {
        console.log("THATS ZERO")
    } else {
        console.log("NEGATIVE GHOSTRIDER")
    }

}
//QUIZ DAY 5 (8/5/2024) END
