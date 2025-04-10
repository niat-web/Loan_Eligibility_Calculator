// script.js
 

 // Core Concepts
 const PI = 3.14159; // const
 let age = 30; // let
 var name = "John"; // var (avoid in modern JS)
 const isEligible = true; // boolean
 let undefValue; // undefined
 const nullValue = null; // null
 

 // Type Conversion & Coercion
 let numStr = "42";
 let num = Number(numStr); // Type conversion (String to Number)
 let sum = num + 10; // Coercion (Number to String in some contexts)
 

 // Template Literals
 const greeting = `Hello, ${name}! You are ${age} years old.`;
 

 // Variable Scoping (demonstration - avoid global scope where possible)
 function exampleScope() {
  let localVar = "Inside Function";
  if (true) {
  let blockVar = "Inside Block";
  console.log(localVar); // Accessible
  console.log(blockVar); // Accessible
  }
  // console.log(blockVar); // Not accessible outside the block
 }
 

 exampleScope();
 

 // Control Flow
 function checkEligibility(creditScore, income) {
  if (creditScore > 700 && income > 50000) {
  return "Eligible";
  } else if (creditScore > 600 || income > 30000) {
  return "Potentially Eligible";
  } else {
  return "Not Eligible";
  }
 }
 

 function getApprovalProbability(creditScore) {
  switch (true) {
  case creditScore > 750:
  return "90%";
  case creditScore > 700:
  return "75%";
  case creditScore > 650:
  return "50%";
  default:
  return "25%";
  }
 }
 

 // Error Handling
 function safeDivide(a, b) {
  try {
  if (b === 0) {
  throw new Error("Cannot divide by zero!");
  }
  return a / b;
  } catch (error) {
  console.error(error.message);
  return null;
  } finally {
  console.log("Division attempted.");
  }
 }
 

 // User Input & Math
 const loanForm = document.getElementById("loanForm");
 const incomeInput = document.getElementById("income");
 const debtsInput = document.getElementById("debts");
 const creditScoreInput = document.getElementById("creditScore");
 const loanAmountInput = document.getElementById("loanAmount");
 const loanTenureInput = document.getElementById("loanTenure");
 const loanAmountValueSpan = document.getElementById("loanAmountValue");
 const loanTenureValueSpan = document.getElementById("loanTenureValue");
 

 const eligibilitySpan = document.getElementById("eligibility");
 const interestRateSpan = document.getElementById("interestRate");
 const emiSpan = document.getElementById("emi");
 const approvalProbabilitySpan = document.getElementById("approvalProbability");
 const previousCalculationsList = document.getElementById("previousCalculations");
 

 loanAmountInput.addEventListener("input", function () {
  loanAmountValueSpan.textContent = this.value;
 });
 

 loanTenureInput.addEventListener("input", function () {
  loanTenureValueSpan.textContent = this.value;
 });
 

 // Arrays & Objects
 let previousCalculations = JSON.parse(localStorage.getItem("calculations")) || [];
 

 function displayPreviousCalculations() {
  previousCalculationsList.innerHTML = "";
  previousCalculations.forEach((calc, index) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `
  Income: ${calc.income}, Loan: ${calc.loanAmount}, EMI: ${calc.emi}
  <button class="btn btn-danger btn-sm float-right delete-calculation" data-index="${index}">Delete</button>
  `;
  previousCalculationsList.appendChild(li);
  });
 }
 

 previousCalculationsList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-calculation")) {
  const indexToDelete = event.target.dataset.index;
  previousCalculations.splice(indexToDelete, 1);
  localStorage.setItem("calculations", JSON.stringify(previousCalculations));
  displayPreviousCalculations();
  }
 });
 

 displayPreviousCalculations();
 

 // Functions & Events
 function calculateLoan(income, debts, creditScore, loanAmount, loanTenure) {
  const dti = debts / income;
  const eligibility = checkEligibility(creditScore, income);
  const approvalProbability = getApprovalProbability(creditScore);
  let interestRate = 0.05; // Default rate
 

  if (creditScore > 750) {
  interestRate = 0.03;
  } else if (creditScore > 700) {
  interestRate = 0.04;
  }
 

  const monthlyInterestRate = interestRate / 12;
  const emi =
  (loanAmount * monthlyInterestRate) /
  (1 - Math.pow(1 + monthlyInterestRate, -loanTenure));
 

  return {
  eligibility,
  interestRate,
  emi: emi.toFixed(2),
  approvalProbability,
  };
 }
 

 loanForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (loanForm.checkValidity() === false) {
  event.stopPropagation();
  loanForm.classList.add("was-validated");
  return;
  }
  loanForm.classList.remove("was-validated");
 

  const income = parseFloat(incomeInput.value);
  const debts = parseFloat(debtsInput.value);
  const creditScore = parseInt(creditScoreInput.value);
  const loanAmount = parseFloat(loanAmountInput.value);
  const loanTenure = parseInt(loanTenureInput.value);
 

  const results = calculateLoan(income, debts, creditScore, loanAmount, loanTenure);
 

  eligibilitySpan.textContent = results.eligibility;
  interestRateSpan.textContent = (results.interestRate * 100).toFixed(2) + "%";
  emiSpan.textContent = results.emi;
  approvalProbabilitySpan.textContent = results.approvalProbability;
 

  previousCalculations.push({
  income: income,
  loanAmount: loanAmount,
  emi: results.emi,
  });
  localStorage.setItem("calculations", JSON.stringify(previousCalculations));
  displayPreviousCalculations();
 });
 

 // UI Enhancements
 const darkModeToggle = document.getElementById("darkModeToggle");
 darkModeToggle.addEventListener("click", function () {
  if (document.body.dataset.theme === "dark") {
  document.body.dataset.theme = "light";
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  } else {
  document.body.dataset.theme = "dark";
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }
 });
 

 // Initialize theme from local storage (or default to light)
 if (!document.body.dataset.theme) {
  document.body.dataset.theme = "light";
 }