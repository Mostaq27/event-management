<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> 

In the provided code, there is a typo. You declared the variable as greeting, but you attempted to assign an empty object to greetign. Due to this typo, JavaScript will throw a ReferenceError because greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i> 

In the given code, the sum function takes two parameters a and b and returns their sum. When you call sum(1, "2"), JavaScript will perform type coercion and convert the number 1 to a string to make the operation possible. Therefore, it concatenates the two strings, resulting in "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> 
In this code, the info object is initially assigned the value { favoriteFood: "🍕" }, where "🍕" is the first element of the food array. However, in the next line, the favoriteFood property of the info object is reassigned to "🍝". This change does not affect the food array in any way, so the food array remains `["🍕", "🍫", "🥑", "🍔"]`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>

In the given code, the sayHi function expects a parameter name, but when you call sayHi() without providing an argument, it will use the default value of undefined for name. So, it will return "Hi there, undefined" when you log it to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i> 

In this code, the forEach loop iterates through the nums array and increments the count variable for each truthy value (a value not equal to 0). The nums array contains 4 elements (0, 1, 2, and 3), but only 3 of them (1, 2, and 3) are truthy, so the count variable ends up with a value of 3.</i>

</p>
</details>
