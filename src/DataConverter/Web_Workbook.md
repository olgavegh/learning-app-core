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
  | Function | What it does | Returns | Example use |
  | ------------ | ------------------------------------ | ---------------------------------- | --------------------------- |
  | **map()** | Transforms each element | A **new array** (same length) | Multiply all numbers by 2 |
  | **filter()** | Keeps only elements that pass a test | A **new array** (possibly shorter) | Keep only even numbers |
  | **reduce()** | Combines all elements into one value | A **single value** | Sum all numbers or find max |

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
- What is the purpose and functionality of the fetch function in JavaScript?
- Explain the syntax of the fetch function and how it handles asynchronous operations. Compare and contrast the syntax of making HTTP requests using fetch with async/await versus the syntax using .then() and .catch(). What are the key differences and benefits of using the async/await syntax in terms of code structure and readability?
- What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed.
- How can you handle the response received from a fetch request?
- How does the fetch function handle errors and handle HTTP status codes? Provide an example of using fetch to handle different types of responses, including successful and error responses.
- Explain the parts of a URL.

## Responsive Design

- What does responsive design do? Why is it important?
- What is a mobile-first approach?
- How can you test the website's appearance on different screen sizes in the browser?
- Can you give some techniques that help to fulfill the responsive design criteria?
- What do media queries do? How do they work?
- How would you define the Flexbox layout?
- How can you debug the Flexbox layout in the browser?
- What is the difference between the Flexbox container and the Flexbox item?

## Object Oriented Javascript

- What is the difference between the class syntax and the constructor function syntax?
- What does the `new` keyword do?
- What does a `constructor` method do in class syntax? When it is executed?
- What are the class methods of a class syntax?
- What are the fields of a class syntax?
- What is inheritance in the context of Javascript objects?
- What does the `extends` keyword do?

## Express

- Explain the concept of client-server communication in the context of web development. How does information flow between the client and the server in a typical client-server architecture?
- What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.
- What is Express.js and how does it simplify web application development in Node.js? Explain the core features and benefits of using Express.js as a web framework.
- What are middlewares in Express.js? Can you list some examples of the built-in middleware?
- How can you tell Express.js to use a middleware?
- Explain the process of handling static files (e.g., CSS, images) in Express.js. How can you configure Express.js to serve static assets from a specific directory in your application?
- What does the built-in JSON middleware (`express.json()`) do?
- How does Express.js handle HTTP request/response cycles? Explain the process of receiving and responding to requests using Express.js middlewares and route handlers.
- How does routing work in Express.js? Explain how to define routes and handle different HTTP methods (GET, POST, etc.) in an Express.js application.
- What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json() in Express.js.
- What is the purpose of the next() function in Express.js middleware? How can you use it to pass control to the next middleware function in the chain or to terminate the middleware processing?
- Explain the concept of route parameters in Express.js. How can you extract dynamic values from the URL path using route parameters, and how are these values accessed within route handlers?

## REST and CRUD

- Can you name some typical HTTP response codes and their meaning?
- Can you name some typical HTTP request/response headers and their meaning?
- What are the common HTTP methods used in web development, and what are their respective purposes?
- How does the GET method differ from the POST method? Explain when it is appropriate to use each method. Which one uses the request body to receive data?
- Explain the use of the PATCH method in HTTP. How does it differ from the PUT method, and when should it be used to update a resource?
- How can the DELETE method be used to remove a resource from a server? Explain how the DELETE method works and any considerations for handling resource deletion.
- What does the REST architecture mean? What are the REST Constraints?
- What does a URL's path represent in a REST architecture? Show an example of the `recipe` resource's CRUD operations. Define the HTTP method and a corresponding path for each CRUD operation.
- How do you handle form submissions using JavaScript? Explain the process of capturing form data and preventing the default form submission behavior.
- Explain the required elements necessary to define a form in HTML.
- What is the purpose of the required attribute in HTML form elements? How does it enforce mandatory input fields and prevent form submission without the required information?
- Explain the different types of form input fields available in HTML. How do input types like text, number, email, checkbox, and radio buttons differ, and how are they used in forms?
- Can you explain the purpose of the name attribute in the context of form submission?
- Can you explain how we can connect a label tag to a form element?
- How can you dynamically manipulate or modify form elements using JavaScript? Explain how to add or remove form fields dynamically based on user interaction or specific conditions.
- How can you convert form data into a format that can be easily transmitted or processed by the server?

## React

- What is React.js and what are its key features?
- Explain the concept of virtual DOM and how it contributes to React's performance.
- Explain the component-based architecture in React.js. How do components work, and how can they be composed to build complex user interfaces?
- What is the significance of JSX in React.js? Explain how JSX combines HTML-like syntax with JavaScript code and how it is transpiled into regular JavaScript during the build process.
- What are props in React and how are they used to pass data between components? Explain the concept of props and how they facilitate parent-child component communication.
- How can you access and utilize props within a functional component in React? Explain how to extract and use props using the destructuring syntax.
- How can you pass callback functions as props in React? Provide an example of how to pass a function from a parent component to a child component, enabling the child to communicate with the parent.
- Explain the concept of spreading props in React. How can the spread operator be used to pass multiple props from a parent component to a child component in a concise manner?
- Explain the concept of default props (with ES6 JS syntax) in React. How can you define default values for props in a component to handle cases where the prop value is not explicitly passed?
- Explain the immutability principle when working with props and states in React. Why is it important to avoid directly modifying prop values within a component, and what are some best practices for maintaining immutability?
- How does React.js handle state management? Explain the concept of state and how it differs from props.
- What are React hooks? Explain the purpose and benefits of hooks like useState, and useEffect in React.js.
- Explain the concept of virtual DOM reconciliation in React.js. How does React efficiently update and render components by performing minimal DOM manipulations?
- Explain how to manage complex state objects with useState. Explain techniques like object spreading or merging to update specific properties within an object state.
- Why is it important to provide a new array as an argument to the state setter function when adding an item to an existing array?
- How does conditional rendering work in React? Explain the different techniques and approaches available to conditionally render components or content based on certain conditions or state values. How can it be used to control the visibility or behavior of components based on user interactions or other dynamic conditions?
- What is the difference between a controlled and uncontrolled input element in React?
- How can you get the current input values from a form that contains uncontrolled input elements?
- How can you connect a label element to an input element in React?
- How can you create a select input element in React? How does it differ from the html's select tag? Can you show an example of a controlled and an uncontrolled select element with setting a default value?
- Explain how a proxy works during React development. How can you tell the Vite dev server to proxy the requests to your backend? What kind of URLs do you have to use in the fetch in your JS code, if you want to use the proxy?
- What is the difference between statements and expressions in Javascript? Why is it important when working with JSX?

## Testing Basics

- What is a test case?
- What are the advantages of writing unit tests?
- What is an assertion? Give some examples.
- What is the arrange/act/assert pattern?
- What is code coverage? Why is it used?
- How do you test asynchronous code with Vitest?
- What is `setup` & `teardown` in Vitest?
- Give an example when you would use in Vitest's the `toBe` & `toEqual` assertions.

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
