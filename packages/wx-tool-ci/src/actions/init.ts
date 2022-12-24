import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { fs, path } from 'zx';
import { getPath } from '../utils';
import config from '../config';
import { success } from '../utils/logger';
/**
 * 初始化配置文件
 */
export const init = async () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const templateRoot = path.resolve(__dirname, '..', config.file);
	fs.copySync(templateRoot, getPath(config.file));
	success('已初始化配置成功!');
};
