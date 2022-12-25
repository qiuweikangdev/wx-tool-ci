import { cac } from 'cac';
import { $ } from 'zx';

const { options } = cac().parse();
// version:  major、minor、 patch
const { version } = options;
await $`pnpm build`;
await $`pnpm exec release-it ${version}`;
