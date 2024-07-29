In the `manifest.json` file of a Chrome extension, background and content scripts are defined using specific keys that tell Chrome how to load and use these scripts. Here’s how you can define each:

### Background Scripts

Background scripts are JavaScript files that run in the background and handle events or perform tasks that don’t require direct user interaction. They are defined under the `background` key in the `manifest.json` file.

#### For Manifest V2

In Manifest V2, you define background scripts using the `background` key with an object specifying the `scripts` array:

```json
{
  "manifest_version": 2,
  "name": "Example Extension",
  "version": "1.0",
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  }
}
```

- **`scripts`**: An array of paths to JavaScript files that act as background scripts.
- **`persistent`** (optional): Determines whether the background script should remain loaded in the background at all times. If `false`, the script uses an event page, which only stays active when needed.

#### For Manifest V3

In Manifest V3, background scripts are defined differently, using the `background` key with an object specifying `service_worker`:

```json
{
  "manifest_version": 3,
  "name": "Example Extension",
  "version": "1.0",
  "background": {
    "service_worker": "background.js"
  }
}
```

- **`service_worker`**: Specifies the path to the service worker script that handles background tasks. Service workers are used in place of the persistent background pages of Manifest V2.

### Content Scripts

Content scripts are JavaScript files that run in the context of web pages. They are defined under the `content_scripts` key in the `manifest.json` file.

#### For Both Manifest V2 and V3

You define content scripts using the `content_scripts` key with an object specifying `matches` and `js` arrays:

```json
{
  "manifest_version": 2,
  "name": "Example Extension",
  "version": "1.0",
  "content_scripts": [
    {
      "matches": ["*://*.example.com/*"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ]
}
```

- **`matches`**: An array of URL patterns specifying which pages the content script should be injected into. Wildcards can be used for pattern matching.
- **`js`**: An array of paths to JavaScript files that will be injected into the matching pages.
- **`run_at`** (optional): Specifies when the content script should be injected. Possible values include:
  - `"document_start"`: Injects the script as soon as the document starts loading.
  - `"document_end"`: Injects the script after the document has finished loading.
  - `"document_idle"`: Injects the script after the document has been loaded and there is no ongoing activity.

### Summary

- **Background Scripts**: Defined with the `background` key. In Manifest V2, use the `scripts` array and optionally set `persistent`. In Manifest V3, use `service_worker`.
- **Content Scripts**: Defined with the `content_scripts` key. Specify `matches` for URL patterns, `js` for the script files, and optionally `run_at` for injection timing.

These configurations allow you to control how and when your scripts are loaded and executed, enabling the desired functionality for your Chrome extension.