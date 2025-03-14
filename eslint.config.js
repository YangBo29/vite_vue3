import globals from 'globals';
import pluginJs from '@eslint/js';
// import tseslint from "typescript-eslint";
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            ecmaVersion: 12, // 使用最新的 ECMAScript 语法
            sourceType: 'module', // 代码是 ECMAScript 模块
            parser: vueParser,
        },
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    // ...tseslint.configs.recommended,
    // {
    //     files: ["**/*.vue"],
    //     languageOptions: {
    //         parserOptions: {
    //             parser: tseslint.parser
    //         }
    //     }
    // },
    {
        rules: {
            indent: ['off', 2], // 缩进使用 2 个空格
            'linebreak-style': ['error', 'windows'], // 使用 Unix 风格的换行符
            quotes: ['error', 'single'], // 使用单引号
            semi: ['error', 'always'], // 语句末尾不加分号
            eqeqeq: 1, // 严格比对警告
            'one-var': 0, // 限制变量一起声明
            'init-declarations': 0, // 限制变量何时初始化
            'no-tabs': 0, // 禁止使用tab
            'no-await-in-loop': 2, // 循环语句中不可以使用 await
            'no-inline-comments': 0, // 禁止注释和代码同行
            curly: [2, 'multi-line'], // 单行可忽略大括号，多行不可忽略
            'no-var': 1, // 警告使用var声明方式
            'no-cond-assign': [2, 'always'], // 禁止在条件语句中出现赋值操作符
            'no-else-return': 1, // if语句包含一个 return 语句， else就多余
            'no-multiple-empty-lines': [1, { max: 1, maxEOF: 2, maxBOF: 2 }], // 空白行限制
            'arrow-parens': 0, // 允许箭头函数不使用圆括号
            'no-constant-condition': 2, // 禁止在条件中使用常量表达式
            'no-duplicate-case': 1, // 警告 重复 case 标签
            camelcase: 0, // 强制驼峰法命名
            'switch-colon-spacing': 'error', //
            'no-undef': 0, // 禁止未声明的变量的引用
            'no-useless-escape': 0, // 转义字符串，模板文字和正则表达式中的非特殊字符不会产生任何影响
            'no-extra-semi': 1, // 警告不必要的分号
            'no-unused-vars': ['error', { args: 'none' }],
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 console 使用，开发环境中关闭规则
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 debugger 使用，开发环境中关闭规则
            'no-empty': process.env.NODE_ENV === 'production' ? 2 : 1, // 警告空块语句
            'no-invalid-regexp': process.env.NODE_ENV === 'production' ? 2 : 1, // 正则中不要出现空匹配
            // vue 相关配置
            'vue/multi-word-component-names': 'off',
        },
    },
    {
        ignores: [
            '**/dist/**',          // 忽略 dist 目录
            '**/.vscode/**',       // 忽略 .vscode 目录
            '**/node_modules/**',  // 忽略 node_modules
            '**/public/**',        // 忽略 public 目录
            '**/*.d.ts',           // 可选：忽略 TypeScript 声明文件
            '**/.prettierrc/**',
            '*.md',
            '*.woff',
            '*.woff',
            '*.ttf',
            '/docs',
            '/bin',
        ]
    },
];