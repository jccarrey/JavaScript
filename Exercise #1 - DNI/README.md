## 🆔 &nbsp;Exercise DNI

  Create a webpage that prompts the user for their DNI number and corresponding letter, then checks if they match. Use the following array:
  var letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  To determine the letter, divide the DNI number by 23 and get the remainder. The corresponding letter for that DNI is found in the array at the position indicated by the remainder of the division.

  Summary:
  
  - Create a webpage with an input field for the DNI number and letter.
  - Use the provided array of letters.
  - When the user submits the form, calculate the letter using the formula: letter = letters[dni % 23].
  - Compare the calculated letter with the user-input letter to verify if they correspond.
  - Display a message indicating whether the provided DNI and letter are correct or not.
