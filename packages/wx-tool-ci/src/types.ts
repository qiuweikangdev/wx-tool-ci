import { ICreateProjectOptions } from 'miniprogram-ci/dist/@types/ci/project';
import { IInnerUploadOptions } from 'miniprogram-ci/dist/@types/ci/upload';

export type PreviewOptions = IInnerUploadOptions & {
	test?: true;
};

export type CiConfigOptions = ICreateProjectOptions &
	IInnerUploadOptions &
	CiOptions;

export type ActionOptions<T> = Partial<T> & {
	version: string;
};

export type CiOptions = {
	projectOptions: ICreateProjectOptions;
	uploadOptions: ActionOptions<IInnerUploadOptions>;
	previewOptions: ActionOptions<PreviewOptions>;
};

export type ConfigType = Pick<CiConfigOptions, 'type' | 'ignores'> & {
	name: string;
	file: string;
};
