# JavaScript Array Operations

This small JavaScript project demonstrates basic array operations on a list of user objects. Each object contains fields like `id`, `name`, `age`, and `profession`.

---

## 📋 Array Example

```javascript
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
```

---

## 📌 Features & Functions

### 1. Print Developers using `map()`

Logs all users whose profession is `"developer"` using the `map()` method.

```javascript
function PrintDeveloperbyMap() {
  arr.map((element) => {
    if (element.profession === "developer") {
      console.log(element);
    }
  });
}
```

---

### 2. Print Developers using `forEach()`

Same as above, but uses the `forEach()` method.

```javascript
function PrintDeveloperbyForEach() {
  arr.forEach((element) => {
    if (element.profession === "developer") {
      console.log(element);
    }
  });
}
```

---

### 3. Add Data

Adds a new user to the array and prints the updated array.

```javascript
function addData() {
  let newData = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newData);
  console.log(arr);
}
```

---

### 4. Remove Admin

Removes users with the profession `"admin"` and logs the result.

```javascript
function removeAdmin() {
  let newArr = arr.filter((element) => element.profession !== "admin");
  console.log(newArr);
}
```

---

### 5. Concatenate Another Array

Merges `arr` with another array of user objects and prints the combined result.

```javascript
function concatenateArray() {
  let arr2 = [
    { id: 4, name: "Peter", age: "23", profession: "Systems analyst" },
    { id: 5, name: "David", age: "20", profession: "Developer" },
    { id: 6, name: "Diana", age: "21", profession: "Data Analyst" },
  ];

  let concatenatedArr = arr.concat(arr2);
  console.log(concatenatedArr);
}
```

---

## ▶️ How to Run

1. Copy the code into a file like `script.js`
2. Run it using Node.js:
   ```bash
   node script.js
   ```
3. Or embed it in an HTML file and open it in your browser, then check the browser console for output.

---

## 🧠 Concepts Practiced

- Array iteration (`map`, `forEach`)
- Filtering arrays
- Adding elements to arrays
- Concatenating arrays
- Working with object arrays

---

## 👤 Author

**Jeba Parvin**  
Frontend Developer | JavaScript Enthusiast

---
