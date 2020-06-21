import * as vscode from 'vscode';

import { v4 as uuidv4 } from 'uuid';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('iwantguids.insertguid', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const selection = editor.selection;

			let guid = uuidv4();

			editor.edit(editBuilder => {
				editBuilder.replace(selection, guid);
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
