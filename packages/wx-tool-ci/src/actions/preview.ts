import { mergeConfig } from './../config';
import { error } from './../utils/logger';
import { getCiConfig } from './../utils';
import BaseCi from '../utils/baseCi';
// 预览
export const preview = async () => {
	try {
		const ciConfig = await getCiConfig();
		const newConfig = mergeConfig(ciConfig);
		const CI = new BaseCi(newConfig);
		await CI.preview();
	} catch (e) {
		error('预览失败', e);
	}
};
