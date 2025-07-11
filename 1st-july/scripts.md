Q.5 simple arrow function that takes two numbers and returns their sum
  ```js
    const add = (a, b) => a + b;
  ```


Q.7 change the text of an element with id="message" when a button is clicked.

  ```html
    <button onclick="changeText()">Click Me</button>
  ```

  ```js
    const changeText = () => {
      document.getElementById("message").textContent = "The message has been changed!";
    };
  ```

Q.8 Add an input field and button. When the button is clicked, update a
tag to show the input text.

  ```html
    <input type="text" id="userInput" placeholder="Type something..." />
    <button onclick="updateText()">Submit</button>
    <p id="output"></p>
  ```
  ```js
    function updateText() {
      const input = document.getElementById("userInput").value;
      document.getElementById("output").textContent = input;
    }
  ```

4. 