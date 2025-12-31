# Special Characters Viewer

**Reveal invisible characters in your code - spot newlines, tabs, spaces, and hidden Unicode characters instantly!**

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/joshivilas.special-characters-viewer)](https://marketplace.visualstudio.com/items?itemName=joshivilas.special-characters-viewer)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/joshivilas.special-characters-viewer)](https://marketplace.visualstudio.com/items?itemName=joshivilas.special-characters-viewer)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/joshivilas.special-characters-viewer)](https://marketplace.visualstudio.com/items?itemName=joshivilas.special-characters-viewer)

## ✨ Features

- 🔍 **Toggle Visibility** - Show/hide special characters with one click or keyboard shortcut
- 📝 **Escape Sequence Notation** - Displays characters using standard notation (`\n`, `\t`, `\r`, etc.)
- 🎯 **9 Special Characters Supported** - Including newlines, tabs, spaces, and zero-width Unicode characters
- 🚀 **Real-time Updates** - See characters appear as you type
- 💡 **Hover Tooltips** - Get detailed descriptions of each character
- 📊 **Status Bar Integration** - Quick access via status bar indicator
- ⌨️ **Keyboard Shortcut** - `Ctrl+Shift+Alt+S` (Windows/Linux) or `Cmd+Shift+Alt+S` (Mac)

## 🎬 Demo

> **Tip**: Perfect for debugging line ending issues, finding hidden Unicode characters, or understanding file formatting!

## 📋 Supported Characters

| Character | Display | Code | Description |
|-----------|---------|------|-------------|
| Line Feed | `\n` | U+000A | Standard Unix/Linux line ending |
| Carriage Return | `\r` | U+000D | Classic Mac line ending component |
| Tab | `\t` | U+0009 | Horizontal tab character |
| Space | `␣` | U+0020 | Regular space |
| Delete | `\x7F` | U+007F | Delete control character |
| Non-breaking Space | `\u00A0` | U+00A0 | Space that prevents line breaks |
| Zero Width Space | `\u200B` | U+200B | Invisible space for word breaking |
| Zero Width Non-Joiner | `\u200C` | U+200C | Prevents character joining |
| Zero Width Joiner | `\u200D` | U+200D | Forces character joining |
| Byte Order Mark (BOM) | `\uFEFF` | U+FEFF | Zero-width no-break space |

## 🚀 Getting Started

### Installation

1. Open VS Code
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Type `ext install joshivilas.special-characters-viewer`
4. Press Enter

Or search for "Special Characters Viewer" in the Extensions view (`Ctrl+Shift+X`).

### Usage

**Method 1: Command Palette**
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Toggle Special Characters"
3. Press Enter

**Method 2: Keyboard Shortcut**
- Windows/Linux: `Ctrl+Shift+Alt+S`
- Mac: `Cmd+Shift+Alt+S`

**Method 3: Status Bar**
- Click the 👁️ icon in the bottom-right status bar

When enabled, the status bar icon will highlight, and special characters will be displayed inline in your document.

## 🎯 Use Cases

- **Line Ending Issues**: Quickly spot mixed `\r\n` (Windows) vs `\n` (Unix) line endings
- **Tab vs Spaces**: Identify inconsistent indentation in your code
- **Unicode Debugging**: Find invisible zero-width characters that break rendering
- **File Format Analysis**: Understand text encoding and formatting
- **Code Review**: Catch whitespace issues before commit
- **Data Cleaning**: Identify problematic characters in text files

## ⚙️ Requirements

- Visual Studio Code version 1.85.0 or higher

## 🔧 Extension Settings

This extension currently works out of the box with no configuration needed.

**Future Settings (Planned)**:
- Customize display symbols
- Choose which characters to show/hide
- Color customization
- Font size adjustment

## 📝 Release Notes

### 0.0.1 (Initial Release)

- ✅ Toggle special characters visibility
- ✅ Support for 9 common invisible characters
- ✅ Escape sequence notation display
- ✅ Status bar integration
- ✅ Keyboard shortcut support
- ✅ Real-time document updates
- ✅ Hover tooltips with descriptions

## 🐛 Known Issues

- Performance may be impacted on very large files (10,000+ lines)
- Some fonts may not render zero-width character indicators clearly

## 🤝 Contributing

Found a bug or have a feature request? Contributions are welcome!

- **Issues**: [Report a bug or request a feature](https://github.com/joshivilas/special-characters-viewer/issues)
- **Pull Requests**: [Contribute code](https://github.com/joshivilas/special-characters-viewer/pulls)

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

Built with ❤️ using the VS Code Extension API

---

**Happy debugging! 🎉** If you find this extension helpful, please consider leaving a ⭐ rating on the marketplace!

[Report Issues](https://github.com/joshivilas/special-characters-viewer/issues) | [Request Features](https://github.com/joshivilas/special-characters-viewer/issues) | [View Source](https://github.com/joshivilas/special-characters-viewer)
