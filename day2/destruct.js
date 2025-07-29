// 1. Basic Variable Assignment
const numbers = [100, 200, 300];
const [a, b, c] = numbers;
console.log(a, b, c); // 100 200 300

// 2. Swapping Variables (Classic Trick)
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y); // 20 10

// 3. From a Function Return (like React's useState)
function getScores() {
  return [95, 88, 76, 100];
}
const [highScore, secondScore, ...rest] = getScores();
console.log(highScore); // 95
console.log(rest); // [76, 100]

// 4. Default Values
const location = ['New York'];
const [city, country = 'USA'] = location;
console.log(city, country); // 'New York','USA'      

// A simple promise that resolves after 1 second
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve({ message: 'Promise resolved!' });
    } else {
      reject(new Error('Promise rejected!'));
    }
  }, 1000);
});


// 1. Using .then() and .catch()
myPromise
  .then(result => console.log(result.message))
  .catch(error => console.error(error.message));

// 2. Using async/await with try/catch
async function handlePromise() {
  try {
    const result = await myPromise;
    console.log(result.message);
  } catch (error) {
    console.error(error.message);
  }
}
handlePromise();