import { cac } from 'cac';
import { init, upload, preview } from './actions';
import { name } from '../package.json';

const cli = cac(name);

cli.command('init', '初始化项目').alias('i').action(init);
cli.command('upload', '上传项目').alias('u').action(upload);
cli.command('preview', '预览项目').alias('p').action(preview);

cli.help();
cli.parse();
