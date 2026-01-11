// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "GhostScript" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand("GhostScript.helloWorld", () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from @beanthealien/ghostscript-vsc!');
	});

	const hoverProvider = vscode.languages.registerHoverProvider("GhostScript", {
		provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range);
			if(word === "someword") {
				const tooltip = new vscode.MarkdownString(`**Tooltip**: hello`);
				return new vscode.Hover(tooltip, range);
			}
			return undefined;
		}
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(hoverProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// vscode.languages.createDiagnosticCollection
/**
 * // Register the Hover Provider for your custom language
    let hoverProvider = vscode.languages.registerHoverProvider('yourCustomLanguageId', {
        provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
            
            // Get the word at the current cursor position
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            // Check if the hovered word matches a specific condition
            if (word === 'customKeyword') {
                // Return a new Hover object with the custom tooltip content
                const tooltipContent = new vscode.MarkdownString(`**Custom Tooltip:** This is the description for \`${word}\`. You can use Markdown here.`);
                return new vscode.Hover(tooltipContent, range);
            }

            // If no specific tooltip is needed, return undefined
            return undefined;
        }
    });

    // Add the provider to the extension's subscriptions to be disposed of when the extension is deactivated
    context.subscriptions.push(hoverProvider);
 */