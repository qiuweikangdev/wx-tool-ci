import { cac } from 'cac';
import { $ } from 'zx';

const { options } = cac().parse();
const { version } = options;
$`pnpm exec release-it ${version}`;
