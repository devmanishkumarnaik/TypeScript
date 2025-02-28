//#17: TypeScript Tuples🔥Mastering Data Structures

//Defining a tuple type for person information
type PersonInfo = readonly [string, number, boolean]

//Function to display person information
const displayPersonInfo: (person:PersonInfo)=>void = (person:PersonInfo): void => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes": "No"}`);
}


//Example Usage
const person1:PersonInfo = ['vinod',29,true];
const person2:PersonInfo = ['thapa',27,false];

displayPersonInfo(person1)
displayPersonInfo(person2)

//Homework------------------------------------
//Question1 - You are building a simple e-commerce application and need to store product information.Define a tuple type called ProductInfo to represent each product, containing the following elements:

//Product name(string)
//Price(number)
//Quantity in stock(number)
//Create two product instances using this tuple type and display their information.

//Question2 - You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

//Subject name(string)
//Grade(number)
//Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English and Science. Calculate and display the average grade for the student.

//Question3 - You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information,containing the following elements:

//City name(string)
//Temperature in Celsius(number)
//Weather conditions (string)
//Create a function called displayWeather that takes an array of WeatherData and display the weather information for each city in a user-friendly format.