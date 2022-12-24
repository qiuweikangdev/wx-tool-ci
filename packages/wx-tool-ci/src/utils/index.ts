import { fs, globby } from 'zx';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import config from '../config';
import { error, warn } from './logger';

// 获取路径
export const getPath = (path: string) => resolve(process.cwd(), path);

// 获取配置
export const getCiConfig = async () => {
	let fileNameTemp = '';
	const ciPath = getPath(config.file);
	const files = await globby.globby(config.file, {
		cwd: process.cwd(),
		ignore: ['node_modules'],
	});
	try {
		if (!files.length) {
			throw new Error(
				`未初始化配置文件,请执行${config.name} init 生成配置文件`,
			);
		}
		// 统一用 esm 处理
		if (!/\.mjs$/.test(ciPath)) {
			const fileBase = `${ciPath}.timestamp-${Date.now()}`;
			fileNameTemp = `${fileBase}.mjs`;
			const fileUrl = pathToFileURL(fileNameTemp).href;
			const code = fs.readFileSync(ciPath, 'utf8');
			fs.writeFileSync(fileNameTemp, code, 'utf8');
			const ciConfig = await import(fileUrl);
			return ciConfig.default;
		}
	} catch (e: any) {
		error('加载ci.config.js失败,或未指定可用的配置文件', e);
	} finally {
		if (fileNameTemp) {
			fs.unlinkSync(fileNameTemp);
		}
	}
};

// 获取版本
export const getVersion = (packageJsonPath: string) => {
	let version = '1.0.0';
	try {
		const json = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
		version = json.version;
	} catch (e) {
		warn(
			'未设置 version , 并且未设置 package.json 路径，无法读取 version,默认使用 1.0.0',
			e,
		);
	}
	return version;
};
