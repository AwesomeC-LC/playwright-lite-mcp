# playwright-lite-mcp

A minimal Model Context Protocol (MCP) tool server using Playwright with only essential browser automation features.

## Supported Features

- Open page
- Click element
- Fill input
- Wait for element
- Take screenshot
- Scroll page

## Usage

To use this tool via `npx` directly from GitHub, run the following command in your terminal:

```bash
npx github:AwesomeC-LC/playwright-lite-mcp
```

When you run this command for the first time, it will automatically download the necessary Chromium browser binaries into a `pw-browsers` directory within the package itself. This is handled by Playwright's `postinstall` script, which now uses `cross-env` to set the `PLAYWRIGHT_BROWSERS_PATH` environment variable, ensuring the browsers are installed locally to the package. This makes the package more self-contained and avoids potential conflicts with globally installed browsers or permissions issues.

The `bin.js` script also sets this environment variable at runtime, so Playwright knows where to find these locally installed browsers.

**Note:** Ensure you have Node.js and npm installed on your system.
