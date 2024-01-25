import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('sample.helloWorld', () => {
		const gitExtension = vscode.extensions.getExtension('vscode.git');
		const git = gitExtension?.exports;
		const gitAPI = git.getAPI(1);
		console.log(gitAPI.state);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
