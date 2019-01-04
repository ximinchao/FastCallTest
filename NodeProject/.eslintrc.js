module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],

    //使用babel-eslint解析
    parser: "babel-eslint",

    env: {
        //使require和module.exports等有效
        node: true,
        //确认使用es6规则，隐含有"parserOptions": { "ecmaVersion": 6 }
        es6: true,
        //使用document等DOM类
        browser: true,
        //允许mocha的describe和it等语句
        mocha: true,
        //允许jest的beforeAll和test等语句
        jest: true
    },

    rules: {
        // 禁止使用 console
        // @off console 的使用很常见
        "no-console": "off",

        //缩进为4个空格
        indent: ["error", 4],

        //语句末尾必须不可有分号
        //semi: ["error", "never"]
    },

    parserOptions: {
        ecmaFeatures: {
            //使用jsx
            jsx: true
        },
        //防止import和export报错
        sourceType: "module",
        allowImportExportEverywhere: true
    }
}