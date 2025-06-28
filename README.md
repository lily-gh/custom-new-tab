
# Custom New Tab Extension

A browser extension that allows you to set any URL (including local file URLs) as your new tab page.

## Features

- Set any web URL as your new tab page
- Support for local file URLs (`file:///` protocol)
- Works with Chrome, Edge, and Firefox
- Clean and intuitive user interface

## Installation

### Edge/Chrome

1. Download or clone this repository
2. Open Edge/Chrome and navigate to `edge://extensions` or `chrome://extensions` 
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked" and select the extension directory (not the firefox folder)
5. The extension should now be installed and active


## Usage

1. Click on the extension icon in your browser's toolbar
2. Enter the URL you want to use for new tabs
3. Click "Save"
4. Open a new tab to see your custom page

### Examples of valid URLs:

- Web URLs: `https://example.com`
- Local files (Windows): `file:///C:/path/to/file.html`
- Local files (WSL): `file://///wsl.localhost/Ubuntu-22.04/path/to/file.html`
- Local files (macOS): `file:///Users/username/path/to/file.html`

## Notes

- For local file URLs to work, you may need to enable "Allow access to file URLs" in your browser's extension settings
