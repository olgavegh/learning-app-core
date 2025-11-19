## Javascript Language Features

- What is ECMAScript? What is the difference between Javascript & ECMAScript?

  ECMAScript is the standard that defines how the scripting language should work — it’s maintained by Ecma International as ECMA-262.
  JavaScript is a programming language that implements that standard (along with extra browser features like the DOM, Fetch API, etc.).

- Explain the concept of "block scoping" introduced in ES6. How does it differ from function scoping?

  Block scoping in ES6 means that variables declared with let or const are limited to the block level — i.e., the nearest pair of { } (like inside an if, for loop, or function block).
  Before ES6, var used function-level scope, meaning the variable was visible throughout the whole function.

  ```javascript
  if (true) {
    let x = 5; // block scope
    var y = 10; // function scope
  }
  console.log(typeof x); // undefined (x is block-scoped)
  console.log(typeof y); // number (y is function-scoped)
  ```

- What are template literals in ES6 and how do they improve string manipulation in JavaScript?

  Template literals (`...`) make string creation easier by allowing variable interpolation (${}) and multi-line strings. They improve readability and replace complex concatenations.

  ```javascript
  const name = "Jane";
  const message = `Hello, ${name}!
  Welcome to Codecool.`;
  console.log(message);
  // Output:
  // Hello, Jane!
  // Welcome to Codecool.
  ```

- What is the "spread operator" in ES6 and how can it be used to manipulate arrays and objects more effectively?

  The spread operator (...) expands arrays or objects into individual elements, making it easier to copy, merge, or pass them to functions.

  ```javascript
  const a = [1, 2];
  const b = [3, 4];
  const c = [...a, ...b]; // [1, 2, 3, 4]

  const user = { name: "Tom" };
  const details = { age: 30 };
  const merged = { ...user, ...details }; // { name: "Tom", age: 30 }
  ```

- Explain the concept of "destructuring assignment" in ES6. How does it simplify variable assignment and object/array manipulation?

  Destructuring lets you unpack values from arrays or objects into separate variables, simplifying variable assignment and data handling.

  ```javascript
  const [a, b] = [1, 2];
  console.log(a, b); // 1 2
  ```

- How does ES6 introduce the concept of "default function parameters"? Provide an example of using default parameters in a function.

  Default parameters let a function use preset values when no argument is provided, making functions safer and cleaner.

  ```javascript
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }

  console.log(greet()); // "Hello, Guest!"
  console.log(greet("Tom")); // "Hello, Tom!"
  ```

- Explain the concept of "modules" introduced in ES6. How do they improve code organization and reusability in JavaScript?

  ES6 modules allow code to be divided into separate files using export and import. This improves code organization, reusability, and avoids name conflicts.

  ```javascript
  // math.js
  export const add = (a, b) => a + b;

  // main.js
  import { add } from "./math.js";
  console.log(add(2, 3)); // 5
  ```

- Compare the CommonJS and ES6 "modules". What are the differences?
  Both systems are used to organize and reuse code across files by importing and exporting values.
  CommonJS uses require() and module.exports, loading modules synchronously (good for Node.js).
  ES6 modules use import/export and support static imports and tree-shaking (better for browsers and modern bundlers).

  ```javascript
  // CommonJS
  const math = require('./math');
  module.exports = math;

  // ES6
  import \* as math from './math.js';
  export default math;
  ```

- What are higher-order functions in JavaScript?

  A higher-order function is a function that takes another function as an argument or returns a function.
  They make code more modular, reusable, and support functional programming techniques (e.g., callbacks, array methods like map, filter, reduce).

  ```javascript
  function repeat(action, times) {
    for (let i = 0; i < times; i++) {
      action(); // call the passed-in function
    }
  }

  repeat(() => console.log("Hi!"), 3);
  // Output: Hi! Hi! Hi!
  ```

- Explain the purpose and functionality of the map function in JavaScript. How does it differ from the filter and reduce functions?

  map() creates a new array by applying a function to every element of the original array.
  It does not modify the original array.

  ```javascript
  const nums = [1, 2, 3, 4];

  // map → transforms each element
  const doubled = nums.map((n) => n * 2); // [2, 4, 6, 8]

  // filter → keeps only some elements
  const even = nums.filter((n) => n % 2 === 0); // [2, 4]

  // reduce → combines into one result
  const sum = nums.reduce((total, n) => total + n, 0); // 10
  ```

