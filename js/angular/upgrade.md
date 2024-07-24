Migrating an Angular application from version 6 to 14 can be done in steps. While there's no single one-click upgrade, the Angular CLI provides tools to automate a significant portion of the process. Here's a general guide:

**Preparation:**

1. **Backup:** Create a full backup of your project codebase before starting the migration process. This allows you to revert if necessary.
2. **Node.js and npm:** Ensure you have the latest stable versions of Node.js and npm installed. These are essential for running the Angular CLI.

**Upgrade Steps:**

1. **Update Dependencies:** Run the following command in your terminal to update Angular dependencies to the latest compatible versions for Angular 6:

   ```bash
   npm update @angular/core @angular/cli --save
   ```

2. **Incremental Upgrades:** It's generally recommended to upgrade through minor versions rather than jumping directly to version 14. Here's the approach:

   * Use the `@angular/cli` update schematics to upgrade to the next minor version (e.g., Angular 6 to 7). Run:

     ```bash
     ng update @angular/core @angular/cli
     ```

   * Follow the on-screen prompts and address any reported breaking changes.
   * Repeat the `ng update` command for subsequent minor versions until you reach Angular 13 or later.

3. **Major Version Upgrade:** Once you're on Angular 13 or higher, the upgrade process to Angular 14 becomes smoother. Use the following command:

   ```bash
   ng update @angular/core @angular/cli @angular/compiler-cli
   ```

   This should handle most of the breaking changes and update your project to Angular 14.

**Additional Considerations:**

* **Third-party Libraries:** After each upgrade step, check for compatibility issues with third-party libraries used in your project. Update them as needed based on their compatibility with the new Angular version.
* **Manual Changes:** The update schematics might not catch all breaking changes. Be prepared to make manual code modifications based on the Angular migration guides for specific versions ([https://angular.dev/cli/update](https://angular.dev/cli/update)).
* **Testing:** Thoroughly test your application after each upgrade step to ensure everything functions as expected.

**Resources:**

* Angular Update Guide: [https://angular.dev/cli/update](https://angular.dev/cli/update)
* Upgrading Angular Project: [https://angular.dev/update-guide](https://angular.dev/update-guide)