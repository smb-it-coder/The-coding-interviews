Node.js utilizes the `child_process` module to manage child processes. This module provides functionalities to spawn, control, and interact with new processes independent of the main Node.js process.

There are three main methods for creating child processes:

1. **spawn()** - This offers the most flexibility for creating child processes. It allows you to specify the executable, arguments, and options for how the process should be spawned.

2. **exec()** - This simplifies process creation by taking a single argument as a shell command to execute. It buffers the entire output of the command before returning control to the main process.

3. **fork()** - This is a special method for creating new Node.js processes. It's similar to `spawn()` but offers an additional communication channel between the parent and child process. This is useful for scenarios where you want to share data or functionality between the processes.

Here's an example of using `spawn()` to execute a system command (like `ls`) to list the contents of a directory:

```javascript
const { spawn } = require('child_process');

const ls = spawn('ls', ['-l']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

**Common Use Cases for Child Processes:**

* **CPU-intensive tasks:**  Node.js is single-threaded, so performing CPU-bound tasks in the main process can block the event loop. Offloading such tasks to child processes helps maintain responsiveness in the main application.
* **I/O-bound tasks:** Similar to CPU-bound tasks, intensive I/O operations can block the event loop. Child processes can handle these tasks without affecting the main thread.
* **External tools integration:**  You can leverage child processes to execute external tools or system commands that are not natively supported by Node.js but might be required for specific functionalities.
* **Microservices architecture:** In a microservices architecture, child processes can be used to spawn independent microservices that communicate with each other for modularity and scalability.