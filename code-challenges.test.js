// // ASSESSMENT 3: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

// Input: a number where number >= 2
// Output: recreate the fibonacci sequence in an array
// Remember, Fibonacci = the 3rd, 4th, 5th...numbers are equal to the sum of the two previous numbers
// Describe "fibArry"
describe("fibArray", () => {
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibArray(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
      ])
    })
  })

// //   Test Suites: 1 failed, 1 total
// //   Tests:       1 failed, 1 total
// //   Snapshots:   0 total
// //   Time:        0.133 s, estimated 1 s

//   // // b) Create the function that makes the test pass.

// Create fibArray function
const fibArray = (fiboLength) => {
// Create array using first two numbers of Fibonacci sequence
    let theFib = [1, 1]
// Create for loop at zero index 2, i keeps going where its less than fiboLength
    for (i = 2; i < fiboLength; i++) {
// The index should be the sum of the previous two numbers in fibArray
      theFib.push(theFib[i - 2] + theFib[i - 1])
    }
      return theFib
  }

// // --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// // Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// // a) Create a test with expect statements for each of the variables provided.

// Input: object with 7 key:value pairs
// Output: Array of numbers, sorted from least to greatest
// Describe "studyUp"
describe("studyU", () => {
const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60,
  }
// Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65,
  }
// Expected output: [10, 15, 20, 45, 60, 65, 100]
  it("returns an array of the values sorted from least to greatest", () => {
    expect(studyUp(studyMinutesWeek1)).toEqual([
    15, 15, 20, 30, 30, 60, 90,
    ])
    expect(studyUp(studyMinutesWeek2)).toEqual([
    10, 15, 20, 45, 60, 65, 100,
    ])
  })
})

// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.15 s, estimated 1 s
// // // b) Create the function that makes the test pass.

// Create studyUp function
const studyUp = (studyMin) => {
// Create array with values from studyMin
    let studyTime = Object.values(studyMin)
// Use .sort to sort array from least to greatest
    return Object.values(studyMin).sort((a, b) => a - b)
  }

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

// Input: transaction numbers in an array
// Output: array that keeps track of transactions in an array
// Describe "accountView"
describe("accountView", () => {
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []
it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(accountView(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accountView(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accountView(accountTransactions3)).toEqual([])
  })
})

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.134 s, estimated 1 s
// // b) Create the function that makes the test pass.

// Create accountView function
const accountView = (transactions) => {
// Create empty array for the account balance
    let acctBalance = []
// Use .forEach to iterate through the transactions array that passes value and index
    transactions.forEach((v, i) => {
// Use .push for value at zero-index, when index isn't at zero-index, push value of index into acctBalance
       i === 0 ? acctBalance.push(v) : acctBalance.push(v + acctBalance[i - 1])
    })
    return acctBalance
  }

//   Test Suites: 1 passed, 1 total
//   Tests:       3 passed, 3 total
//   Snapshots:   0 total
//   Time:        0.129 s, estimated 1 s