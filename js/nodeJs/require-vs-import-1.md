In Node.js, `require` and `import` serve similar purposes but have key differences in how they work and when they are used:

1. **`require`**:
   - **Usage**: Used in CommonJS modules, which are the default module system in Node.js prior to ECMAScript 6 (ES6).
   - **Syntax**: `const module = require('module');`
   - **Dynamic Loading**: Modules are loaded synchronously, meaning they are loaded and executed one by one as the script runs.
   - **Module Resolution**: Searches for modules relative to the current file's directory (`./`) or in the `node_modules` directory.
   - **Default Export**: To import a default export using `require`, you typically assign it directly to a variable (`const module = require('module');`).

2. **`import`**:
   - **Usage**: Used in ES6 (ECMAScript 6) modules, which Node.js began supporting fully from version 13 onwards with experimental support before that.
   - **Syntax**: `import module from 'module';` or `import { namedExport } from 'module';`
   - **Static Analysis**: Modules are loaded asynchronously and evaluated at compile time, which allows for better tree-shaking (removal of unused code).
   - **Module Resolution**: Uses a more versatile module resolution algorithm, including paths like `node_modules` and the use of file extensions (`.js`, `.mjs`, `.cjs`).
   - **Named Exports**: Supports named exports (`import { namedExport } from 'module';`) and default exports (`import module from 'module';`).
   - **`import()` function**: Allows dynamic module imports, which can be used within async functions or anywhere a Promise can be used.

**Key Differences**:

- **Syntax**: `require` uses a function-like syntax (`require('module')`), whereas `import` uses a declarative syntax (`import module from 'module';` or `import { namedExport } from 'module';`).

- **Module System**: `require` is part of CommonJS modules, while `import` is part of ES6 modules.

- **Loading Mechanism**: `require` loads modules synchronously, while `import` loads modules asynchronously.

- **Usage in Node.js**: Node.js traditionally used `require` for module loading before adopting support for `import` with ES6 modules.

**Compatibility and Migration**: Node.js allows both `require` and `import` syntax to coexist to support both module systems. However, mixing them within the same file can lead to syntax errors. To use `import` in Node.js effectively, ensure your module is `.mjs` or `.js` files with `"type": "module"` in `package.json`, or use the `.cjs` extension.

In summary, while `require` and `import` achieve similar goals of module loading in Node.js, `require` is synchronous and part of CommonJS modules, whereas `import` is asynchronous, part of ES6 modules, and provides more features like named exports and dynamic imports.