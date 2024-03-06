"Live Cricket Score Chrome Extension":

## Project Overview

The "Live Cricket Score Chrome Extension" is a simple Chrome extension that fetches and displays live cricket match scores using the CricAPI. It provides a convenient way for users to stay updated with the latest scores of ongoing cricket matches directly from their browser.

## Files

The project consists of the following files:

1. **index.html**: This is the main HTML file that serves as the user interface for the extension. It includes a link to the CSS file for styling and a script tag to include the JavaScript file.

2. **manifest.json**: This is the manifest file required for Chrome extensions. It contains metadata about the extension, such as its name, version, description, and the entry point (index.html).

3. **script.js**: This JavaScript file contains the main logic for fetching live cricket match data from the CricAPI and rendering it on the extension's user interface.

4. **style.css**: This CSS file defines the styling rules for the extension's user interface, such as font, colors, and layout.

## How it Works

1. When the extension is loaded, the `getMatchData` function from `script.js` is called.

2. The `getMatchData` function makes an asynchronous fetch request to the CricAPI endpoint (`https://api.cricapi.com/v1/cricScore`) with the provided API key.

3. The response from the API is filtered to include only matches with the status "live".

4. The filtered match data is mapped to a string format containing the match status, team names, and respective scores.

5. The formatted match data is then rendered as an unordered list (`<ul>`) in the `#matches` element on the `index.html` page.

6. The `style.css` file provides styling rules for the extension's user interface, including the body element's background color, font family, size, and layout.

## Usage

To use the "Live Cricket Score Chrome Extension," follow these steps:

1. Load the extension in your Chrome browser by navigating to `chrome://extensions/` and enabling the "Developer mode".

2. Click on "Load unpacked" and select the project directory containing the extension files.

3. Once the extension is loaded, you should see its icon in the Chrome toolbar.

4. Click on the extension icon to open the popup window displaying the live cricket match scores.

Note: The extension fetches data from the CricAPI, which requires an API key. Make sure to replace the API key in the `script.js` file with a valid one to ensure the extension functions correctly.

That's it! With the "Live Cricket Score Chrome Extension," you can easily stay updated with the latest cricket match scores without leaving your browser.