- How can the filter function be used to selectively extract elements from an array based on a given condition? Provide an example where the filter function is used to create a new array with only the elements that meet the specified criteria.

  filter() creates a new array containing only elements that satisfy a given condition.
  The original array remains unchanged.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((n) => n % 2 === 0);

  console.log(evenNumbers); // [2, 4]
  ```

- What is the role of the reduce function in JavaScript? How can it be used to aggregate or combine the elements of an array into a single value? Provide an example where the reduce function is used to calculate a cumulative sum or find the maximum value in an array.

  The reduce() function is used to combine all elements of an array into a single value — such as a sum, product, average, or maximum.

  ```javascript
  const nums = [5, 8, 3, 10];
  const max = nums.reduce((a, b) => (a > b ? a : b));
  console.log(max); // 10
  ```

## Fetch

- How does a query string parameter in a URL contribute to web application functionality? Explain how query string parameters are typically used to pass data between web pages or APIs.

  Query string parameters are the part of a URL that start after the ? symbol.
  They are written as key=value pairs and separated by &.

  Example:
  https://example.com/search?term=javascript&limit=10

  Roles and usage:

  They let us send small amounts of data to a server or another page.
  They help with filtering, sorting, searching, pagination, authentication tokens, etc.

  Web applications or APIs read these parameters and use them to shape the response.

  Examples of use cases:

  /products?category=phones → returns phones only

  /users?page=2 → returns page 2 of users

  /search?q=cats → search for "cats"

  Client-side JavaScript can read them using:

  ```javascript
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("term")); 
  ```


- What is the purpose and functionality of the fetch function in JavaScript?

  fetch() is a built-in JavaScript function used to send HTTP requests to servers or APIs.
  It can be used for:

  Getting data (GET)

  Sending data (POST)

  Updating data (PUT/PATCH)

  Deleting data (DELETE)

  It always returns a Promise, because network operations take time.

  ```javascript
  fetch("https://api.example.com/data");
  ```

- Explain the syntax of the fetch function and how it handles asynchronous operations. Compare and contrast the syntax of making HTTP requests using fetch with async/await versus the syntax using .then() and .catch(). What are the key differences and benefits of using the async/await syntax in terms of code structure and readability?

  Basic syntax
  ```javascript
  fetch(url, {
    method: "GET",
    headers: {},
    body: JSON.stringify(data)
  });
  ```

  Asynchronous behavior

  Because fetch returns a Promise, JavaScript doesn't stop and wait for the server.
  Instead, it continues running, and when the response arrives, the Promise is resolved.

  Using fetch with .then() and .catch()
  ```javascript
  fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => {
      console.log("Users:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  ```
  This works well, but long chains can become harder to read.

  Using fetch with async/await (cleaner)
  ```javascript
  async function loadUsers() {
    try {
      const response = await fetch("https://api.example.com/users");
      const data = await response.json();
      console.log("Users:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  loadUsers();
  ```


  Benefits of async/await

  Code looks like synchronous code → much easier to understand

  Less nesting and indentation

  Easier error handling with try/catch

  Cleaner when dealing with multiple asynchronous steps

- What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed.

  Asynchronicity means JavaScript can start a task and continue running other code without waiting for that task to finish.
  JavaScript is single-threaded, so async operations prevent blocking.
  Typical use cases:

  Fetching data from APIs

  Loading images or files

  Interacting with databases

  Timers (setTimeout, setInterval)

  Waiting for user actions (clicks, scrolling)

  Reason: These tasks take time, and blocking the UI would freeze the page.

- How can you handle the response received from a fetch request?

  After sending a fetch request, you usually need to process the response body.
  .json() → API responses

  ```javascript
  async function getData() {
    const response = await fetch("https://api.example.com/info");
    const data = await response.json(); // convert JSON response
    console.log(data);
  }
  ```

- How does the fetch function handle errors and handle HTTP status codes? Provide an example of using fetch to handle different types of responses, including successful and error responses.

  fetch() only throws an error on network-level errors (e.g., no internet).
  It does NOT automatically throw an error for HTTP 404 or 500.

  You must check:
  response.ok     // true if status is 200-299
  response.status // numeric HTTP code

  ```javascript
  async function loadUser() {
    try {
     const res = await fetch("https://api.example.com/user/123");

     if (!res.ok) {
       console.log("Server returned an error:", res.status);
       return;
     }

      const data = await res.json();
      console.log("Success:", data);
   } catch (error) {
     console.log("Network error:", error);
   }
  }
  loadUser();
  ```

  This example distinguishes:
  Successful response → OK and JSON parsed
  HTTP error → 404, 500, etc.
  Network error → server unreachable, bad URL, connection dropped

- Explain the parts of a URL.

  https://example.com:443/products/item?id=25#reviews

  Parts:

  Protocol → https
  Defines how data is transferred.

  Domain / Hostname → example.com
  The server’s name.

  Port (optional) → :443
  Default ports: 80 (http), 443 (https).

  Path → /products/item
  Identifies a resource on the server.

  Query string → ?id=25
  Contains parameters in key=value format.

  Fragment / Hash → #reviews
  Points to a specific part of the page (not sent to server).

## Responsive Design

- What does responsive design do? Why is it important?

  Responsive design ensures that a website automatically adapts to different screen sizes and devices.
  It adjusts layouts, text, images, and navigation so the page is easy to use on:

  phones, tablets, laptops, large monitors

  Why it’s important:

  Users access websites on many devices

  Google ranks mobile-friendly sites higher

  Better user experience (readability, usability)

  Prevents zooming, scrolling sideways, broken layouts

- What is a mobile-first approach?

  Mobile-first means you start designing and coding the website for small screens first (mobile), and then add more layout features, spacing, or columns for larger screens using media queries.

  In practice:

  Begin with simple, vertical layout

  Then add rules like @media (min-width: 768px) to adjust for tablets and desktops

  This ensures the site works well on mobile devices from the start.

- How can you test the website's appearance on different screen sizes in the browser?

  You can test responsive design using the browser’s developer tools.

  Steps (Chrome/Edge/Firefox):

  Right-click → Inspect

  Click the “Toggle Device Toolbar” icon (phone/tablet icon)

  Choose device presets (iPhone, Pixel, iPad, etc.)

  Drag to resize the viewport

  Test orientation (portrait/landscape)

  This allows you to simulate many screen sizes without a real device.

- Can you give some techniques that help to fulfill the responsive design criteria?

  Common responsive techniques include:

  Fluid layouts using percentages instead of fixed px values

  CSS Flexbox and CSS Grid for flexible structures

  Responsive images (max-width: 100%)

  Media queries to change layout at breakpoints

  Mobile-friendly navigation, hamburger menus

  Using rem/em units instead of fixed pixel values

  Avoiding fixed widths, using max-width

  Using viewport meta tag in HTML

  ```javascript
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

- What do media queries do? How do they work?

  Media queries let you apply CSS only when certain conditions are true, usually based on screen width.
  They allow you to change layout or style at breakpoints (mobile, tablet, desktop).
  The browser checks if the condition (e.g., screen width) is true.
  If it is, the CSS inside the media query is applied.

  ```css
  /* Mobile styles (default) */
  .container {
    font-size: 16px;
  }

  /* Styles for screens 768px and up (tablets, desktops) */
  @media (min-width: 768px) {
    .container {
      font-size: 20px;
    }
  }
  ```

- How would you define the Flexbox layout?

  Flexbox is a CSS layout method designed for alignment, spacing, and distribution of elements in one dimension (horizontal OR vertical).
  It makes it easy to: center items, create equal-sized columns, control spacing between elements, make responsive layouts without floats or complicated hacks

  ```css
  .container {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  ```
  Flexbox works with two main parts: the flex container, the flex items inside it.

- How can you debug the Flexbox layout in the browser?

  Most browsers have built-in Flexbox debugging tools.
  Steps:

  Open Developer Tools
  Inspect the element with display: flex
  Chrome/Edge/Firefox show: Flexbox icon, Flex lines, Gaps and alignment guides, The direction of the axis

  You can also toggle Flexbox overlays that visually display spacing, alignment, and distribution.
  Additionally, checking computed styles helps understand spacing and alignment issues.

- What is the difference between the Flexbox container and the Flexbox item?

  Flexbox container:

  The element with display: flex
  Controls layout rules (direction, alignment, wrapping)
  Defines the main axis and cross axis
  Its properties include: flex-direction, justify-content, align-items, flex-wrap

  Flexbox item:

  The child elements inside the flex container
  Each item can control how it grows or shrinks

  Its properties include: flex-grow, flex-shrink, flex-basis, order, align-self

  In short: The container controls the whole layout, while the items control how each element behaves in that layout.

## Object Oriented Javascript

- What is the difference between the class syntax and the constructor function syntax?

  In JavaScript, both classes and constructor functions allow you to create objects with shared properties and methods. The difference is mostly in syntax and readability. Constructor functions are older: you define a function and attach methods to its prototype. Classes are newer, cleaner, and let you define a constructor and methods directly inside the class body. Internally, classes still use prototypes, but the syntax hides that complexity, making code easier to read and maintain.

  Example — Constructor function:
  ```javascript
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function() {
    console.log("Hi, I'm " + this.name);
  };
  ```

  Example — Class syntax:
  ```javascript
  class Person {
    constructor(name) {
     this.name = name;
   }
   sayHi() {
     console.log("Hi, I'm " + this.name);
   }
  }
  ```

- What does the `new` keyword do?

  The new keyword is used to create a new instance of a class or constructor function. It does a few things automatically: it creates a new empty object, sets this to point to that object, links the object to the constructor’s prototype, executes the constructor function or class constructor, and then returns the new object. Without new, the constructor would not produce a proper instance.

  ```javascript
  const user = new Person("Alice");
  ```

- What does a `constructor` method do in class syntax? When it is executed?

  The constructor is a special method inside a class that runs automatically when a new instance is created. Its purpose is to initialize the object’s properties or state. You do not call it manually; it executes every time you use new on the class.

  ```javascript
  class Person {
    constructor(name) {
     this.name = name; // executed automatically
   }
  }
  ```

- What are the class methods of a class syntax?

  Class methods are functions defined inside a class (outside the constructor) that describe the behavior of the objects. They are stored on the class prototype, so all instances share the same methods. You can call them on any instance of the class.

  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
   sayHi() {
     console.log("Hi, I'm " + this.name);
   }
  }
  const user = new Person("Bob");
  user.sayHi(); // "Hi, I'm Bob"
  ```

- What are the fields of a class syntax?

  Fields are properties that each instance of a class can have. They store data specific to the instance. Fields can be defined inside the constructor using this or directly in the class body using the modern field syntax.

  ```javascript
  class Person {
    age = 30; // field defined in the class body
   constructor(name) {
     this.name = name; // field defined in constructor
   }
  }
  ```

- What is inheritance in the context of Javascript objects?

  Inheritance allows one class or object to reuse properties and methods from another. When a class inherits from another, the child class automatically has access to the parent’s methods and fields, and can also add new behavior or override existing behavior. Internally, this works via the prototype chain: if a property or method isn’t found on the child, JavaScript looks at the parent.

- What does the `extends` keyword do?

  The extends keyword is used in class syntax to create a child class that inherits from a parent class. The child class gets access to all methods and properties of the parent class and can also add or override methods. This allows code reuse and creates a parent–child relationship between classes.

  ```javascript
  class Animal {
   speak() {
     console.log("Some sound");
   }
  }
  class Dog extends Animal {
   bark() {
     console.log("Woof!");
   }
  }
  const myDog = new Dog();
  myDog.speak(); // inherited from Animal
  myDog.bark();  // defined in Dog
  ```

## Express

- Explain the concept of client-server communication in the context of web development. How does information flow between the client and the server in a typical client-server architecture?

  In web development, client-server communication is the process where the client (usually a browser) requests information and the server responds. The client sends an HTTP request, the server processes it, and sends back an HTTP response. This back-and-forth is the core of most web applications.

  Flow example:

  Browser requests GET /home.
  Server checks the route, fetches data if needed.
  Server sends HTML, JSON, or other data back to the browser.
  Browser renders the response.

- What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.

  HTTP requests and responses are the messages exchanged between client and server.

  HTTP Request structure:

  Method: GET, POST, PUT, DELETE
  URL: /api/users
  Headers: metadata like Content-Type
  Body: data sent to server (for POST/PUT)

  HTTP Response structure:
  
  Status code: 200, 404, 500, etc.
  Headers: metadata like Content-Type
  Body: the data sent back (HTML, JSON, images…)

- What is Express.js and how does it simplify web application development in Node.js? Explain the core features and benefits of using Express.js as a web framework.

  Express.js is a minimal, flexible Node.js framework for building web applications and APIs. It simplifies handling HTTP requests, routing, middleware, and more.

  Core features: Easy routing for different HTTP methods and paths. Middleware support for processing requests. Serving static files. Parsing request bodies.

  Benefits: Less boilerplate compared to plain Node.js. Extensible with third-party libraries. Widely used and well-documented.

- What are middlewares in Express.js? Can you list some examples of the built-in middleware?

  Middlewares are functions that run during the request-response cycle. They can: Modify request/response objects, Execute code, End the request-response cycle, Call the next middleware

  Built-in examples:
  express.json() – parse JSON request bodies
  express.static() – serve static files

- How can you tell Express.js to use a middleware?

  You can register middleware using app.use()

  ```javascript
  import express from 'express';
  const app = express();

  app.use(express.json()); // built-in JSON parser
  ```

- Explain the process of handling static files (e.g., CSS, images) in Express.js. How can you configure Express.js to serve static assets from a specific directory in your application?

  Express can serve static files (CSS, images, JS) using express.static(). For example: Then, a file public/style.css is available at http://localhost:3000/style.css.

  ```javascript
  app.use(express.static('public')); // serves files from /public folder
  ```

- What does the built-in JSON middleware (`express.json()`) do?

  express.json() automatically parses incoming JSON request bodies and attaches the data to req.body. Without it, req.body would be undefined for JSON payloads.

  ```javascript
  app.use(express.json());

  app.post('/user', (req, res) => {
    console.log(req.body); // parsed JSON
    res.send('User received');
  });
  ```

- How does Express.js handle HTTP request/response cycles? Explain the process of receiving and responding to requests using Express.js middlewares and route handlers.

  When a request comes in:
  Express matches the request to registered routes/middlewares.
  Middlewares run in the order they are declared.
  Route handler sends a response with res.send(), res.json(), etc.
  If no middleware ends the cycle, the request passes to the next middleware via next().

- How does routing work in Express.js? Explain how to define routes and handle different HTTP methods (GET, POST, etc.) in an Express.js application.

  Routing maps URLs and HTTP methods to functions.

  ```javascript
  app.get('/users', (req, res) => res.send('List of users'));
  app.post('/users', (req, res) => res.send('Create a user'));
  app.put('/users/:id', (req, res) => res.send('Update user'));
  app.delete('/users/:id', (req, res) => res.send('Delete user'));
  ```

- What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json() in Express.js.

  res.send() – sends a response of any type (string, buffer, HTML).
  res.json() – sends JSON data and sets Content-Type: application/json.

  ```javascript
  res.send('<h1>Hello</h1>'); // HTML
  res.json({ message: 'Hello' }); // JSON 
  ```

- What is the purpose of the next() function in Express.js middleware? How can you use it to pass control to the next middleware function in the chain or to terminate the middleware processing?

  next() passes control to the next middleware in the chain. If you don’t call it, the request may hang unless the middleware ends the response.

  ```javascript
  app.use((req, res, next) => {
    console.log('Middleware 1');
   next(); // move to next middleware
  });
  app.use((req, res) => res.send('Hello from middleware 2'));
  ```

- Explain the concept of route parameters in Express.js. How can you extract dynamic values from the URL path using route parameters, and how are these values accessed within route handlers?

  Route parameters are dynamic parts of the URL. Use : to define them and access via req.params.

  ```javascript
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
  });
  ```

## REST and CRUD

- Can you name some typical HTTP response codes and their meaning?

  200 OK – The request was successful.

  201 Created – A resource was successfully created (commonly used after POST).

  204 No Content – The request was successful but there’s no response body.

  400 Bad Request – The request is invalid (e.g., missing parameters).

  401 Unauthorized – Authentication is required or failed.

  403 Forbidden – The client doesn’t have permission to access the resource.

  404 Not Found – The requested resource doesn’t exist.

  500 Internal Server Error – Something went wrong on the server side.

- Can you name some typical HTTP request/response headers and their meaning?

  Headers provide metadata about requests or responses. Examples:

  Request headers:
  Content-Type: tells the server the format of the body (application/json, application/x-www-form-urlencoded).
  Authorization: contains credentials for authentication.
  Accept: tells the server what formats the client can handle (application/json, text/html).

  Response headers:
  Content-Type: tells the client the format of the returned data.
  Set-Cookie: sends cookies from server to client.
  Cache-Control: controls how the client caches the response.

  Headers are key for controlling behavior, security, and content negotiation.

- What are the common HTTP methods used in web development, and what are their respective purposes?

  GET – Retrieve data. Safe and idempotent (doesn’t modify the resource).

  POST – Create a new resource. Sends data in the request body.

  PUT – Replace an existing resource completely.

  PATCH – Update part of a resource (partial update).

  DELETE – Remove a resource.

  These methods align with CRUD operations (Create, Read, Update, Delete).

- How does the GET method differ from the POST method? Explain when it is appropriate to use each method. Which one uses the request body to receive data?

  GET: Retrieves data. Sends data via URL query parameters (?name=value). Should be used when the request does not change server state. Example: /search?q=recipe

  POST: Creates a new resource. Sends data in the request body. Should be used for submitting forms or sending sensitive data. Example: sending JSON to create a new user.

  POST uses the request body, while GET does not.

- Explain the use of the PATCH method in HTTP. How does it differ from the PUT method, and when should it be used to update a resource?

  PUT replaces an entire resource. Missing fields are removed.
  PATCH updates only specific fields of a resource.
  Use PATCH for partial updates and PUT for full replacement.

- How can the DELETE method be used to remove a resource from a server? Explain how the DELETE method works and any considerations for handling resource deletion.

  The DELETE method removes a resource at a specified URL. Servers should handle deletion safely (check permissions, maybe soft-delete instead of permanent deletion).

- What does the REST architecture mean? What are the REST Constraints?

  REST (Representational State Transfer) is an architectural style for web APIs. REST constraints:

  Stateless: each request contains all information.

  Client-server separation: client and server are independent.

  Uniform interface: consistent use of HTTP methods and URLs.

  Cacheable: responses can be cached.

  Layered system: servers can be composed in layers.

  REST APIs map CRUD operations to HTTP methods.

- What does a URL's path represent in a REST architecture? Show an example of the `recipe` resource's CRUD operations. Define the HTTP method and a corresponding path for each CRUD operation.

  The URL path identifies a resource. For a recipe resource:

  (CRUD Operation	HTTP Method	URL Path) Create POST	/recipes ; Read-all	GET	/recipes ; Read-one	GET	/recipes/:id ; Update	PATCH/PUT	/recipes/:id ; Delete	DELETE /recipes/:id

- How do you handle form submissions using JavaScript? Explain the process of capturing form data and preventing the default form submission behavior.

  Select the form element.
  Listen for the submit event.
  Use event.preventDefault() to stop the default page reload.
  Collect form data from inputs.

  ```javascript
  const form = document.querySelector('#myForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(Object.fromEntries(data.entries()));
  });
  ```

- Explain the required elements necessary to define a form in HTML.

  A basic form includes: <form> element with action and method attributes; Input elements: <input>, <textarea>, <select>; A submit button <button type="submit">Submit</button>

- What is the purpose of the required attribute in HTML form elements? How does it enforce mandatory input fields and prevent form submission without the required information?

  The required attribute enforces mandatory input fields. If a field is empty, the browser prevents form submission and shows a warning.

  ```html
  <input type="email" name="email" required>
  ```

- Explain the different types of form input fields available in HTML. How do input types like text, number, email, checkbox, and radio buttons differ, and how are they used in forms?

  text – single-line text; number – numeric input; email – email address, validated by browser; checkbox – allows multiple selections; radio – allows one selection per group.
  Each type provides different validation and UI behavior.

- Can you explain the purpose of the name attribute in the context of form submission?

  The name attribute identifies input values when submitting forms. Without name, the input’s value is not sent to the server.

- Can you explain how we can connect a label tag to a form element?

  Use the "for" attribute on <label> matching the input’s id. Clicking the label focuses the input.

  ```html
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  ```

- How can you dynamically manipulate or modify form elements using JavaScript? Explain how to add or remove form fields dynamically based on user interaction or specific conditions.

  You can add or remove fields based on user interaction.

  ```javascript
  const container = document.querySelector('#fields');
  const addBtn = document.querySelector('#addBtn');

  addBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'extraField';
    container.appendChild(input);
  });
  ```

- How can you convert form data into a format that can be easily transmitted or processed by the server?

  You can convert form data to JSON or URL-encoded format. Example using FormData and fetch. This sends the form in a server-friendly JSON format.

  ```javascript
  const data = Object.fromEntries(new FormData(form).entries());

  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(data)
  });
  ```

## React

- What is React.js and what are its key features?

  React.js is a JavaScript library used for building user interfaces, especially dynamic and interactive ones. It focuses on creating views in a predictable and efficient way. Its most important idea is that you build your UI out of components — small pieces that represent parts of the interface. Each component handles its own logic and rendering, which makes the entire application easier to understand and maintain.

  Another key feature is its declarative style: instead of telling the browser how to update the UI step by step, you describe what the UI should look like based on the current state, and React updates it automatically. React also uses the virtual DOM to improve performance and applies a one-way data flow, which makes state management more predictable.

- Explain the concept of virtual DOM and how it contributes to React's performance.

  The virtual DOM is an in-memory representation of the real DOM. When something changes in your application — for example, a state update — React doesn’t immediately touch the real DOM. Instead, it updates the virtual DOM first. Then it compares the new virtual DOM with the previous version in a process called diffing. Based on this comparison, React figures out the minimal number of real DOM changes necessary and applies only those.

  This selective updating makes React significantly faster because manipulating the real DOM is expensive. By limiting the number of real DOM operations, React achieves efficient rendering even in larger applications.

- Explain the component-based architecture in React.js. How do components work, and how can they be composed to build complex user interfaces?

  In React, the entire UI is built from components. A component is essentially a reusable, self-contained unit that returns a portion of the UI. Components can be small, like a button, or larger, like a form or an entire page section.

  Components can also be combined — one component can include several child components. This composition allows you to build complex interfaces in a modular way. Each component manages its own data and presentation, and because they are isolated, they can be reused across the application. This architecture makes large applications more organized, scalable, and easier to maintain.

- What is the significance of JSX in React.js? Explain how JSX combines HTML-like syntax with JavaScript code and how it is transpiled into regular JavaScript during the build process.

  JSX is a syntax extension that allows you to write HTML-like code directly inside JavaScript. While it looks like HTML, it actually compiles into JavaScript function calls. The benefit of JSX is that it creates a clear connection between the UI and the logic that controls it. You can embed JavaScript expressions directly within JSX, making it intuitive to express dynamic content.

  During the build process, tools like Babel transform JSX into plain JavaScript (typically React.createElement calls). This means JSX is only a convenience for developers, but it greatly improves readability and workflow.

- What are props in React and how are they used to pass data between components? Explain the concept of props and how they facilitate parent-child component communication.

  Props are inputs passed from a parent component to a child component. They allow information to flow downward in the component tree. A parent can configure the behavior or appearance of a child by supplying values through props.

  The key rule is that props are read-only — the child must never modify its props. Their immutability ensures predictable data flow and helps maintain React’s unidirectional architecture.

- How can you access and utilize props within a functional component in React? Explain how to extract and use props using the destructuring syntax.

  In a functional component, props arrive as the first argument. Instead of accessing them through props.name or props.age, we commonly use ES6 destructuring to extract individual values. This makes the component cleaner and easier to read. In the example name and age come directly from the props object without repeatedly referencing it.

  ```jsx
  function User({ name, age }) {
    return <p>{name} — {age}</p>;
  }
  ```

- How can you pass callback functions as props in React? Provide an example of how to pass a function from a parent component to a child component, enabling the child to communicate with the parent.

  To allow communication from a child back to its parent, the parent defines a function and passes it to the child as a prop. The child can then call that function when something important happens — like a button click or a form submission.

  This pattern is essential in React because data only moves downward, so callbacks are the mechanism that allow children to “send” information upward. When the child calls onSend(...), the parent receives the data.

  ```jsx
  <Child onSend={handleSend} />
  ```

- Explain the concept of spreading props in React. How can the spread operator be used to pass multiple props from a parent component to a child component in a concise manner?

  Spreading props is a shorthand way to pass many properties at once using the JavaScript spread operator (...). Instead of listing each prop individually, you can take an entire object and spread its fields into a component’s props. It's useful when a component needs several related values, or when you want to forward props from one component to another.
  This injects every key-value pair of userData as a separate prop.

  ```jsx
  <UserProfile {...userData} />
  ```

- Explain the concept of default props (with ES6 JS syntax) in React. How can you define default values for props in a component to handle cases where the prop value is not explicitly passed?

  Default props provide fallback values when a component does not receive a particular prop. In modern React with functional components, the most common way is to define default values directly in the destructuring pattern. This avoids undefined values and ensures your component always behaves consistently.
  In the example if the parent doesn’t pass a label, the component automatically uses "Click me".

  ```jsx
  function Button({ label = "Click me" }) {
    return <button>{label}</button>;
  }
  ```

- Explain the immutability principle when working with props and states in React. Why is it important to avoid directly modifying prop values within a component, and what are some best practices for maintaining immutability?

  React depends on immutability to detect changes efficiently. If you modify props or state directly, React may not detect that anything has changed, leading to incorrect or missing UI updates. Immutability means that instead of altering an existing object or array, you create a new one with the updated values.

  For example, instead of changing an array with push, you create a new array using [...oldArray, newItem].
  Props must never be modified, and state should only be updated with the provided state setter functions. Following immutability keeps your app predictable, avoids subtle bugs, and enables efficient re-rendering.

- How does React.js handle state management? Explain the concept of state and how it differs from props.

  In React, state represents data that can change over time and affects how a component is displayed. State is internal to the component — meaning the component owns it and can change it using functions like setState (in class components) or useState (in functional components). When state changes, React automatically re-renders the component so the UI always reflects the current data.

  Props, on the other hand, are external inputs. They come from the parent component, and the child is not allowed to modify them. State is mutable and local; props are immutable and passed down. This separation keeps React’s data flow predictable.

- What are React hooks? Explain the purpose and benefits of hooks like useState, and useEffect in React.js.

  Hooks allow functional components to use features that previously required class components. The most common hook is useState, which lets a component store and update state. Another fundamental hook is useEffect, which allows you to perform side effects — for example fetching data, updating the document title, or reacting to changes in state or props.

  The main benefit of hooks is that they make components simpler and more reusable. Instead of lifecycle methods and classes, hooks provide a much more straightforward way to manage logic and state inside functional components.

- Explain the concept of virtual DOM reconciliation in React.js. How does React efficiently update and render components by performing minimal DOM manipulations?

  Reconciliation is the process React uses to figure out how to update the UI in the most efficient way. When state or props change, React creates a new virtual DOM tree and compares it to the previous one. This comparison identifies exactly which elements changed. After determining the differences, React updates only the necessary parts of the real DOM.

  Because DOM operations are slow, minimizing them results in much faster rendering. React never re-renders the whole page; it only touches what actually changed, thanks to reconciliation.

- Explain how to manage complex state objects with useState. Explain techniques like object spreading or merging to update specific properties within an object state.

  When you store an object in state, React won’t merge updates for you. If you want to update only one field, you must create a new object that includes both the existing fields and the updated field. The usual technique is the object spread syntax.

  For example, if the state is an object like (1)
  and you want to update only the age, you would write (2)

  This creates a brand-new object, which React needs in order to detect that the state actually changed. Updating state immutably is essential for correct re-rendering.
  
  ```jsx
  const [user, setUser] = useState({ name: "Anna", age: 22 });

  setUser(prev => ({ ...prev, age: 23 }));
  ```

- Why is it important to provide a new array as an argument to the state setter function when adding an item to an existing array?

  React detects changes by checking if the reference of the state value is different. If you mutate the existing array (for example by using push), the reference stays the same — so React won’t know the data changed, and won’t re-render.

  By creating a new array, such as [...oldArray, newItem], you guarantee a new reference. This tells React: “This state has changed, update the UI.”

  So the reason is not just style — it’s how React’s rendering engine works.

- How does conditional rendering work in React? Explain the different techniques and approaches available to conditionally render components or content based on certain conditions or state values. How can it be used to control the visibility or behavior of components based on user interactions or other dynamic conditions?

  Conditional rendering means showing or hiding parts of the UI depending on certain conditions, usually based on state or props. React doesn’t have a special syntax for this — you simply use JavaScript conditions inside JSX.

  You can use logical operators (&&), ternary operators (condition ? A : B), early returns inside the component, or even separate functions that return different JSX depending on conditions.

  Conditional rendering is essential for controlling visibility, such as showing a modal only when a button is clicked, hiding UI elements based on authentication status, or rendering different content depending on user input.

- What is the difference between a controlled and uncontrolled input element in React?

  A controlled input is fully managed by React state. Its value comes from the component’s state, and every change updates the state. React is always the “single source of truth.”

  An uncontrolled input stores its own value inside the DOM, just like in plain HTML. React does not store its current value — you simply let the browser handle it. If you need the value, you read it using refs.

  Controlled inputs give you more control and make features like validation easier, while uncontrolled inputs are simpler when you don’t need tight control.

- How can you get the current input values from a form that contains uncontrolled input elements?

  When using uncontrolled inputs, the usual way to access their values is by using a ref. A ref allows you to directly reference the DOM element and read its .value property when the form is submitted.
  This is similar to how you would read input values in plain JavaScript.

  ```jsx
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }
  ```

- How can you connect a label element to an input element in React?

  In HTML you use the for attribute, but in React the attribute is called htmlFor, because for is a reserved JavaScript keyword. The htmlFor value must match the input’s id.
  This allows users to click the label to focus the input, and is important for accessibility.

  ```jsx
  <label htmlFor="email">Email:</label>
  <input id="email" />
  ```

- How can you create a select input element in React? How does it differ from the html's select tag? Can you show an example of a controlled and an uncontrolled select element with setting a default value?

  In HTML, a <select> element manages its own value.
  In React, a <select> becomes controlled if you pass a value prop and update it through state. Otherwise, it behaves as an uncontrolled element.

  ```jsx
  //Controlled select (React manages value)
  const [color, setColor] = useState("red");

  <select value={color} onChange={e => setColor(e.target.value)}>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
  </select>

  //Uncontrolled select with default value
  <select defaultValue="blue">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
  </select>
  ```

- Explain how a proxy works during React development. How can you tell the Vite dev server to proxy the requests to your backend? What kind of URLs do you have to use in the fetch in your JS code, if you want to use the proxy?

  During development, your frontend (running on something like localhost:5173) and your backend (e.g., localhost:3000) are on different ports. This causes CORS issues. A proxy solves that by routing API requests through the dev server.
  In Vite, you configure this in vite.config.js.
  This means that any request starting with /api is forwarded to the backend.
  In your JavaScript code, you must fetch using the proxied URL, not the full backend URL. So instead of: fetch("http://localhost:3000/api/users"); write: fetch("/api/users");
  The Vite dev server will forward the request to the backend for you.

  ```javascript
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
  ```

- What is the difference between statements and expressions in Javascript? Why is it important when working with JSX?

  An expression is something that produces a value (for example a + b, x * 2, condition ? A : B).
  A statement performs an action but does not produce a value (if, for, while, return, function declaration, etc.).

  In JSX, only expressions are allowed inside curly braces.
  Statements cannot go directly inside JSX.

  ```jsx
  { a + b }          // OK, expression
  { isOpen ? "Yes" : "No" }  // OK

  { if (x > 3) {} }  // ❌ invalid in JSX (statement)
  ```

## Testing Basics

- What is a test case?

  A test case is a single, specific check to see if a part of your code works correctly. It defines the input, the expected outcome, and sometimes the steps to reproduce the test. For example, testing a function that adds two numbers could be one test case: check that add(2, 3) returns 5.

- What are the advantages of writing unit tests?

  Unit tests have several advantages: they help catch bugs early, make code safer to refactor, document how functions should behave, and give confidence that changes don’t break existing features. They also encourage better code structure because code that is easy to test is usually modular and clear.

- What is an assertion? Give some examples.

  An assertion is a statement in a test that checks if a value meets a certain condition. If the assertion fails, the test fails. Assertions are the core of testing because they define the expected result.

  Examples with Vitest:

  import { expect } from 'vitest';
  ```javascript
  expect(2 + 2).toBe(4);        // exact match
  expect([1, 2]).toEqual([1, 2]); // deep equality
  expect('hello').toContain('ell'); // string contains
  ```

- What is the arrange/act/assert pattern?

  The arrange/act/assert pattern is a simple way to structure tests:

  Arrange – set up the data, objects, or state needed for the test.

  Act – perform the action you want to test (call a function, click a button, etc.).

  Assert – check that the outcome is what you expected using assertions.

  ```javascript
  import { expect, test } from 'vitest';

  test('adds two numbers', () => {
   // Arrange
   const a = 2;
   const b = 3;

    // Act
   const result = a + b;

    // Assert
   expect(result).toBe(5);
  });
  ```

- What is code coverage? Why is it used?

  Code coverage measures how much of your code is tested by unit tests. It tells you which lines, branches, or functions were executed during tests. High coverage doesn’t guarantee bug-free code, but it helps identify untested parts of your code and improves confidence in your tests.

- How do you test asynchronous code with Vitest?

  For asynchronous code (like fetch or setTimeout), you can return a Promise or use async/await in your test. Vitest waits for the Promise to resolve before checking assertions.

  ```javascript
  import { expect, test } from 'vitest';

  async function fetchData() {
   return "Hello";
  }
  test('fetchData returns Hello', async () => {
    const result = await fetchData();
    expect(result).toBe("Hello");
  });
  ```

- What is `setup` & `teardown` in Vitest?

  Setup is code that runs before a test or a group of tests, used to prepare the environment or initial data.

  Teardown is code that runs after a test or group of tests to clean up, reset data, or release resources.

  ```javascript
  import { beforeEach, afterEach, test, expect } from 'vitest';

  let counter = 0;

  beforeEach(() => {
    counter = 1; // setup
  });

  afterEach(() => {
   counter = 0; // teardown
  });

  test('counter is 1 at start', () => {
    expect(counter).toBe(1);
  });
  ```

- Give an example when you would use in Vitest's the `toBe` & `toEqual` assertions.

  toBe is used for primitive values (numbers, strings, booleans) and checks exact equality.

  toEqual is used for objects or arrays to check deep equality.

  ```javascript
  import { expect, test } from 'vitest';

  test('toBe example', () => {
   expect(2 + 3).toBe(5);  // exact primitive match
  });

  test('toEqual example', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);  // deep equality for arrays
    expect({a: 1}).toEqual({a: 1});        // deep equality for objects
  });
  ```


## Firebase Realtime Database

- What is Firebase Realtime Database? Explain the key features and advantages of the Realtime Database as a NoSQL database solution.

  Firebase Realtime Database is a cloud-hosted NoSQL database that stores data as a JSON tree and syncs changes in real time to all connected clients.

  **Key Features:**

  - Real-time updates: Data changes are instantly synced to every user
  - JSON-based NoSQL storage: Flexible, schema-less structure
  - Offline support: Data is cached and syncs when back online
  - Client-side SDKs: Works directly from web/mobile apps without a backend
  - Security rules: Fine-grained read/write access control

  **Advantages:**

  - Perfect for chat apps, live dashboards, and collaborative tools
  - Easy to set up, no servers required
  - Auto-scaling and low maintenance

- Explain the concept of storing data in a Realtime Database. How does a Realtime Database store data in a JSON tree?

  The Firebase Realtime Database stores all data as one large JSON tree, not as tables. This means your database is basically a nested JSON object, where each "node" can contain child nodes.

  **How it works:**

  - Data is organized in key–value pairs, similar to a JavaScript object
  - You structure data using paths, like `/users/123/name`
  - Each path points to a node in the JSON tree
  - Nodes can contain objects, arrays, or primitive values

- How can you access the Realtime Database with a REST API? What do the typical CRUD operations look like?

  You can access the Firebase Realtime Database through simple HTTP requests, because the database exposes a REST API. Every request targets a URL ending with `.json`.

  **CRUD Operations:**

  - **Create** - `POST /users.json` - Create with auto-ID
  - **Read** - `GET /users.json` - Read data
  - **Update** - `PATCH /users/123.json` - Partial update
  - **Replace** - `PUT /users/123.json` - Full overwrite
  - **Delete** - `DELETE /users/123.json` - Delete item

- How the Realtime Database Security Rules can help to define the structure of the stored data (validation) when the data can be read from or written to?

  Firebase Realtime Database Security Rules help with two things:

  **1. Controlling When Data Can Be Read or Written**

  You can specify who is allowed to access certain paths.

  ```json
  {
    "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
  ```

  **2. Defining the Structure of Stored Data (Validation)**

  Even though Firebase is schemaless, Security Rules can enforce:

  - Required fields
  - Data types
  - Minimum/maximum values
  - Allowed patterns

  **Example:** enforce a user object with a string `name` and a number `age` ≥ 0

  ```json
  {
    "rules": {
      "users": {
        "$uid": {
          ".write": "$uid === auth.uid",
          "name": { ".validate": "newData.isString()" },
          "age": { ".validate": "newData.isNumber() && newData.val() >= 0" }
        }
      }
    }
  }
  ```

- Why is it a problem if the data is deeply nested? What techniques can solve this issue?

  **Problem with Deeply Nested Data:**

  Why it's a problem:

  - Hard to query specific data
  - Difficult to update safely
  - Complex security rules
  - Performance issues (large downloads, slow sync)

  **Techniques to Solve:**

  - **Flatten the data structure** - Store entities in separate top-level nodes:

    ```json
    {
      "users": { "123": { "name": "Anna" } },
      "messages": { "room1": { "msg1": { "text": "Hi", "userId": "123" } } }
    }
    ```

  - **Use References / Keys Instead of Nesting** - Instead of deeply nesting objects, store **IDs or keys** to link related data. This keeps the structure flat and easier to query or update.

    **Example:**

    ```json
    "userMessages": {
      "123": {
        "room1": ["msg1", "msg2"]
      }
    }
    ```

  - **Denormalize for performance** - Duplicate small data pieces to avoid deep traversal.

  - **Structure rules around flat paths** - Simplifies `.read`, `.write`, and `.validate`.

## Firebase Authentication

- Why authentication is needed for a web application?

  Authentication is needed to verify who the user is, so the application can:

  - Protect private data
  - Secure user actions
  - Personalize the user experience (show their data, preferences, history)
  - Enforce permissions and roles (e.g., admin vs. regular user)
  - Prevent unauthorized access and attacks (impersonation, data leaks, misuse)

  In short: authentication ensures only the right user can access and modify the right data.

- What are the key functionalities of an authentication system?

  An authentication system verifies the identity of users and ensures their credentials are handled securely. It manages login, logout, and session or token creation so users can stay authenticated safely. It also connects with authorization to control what each user is allowed to access. Overall, it protects private data and prevents unauthorized access within the application.

- How does the server know that the client is successfully authenticated?

  After a successful login, the server gives the client a session ID or an authentication token (like a JWT). On every request, the client sends this token/session ID back (usually in a cookie or Authorization header). The server checks this value to confirm that the user is already authenticated and allowed to access protected resources.

- What is the difference between Authentication and Authorization?

  **Authentication** verifies who the user is, usually by checking credentials like passwords, tokens, or OAuth identities.

  **Authorization** decides what that authenticated user is allowed to do, such as which actions or resources they have permission to access.

- How can you initialize the Firebase Authentication SDK?

  To initialize Firebase Authentication, you first call `initializeApp()` with your Firebase config, then import and call `getAuth()` to get the Auth instance.

  ```javascript
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    // ... other config
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  ```

- How the Firebase Realtime Database Security Rules can enforce authorization?

  Firebase Realtime Database Security Rules enforce authorization by checking the user's authentication state before allowing access.

  **Example:** Only allow users to read/write their own data

  ```json
  {
    "rules": {
      "users": {
        "$uid": {
          ".read": "auth != null && auth.uid === $uid",
          ".write": "auth != null && auth.uid === $uid"
        }
      }
    }
  }
  ```

  This checks if the user is authenticated (`auth != null`) and if their user ID matches the path (`auth.uid === $uid`).

- What kind of different authentication providers are supported by Firebase? Can you give some examples?

  Firebase Authentication supports multiple authentication providers, allowing users to sign in using different methods:

  - **Email/Password** - Traditional signup with email and password

  - **Social Providers** - Google, Facebook, Twitter, GitHub, Apple

  - **Phone Authentication** - SMS-based verification

  - **Anonymous Authentication** - Temporary accounts without credentials (useful for guest users)

  - **Custom Authentication** - Using your own backend to generate custom tokens

## Web Applications

- Explain the concept of React Router. How does it enable client-side routing in React.js applications and facilitate the creation of multi-page-like experiences?

  React Router allows React apps to change the UI based on the URL without reloading the page, enabling true client-side routing. It maps URL paths to components, so navigating between “pages” simply swaps components on the screen. This creates a smooth, fast, multi-page-like user experience inside a single-page application.

  ```javascript
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

  function App() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }

  function Home() {
    return <h1>Home Page</h1>;
  }

  function About() {
    return <h1>About Page</h1>;
  }

  export default App;
  ```

- Why is it needed to `build` a React application? What does this build step do?

  You need to build a React application because the code you write (JSX, modern ES6+, modules) cannot run directly in the browser. The build step transforms your development code into optimized files that browsers understand.

  What the build step does:

  - Compiles JSX → plain JavaScript
  - Transpiles modern ES6+ code → browser-compatible JS
  - Bundles all files (components, CSS, images) into a few optimized files
  - Minifies and compresses the code to make it smaller and faster
  - Removes development-only code (warnings, dev tools)
  - Optimizes performance (tree-shaking, code splitting)

  Result:
  A production-ready, fast, small set of files (index.html, main.js, main.css) that you can deploy to any server.

- What is the difference between local development (using a dev server, like Vite) and production deployment?

  Dev servers are for fast development and debugging, while production deployments serve the optimized final version of your app to real users.

  **Key Differences:**

  **Local Development (Vite dev server):**

  - Used while coding
  - Hot Module Reload (HMR)
  - Unoptimized code
  - Full error messages and dev tools
  - Runs only on your machine

  **Production Deployment:**

  - Used by real users
  - Fully built & optimized code
  - Minified, fast, stable
  - No dev tools or verbose errors
  - Runs on a real server

- How can you deploy a Firebase application?

  - Install Firebase CLI - `npm install -g firebase-tools`
  - Log in - `firebase login`
  - Initialize - `firebase init`
  - Build your app (e.g., React) - `npm run build`
  - Deploy - `firebase deploy`
  - Done — your app is live on Firebase Hosting.

- What are React Contexts? Which use cases are they suitable for?

  React Context is a feature that lets you share data across many components without passing props manually through every level (prop drilling). It provides a global-like state for parts of your app.

  React Context is best for app-wide or shared state that many components need, such as:

  - Authentication state (current user, login status)
  - Theme settings (dark/light mode)
  - Language / localization
  - UI settings (sidebar open/closed, layout mode)
  - Global configuration
  - Small state management needs (not as complex as Redux)
