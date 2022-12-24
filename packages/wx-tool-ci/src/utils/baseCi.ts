import ci, { Project } from 'miniprogram-ci';
import { info, success } from './logger';
import { CiOptions } from '../types';

class BaseCi {
	private project?: Project;
	private options: CiOptions;
	constructor(options: CiOptions) {
		this.options = options;
		this.init();
	}

	init() {
		this.project = new ci.Project(this.options.projectOptions);
	}

	async upload() {
		info('正在上传中...');
		if (this.project) {
			await ci.upload({
				project: this.project,
				...this.options.uploadOptions,
			});
			success('上传成功!');
		} else {
			throw new Error('未初始化项目');
		}
	}

	async preview() {
		info('正在预览中...');
		if (this.project) {
			await ci.preview({
				project: this.project,
				...this.options.previewOptions,
			});
			success('预览成功!');
		} else {
			throw new Error('未初始化项目');
		}
	}
}

export default BaseCi;
