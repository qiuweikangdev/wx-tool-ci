import { mergeConfig } from './../config/index';
import { error } from './../utils/logger';
import { getCiConfig } from './../utils/index';
import BaseCi from '../utils/baseCi';
// 上传
export const upload = async () => {
	try {
		const ciConfig = await getCiConfig();
		const newConfig = mergeConfig(ciConfig);
		const CI = new BaseCi(newConfig);
		await CI.upload();
	} catch (e) {
		error('上传失败', e);
	}
};
