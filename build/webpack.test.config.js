import path from 'path'

module.exports = function() {
    // 配置生成Source Maps
    devtool: 'source-map',
    // js唯一入口文件
    entry: './test/unit/specs/index',
    // js打包出口
    output: {
        path: path.resolve(__dirname, '../test/unit'),
        filename: 'specs.js'
    }
}