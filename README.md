# Special Characters Viewer

A VS Code extension that reveals invisible special characters in your files, making it easy to spot newlines, tabs, spaces, and other hidden characters.

## Features

- **Toggle Special Characters**: Show/hide special characters with a single command
- **Visual Indicators**: Each special character is displayed with a unique symbol
- **Status Bar Integration**: Quick toggle from the status bar
- **Keyboard Shortcut**: Use `Ctrl+Shift+Alt+S` (or `Cmd+Shift+Alt+S` on Mac) to toggle
- **Real-time Updates**: Decorations update as you type

### Supported Special Characters

- **Line Feed (LF)**: `\n` → ↵
- **Carriage Return (CR)**: `\r` → ←
- **Tab**: `\t` → →
- **Space**: ` ` → ·
- **Non-breaking Space**: `\u00A0` → °
- **Zero Width Space**: `\u200B` → ‌
- **Zero Width Non-Joiner**: `\u200C` → ‍
- **Zero Width Joiner**: `\u200D` → ‍
- **Zero Width No-Break Space (BOM)**: `\uFEFF` → ⁠

## Usage

### Activating the Extension

1. **Via Command Palette**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Toggle Special Characters"
   - Press Enter

2. **Via Keyboard Shortcut**:
   - Press `Ctrl+Shift+Alt+S` (or `Cmd+Shift+Alt+S` on Mac)

3. **Via Status Bar**:
   - Click the eye icon in the status bar (bottom right)

### Understanding the Display

When enabled, special characters will be displayed with visual indicators:
- The symbols appear before the actual character
- Hover over a symbol to see its description
- The status bar icon changes to indicate the current state

## Installation

### From Source

1. Clone this repository
2. Run `npm install` to install dependencies
3. Press `F5` to open a new VS Code window with the extension loaded
4. Test the extension by creating a file with special characters

### Building the Extension

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes
npm run watch

# Package the extension
vsce package
```

## Development

### Project Structure

```
special-characters-viewer/
├── src/
│   └── extension.ts      # Main extension logic
├── .vscode/
│   ├── launch.json       # Debug configuration
│   └── tasks.json        # Build tasks
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

### Testing the Extension

1. Press `F5` to open a new Extension Development Host window
2. Create or open a file with special characters
3. Toggle the special characters view using the command or keyboard shortcut
4. Verify that the characters are displayed correctly

## Requirements

- Visual Studio Code version 1.85.0 or higher

## Extension Settings

Currently, this extension does not add any VS Code settings. Future versions may include:
- Customizable character symbols
- Color customization
- Character-specific enable/disable options

## Known Issues

- Performance may be affected on very large files with many special characters
- Some zero-width characters may not be visible depending on the font

## Release Notes

### 0.0.1

Initial release:
- Toggle special characters visibility
- Support for common invisible characters
- Status bar integration
- Keyboard shortcut support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

---

**Enjoy revealing those hidden characters!** 👁️
