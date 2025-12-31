import * as vscode from 'vscode';

let isEnabled = false;
let decorationTypes: vscode.TextEditorDecorationType[] = [];
let statusBarItem: vscode.StatusBarItem;

// Define special characters to display
const specialChars = [
    { char: '\n', display: '\\n', description: 'Line Feed (LF)' },
    { char: '\r', display: '\\r', description: 'Carriage Return (CR)' },
    { char: '\t', display: '\\t', description: 'Tab' },
    { char: ' ', display: '␣', description: 'Space' },
    { char: '\u007F', display: '\\x7F', description: 'Delete (DEL)' },
    { char: '\u00A0', display: '\\u00A0', description: 'Non-breaking Space' },
    { char: '\u200B', display: '\\u200B', description: 'Zero Width Space' },
    { char: '\u200C', display: '\\u200C', description: 'Zero Width Non-Joiner' },
    { char: '\u200D', display: '\\u200D', description: 'Zero Width Joiner' },
    { char: '\uFEFF', display: '\\uFEFF', description: 'Zero Width No-Break Space (BOM)' }
];

export function activate(context: vscode.ExtensionContext) {
    console.log('Special Characters Viewer is now active');

    // Create status bar item
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'specialChars.toggle';
    updateStatusBar();
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    // Register toggle command
    const toggleCommand = vscode.commands.registerCommand('specialChars.toggle', () => {
        isEnabled = !isEnabled;
        updateStatusBar();
        
        if (isEnabled) {
            vscode.window.showInformationMessage('Special Characters: Enabled');
            updateDecorations();
        } else {
            vscode.window.showInformationMessage('Special Characters: Disabled');
            clearDecorations();
        }
    });

    context.subscriptions.push(toggleCommand);

    // Update decorations when active editor changes
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(editor => {
            if (isEnabled && editor) {
                updateDecorations();
            }
        })
    );

    // Update decorations when document changes
    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(event => {
            if (isEnabled && vscode.window.activeTextEditor && event.document === vscode.window.activeTextEditor.document) {
                updateDecorations();
            }
        })
    );

    // Update decorations when visible text editors change
    context.subscriptions.push(
        vscode.window.onDidChangeVisibleTextEditors(() => {
            if (isEnabled) {
                updateDecorations();
            }
        })
    );
}

function updateStatusBar() {
    if (isEnabled) {
        statusBarItem.text = "$(eye) Special Chars";
        statusBarItem.tooltip = "Special Characters: Enabled (Click to disable)";
        statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    } else {
        statusBarItem.text = "$(eye-closed) Special Chars";
        statusBarItem.tooltip = "Special Characters: Disabled (Click to enable)";
        statusBarItem.backgroundColor = undefined;
    }
}

function clearDecorations() {
    // Clear all existing decorations
    decorationTypes.forEach(decorationType => decorationType.dispose());
    decorationTypes = [];
}

function updateDecorations() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    clearDecorations();

    const text = editor.document.getText();
    
    // Create decoration types for each special character
    specialChars.forEach(({ char, display, description }) => {
        const decorationType = vscode.window.createTextEditorDecorationType({
            before: {
                contentText: display,
                color: new vscode.ThemeColor('editorWhitespace.foreground'),
                fontWeight: 'bold',
                margin: '0 2px 0 0'
            },
            textDecoration: 'none; position: relative;'
        });
        
        decorationTypes.push(decorationType);
        
        const decorations: vscode.DecorationOptions[] = [];
        
        // Find all occurrences of the special character
        let match;
        let searchIndex = 0;
        
        while (searchIndex < text.length) {
            const index = text.indexOf(char, searchIndex);
            if (index === -1) {
                break;
            }
            
            const startPos = editor.document.positionAt(index);
            const endPos = editor.document.positionAt(index + char.length);
            
            decorations.push({
                range: new vscode.Range(startPos, endPos),
                hoverMessage: description
            });
            
            searchIndex = index + char.length;
        }
        
        editor.setDecorations(decorationType, decorations);
    });
}

export function deactivate() {
    clearDecorations();
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}
