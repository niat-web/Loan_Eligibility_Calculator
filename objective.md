# Loan_Eligibility_Calculator

## Objective
This project is a Loan Eligibility Calculator built with JavaScript, HTML, and CSS. It allows users to input their income, debts, credit score, desired loan amount, and loan tenure to determine their loan eligibility, potential interest rate, estimated EMI (Equated Monthly Installment), and approval probability. The calculator also features local storage integration to persist and display previous calculations. The core logic is implemented in JavaScript, handling calculations, form validation, and UI updates.

## Output
<iframe src="https://niat-web.github.io/Loan_Eligibility_Calculator/" height="1000" width="300" title="Loan_Eligibility_Calculator"></iframe>

## Project Requirements
**Technologies:** JavaScript, HTML, CSS, Local Storage

## Features to Implement
- Calculate loan eligibility based on income, debts, and credit score.
- Determine the interest rate based on the credit score.
- Calculate the EMI (Equated Monthly Installment) for the loan.

## UI Enhancements
- Implement a dark mode toggle for better user experience.
- Display previous loan calculations for easy reference.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement `checkEligibility` function | Determine if the user is eligible, potentially eligible, or not eligible for a loan based on their credit score and income. |
| Implement `getApprovalProbability` function | Return the loan approval probability as a percentage based on the user's credit score. |
| Implement `calculateLoan` function | Calculate the loan eligibility, interest rate, EMI, and approval probability based on user inputs. |
| Integrate with HTML form  | Capture user input from the form elements for income, debts, credit score, loan amount, and loan tenure. |
| Persist data using Local Storage | Store previous loan calculations in local storage and retrieve them to display on the page. |
| Implement delete functionality | Allow users to delete previous loan calculations from the display and local storage. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| Variables (const, let, var) | `const` is used for values that don't change (PI), `let` for variables with block scope (localVar), and `var` (though discouraged) for variables with function scope (name, could be changed to `let` or `const`). |
| Type Conversion & Coercion | `Number()` is used to convert a string to a number.  Arithmetic operations trigger coercion (e.g., number + string may result in string concatenation). |
| Template Literals | Used to create strings with embedded expressions (`Hello, ${name}! You are ${age} years old.`). |
| Variable Scoping | Demonstrates block scope with `let` variables within a function and an `if` statement. |
| Control Flow (if/else, switch) | `if/else` statements are used in `checkEligibility` to determine loan eligibility based on credit score and income.  `switch` statement used in `getApprovalProbability` based on credit score ranges. |
| Error Handling (try/catch/finally) | `try/catch` is used in `safeDivide` to handle potential division by zero errors. The `finally` block always executes. |
| Functions & Events | Functions such as `calculateLoan`, `checkEligibility`, and `getApprovalProbability` perform calculations. Event listeners are attached to the form submission (`loanForm.addEventListener`) and dark mode toggle (`darkModeToggle.addEventListener`). |
| Arrays & Objects | An array `previousCalculations` stores loan calculation objects.  Objects are used to represent loan details. |
| Local Storage | `localStorage.getItem` and `localStorage.setItem` are used to store and retrieve previous calculations, persisting data across sessions. `JSON.parse` and `JSON.stringify` are used to convert between JavaScript objects and JSON strings. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Local Storage API |  `localStorage.setItem('calculations', JSON.stringify(previousCalculations))`  | Used to store loan calculations in the browser's local storage. |
| Local Storage API |  `localStorage.getItem('calculations')` | Retrieves the loan calculation data from local storage. |