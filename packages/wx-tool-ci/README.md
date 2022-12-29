# 小程序 ci 自动化工具

- 基于miniprogram-ci插件开发的小程序上传、预览自动化工具

## 安装

使用npm:

```bash
npm i wx-tool-ci --save-dev
```

使用yarn:

```bash
yarn add wx-tool-ci -D
```

使用pnpm

```bash
pnpm install wx-tool-ci -D
```

也可全局安装【推荐】

```bash
npm install wx-tool-ci -g
```



## 使用

### 初始化生成配置文件

- 简写i

```bash
wx-tool init
```

### 上传

- 简写u

```bash
wx-tool upload
```

### 预览

- 简写p

```bash
wx-tool preview
```



## 配置说明

具体配置详情：查看[miniprogram-ci](https://www.npmjs.com/package/miniprogram-ci)官方文档

**ci.config.js配置**

| 参数             | 描述                                                         | 类型   | 必传 | 默认值        |
| ---------------- | ------------------------------------------------------------ | ------ | ---- | ------------- |
| `appid`          | 小程序appid                                                  | string | 是   |               |
| `type`           | 显示指明当前的项目类型                                       | string | 是   | `miniProgram` |
| `projectPath`    | 小程序生成目录                                               | string | 是   | `dist`        |
| `privateKeyPath` | 小程序钥匙目录【应访问"微信公众平台-开发 - 开发设置"后下载代码上传密钥】 | string | 否   |               |
| `setting`        | 编译设置                                                     | object | 否   |               |
| `version`        | 小程序版本号 【如果未指定,默认取当前项目中的package.json的version,version默认1.0.0】 | object | 否   |               |
| `projectOptions` | 项目的自定义配置，和上面配置合并                             | object | 否   |               |
| `uploadOptions`  | 上传的自定义配置                                             | object | 否   |               |
| `previewOptions` | 预览自定义配置                                               | object | 否   |               |
| `beforeCommand`  | 上传前执行脚本, 如上传之前进行打包 [{ command: 'pnpm build',desc: '打包'}] | array  | 否   |               |
| `afterCommand`   | 上传之后执行脚本                                             | array  | 否   |               |

默认配置表如下:

```js
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
		// 上传时压缩 JS 代码
		minifyJS: false,
		// 上传时压缩 WXML 代码
		minifyWXML: false,
		// 上传时压缩 WXSS 代码
		minifyWXSS: false,
		// 上传时压缩所有代码，对应于微信开发者工具的 "上传时压缩代码"
		minify: true,
		// 对应于微信开发者工具的 "上传时进行代码保护"
		codeProtect: false,
		// 对应于微信开发者工具的 "上传时样式自动补全"
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
		qrcodeOutputDest: '/preview/destination.jpg',
	},
	/**
	 *  上传前执行脚本, 如上传之前进行打包
	 *  [{ command: 'pnpm build',desc: '打包'}]
	 */
	beforeCommand: [],
	// 上传之后执行脚本
	afterCommand: [],
};
```

