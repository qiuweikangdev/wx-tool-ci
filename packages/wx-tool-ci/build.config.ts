import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['src/index', 'src/cli'],
	failOnWarn: false,
	outDir: 'lib',
	clean: true,
	declaration: true,
	rollup: {
		emitCJS: true,
		inlineDependencies: true,
	},
});
