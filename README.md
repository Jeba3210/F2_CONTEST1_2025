# JavaScript Array Operations

This project demonstrates basic JavaScript operations on an array of objects representing user data. The data includes attributes like `id`, `name`, `age`, and `profession`.

## 📁 Project Structure

The main code is written in JavaScript and performs a series of operations such as filtering, adding, removing, and concatenating array elements.

## 📌 Features

### 1. Print Developer by `map()`

PrintDeveloperbyMap()
Iterates through the array using map() and logs all objects with the profession "developer".

2. Print Developer by forEach()
js
Copy
Edit
PrintDeveloperbyForEach()
Iterates using forEach() and logs all developer objects.

3. Add Data
js
Copy
Edit
addData()
Adds a new user object to the array:

js
Copy
Edit
{ id: 4, name: "susan", age: "20", profession: "intern" }
Logs the updated array.

4. Remove Admin
js
Copy
Edit
removeAdmin()
Removes all users with the profession "admin" using filter() and logs the new array.

5. Concatenate Array
js
Copy
Edit
concatenateArray()
Concatenates a new array arr2 with arr and logs the result.

js
Copy
Edit
let arr2 = [
  { id: 4, name: "Peter", age: "23", profession: "Systems analyst" },
  { id: 5, name: "David", age: "20", profession: "Developer" },
  { id: 6, name: "Diana", age: "21", profession: "Data Analyst" }
];
📚 Technologies Used
JavaScript (ES6+)

🚀 How to Run
Copy the code into a .js file (e.g., script.js).

Run it using a browser console or Node.js:

bash
Copy
Edit
node script.js
📌 Notes
This project is for educational purposes and helps in understanding array manipulation using JavaScript.

Feel free to modify the array and test with different data.

🧑‍💻 Author
Jeba Parvin
Frontend Developer | JavaScript Enthusiast
