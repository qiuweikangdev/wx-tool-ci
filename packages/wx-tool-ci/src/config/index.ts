import { getPath, getVersion } from '../utils';
import { CiConfigOptions, CiOptions, ConfigType } from '../types';

const defaultConfig: ConfigType = {
	name: 'wx-tool',
	file: 'ci.config.js',
	type: 'miniProgram',
	ignores: [
		'node_modules/**/*',
		'README.md',
		'yarn.lock',
		'package-lock.json',
		'pnpm-lock.yaml',
	],
};

export const mergeConfig = (config: CiConfigOptions): CiOptions => {
	const {
		projectPath,
		appid,
		privateKeyPath,
		version,
		setting,
		type = defaultConfig.type,
		projectOptions: project = {},
		uploadOptions: upload = {},
		previewOptions: preview = {},
	} = config || {};

	const projectOptions = {
		projectPath,
		appid,
		privateKeyPath,
		type,
		ignores: defaultConfig.ignores,
		...project,
	};

	const commonConfig = {
		version: version || getVersion(getPath('package.json')),
		setting,
	};

	const uploadOptions = {
		...commonConfig,
		...upload,
	};
	const previewOptions = {
		...commonConfig,
		...preview,
	};
	return {
		projectOptions,
		uploadOptions,
		previewOptions,
	};
};

export default defaultConfig;
