export default {
	// 小程序appid
	appid: '',
	// 显示指明当前的项目类型
	type: 'miniProgram',
	//小程序生成目录
	projectPath: 'dist',
	/**
	 * 小程序钥匙目录
	 * 使用 miniprogram-ci 前应访问"微信公众平台-开发 - 开发设置"后下载代码上传密钥
	 */
	privateKeyPath: '',
	// 编译设置
	setting: {
		es6: true,
		es7: false,
		//上传时压缩 JS 代码
		minifyJS: false,
		//上传时压缩 WXML 代码
		minifyWXML: false,
		//上传时压缩 WXSS 代码
		minifyWXSS: false,
		//上传时压缩所有代码，对应于微信开发者工具的 "上传时压缩代码"
		minify: true,
		//对应于微信开发者工具的 "上传时进行代码保护"
		codeProtect: false,
		//对应于微信开发者工具的 "上传时样式自动补全"
		autoPrefixWXSS: false,
	},
	// 小程序版本号, 如果未指定,默认取当前项目中的package.json的version,version默认1.0.0
	version: '',
	// 项目的自定义配置，和上面配置合并
	projectOptions: {},
	// 上传的自定义配置
	uploadOptions: {
		version: '',
		desc: '',
		// 编译设置
		setting: {
			es6: true,
		},
	},
	// 预览自定义配置
	previewOptions: {
		// 预览二维码文件保存路径
		qrcodeOutputDest: '/path/to/qrcode/file/destination.jpg',
	},
	/**
	 *  上传前执行脚本, 如上传之前进行打包
	 *  [{ command: 'pnpm build',desc: '打包'}]
	 */
	beforeCommand: [{ command: 'pnpm build', desc: '打包' }],
	// 上传之后执行脚本
	// afterCommand: [],
};
