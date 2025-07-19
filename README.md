# JavaScript Array Operations

This project demonstrates basic JavaScript operations on an array of user objects. Each object contains information such as `id`, `name`, `age`, and `profession`.

## 🔧 Features

### 1. Print Developers Using `map()`

This function filters and logs all users whose profession is `"developer"` using the `map()` method.

```javascript
function PrintDeveloperbyMap() {
  arr.map((element) => {
    if (element.profession === "developer") {
      console.log(element);
    }
  });
}
2. Print Developers Using forEach()
This function performs the same task as the one above but uses the forEach() method.

javascript
Copy
Edit
function PrintDeveloperbyForEach() {
  arr.forEach((element) => {
    if (element.profession === "developer") {
      console.log(element);
    }
  });
}
3. Add New Data
This function adds a new user object to the array and logs the updated array.

javascript
Copy
Edit
function addData() {
  let newData = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newData);
  console.log(arr);
}
4. Remove Admins
This function removes all users whose profession is "admin".

javascript
Copy
Edit
function removeAdmin() {
  let newArr = arr.filter((element) => element.profession !== "admin");
  console.log(newArr);
}
5. Concatenate Another Array
This function concatenates the original array with another array of users and logs the result.

javascript
Copy
Edit
function concatenateArray() {
  let arr2 = [
    { id: 4, name: "Peter", age: "23", profession: "Systems analyst" },
    { id: 5, name: "David", age: "20", profession: "Developer" },
    { id: 6, name: "Diana", age: "21", profession: "Data Analyst" },
  ];

  let concatenatedArr = arr.concat(arr2);
  console.log(concatenatedArr);
}
🚀 How to Run
Copy the JavaScript code into a .js file (e.g., script.js).

Run the file using Node.js in the terminal:

bash
Copy
Edit
node script.js
Or open it inside an HTML file with a <script> tag and view the result in the browser console.

🧠 Concepts Covered
map()

forEach()

filter()

push()

concat()

Array and object manipulation in JavaScript

👤 Author
Jeba Parvin
Frontend Developer | JavaScript Learner
