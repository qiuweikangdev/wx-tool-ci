import { chalk } from 'zx';

export const info = (msg: string, ...args: any[]) => {
	console.log(chalk.green(`🚀 INFO: ${msg}`, ...args));
};

export const error = (msg: string, ...args: any[]) => {
	console.error(chalk.red(`🚨 ERROR: ${msg}`, ...args));
};

export const success = (msg: string, ...args: any[]) => {
	console.log(chalk.green(`🎉 SUCCESS: ${msg}`, ...args));
};

export const warn = (msg: string, ...args: any[]) => {
	console.log(chalk.yellow(`🎉 WARNING: ${msg}`, ...args));
};
