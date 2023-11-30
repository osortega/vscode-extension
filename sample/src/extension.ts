import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('sample.helloWorld', () => {
		const filePath = '/workspaces/vscode-extension/.devcontainer/devcontainer.json';
		const fileUri = vscode.Uri.parse(`vscode-remote://${filePath}`);
		vscode.window.showTextDocument(fileUri)
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
