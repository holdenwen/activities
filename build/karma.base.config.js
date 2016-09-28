module.exports = {
    // 基础路径
    basePath: '',
    // 测试框架
    frameworks: ['jasmine'],
    // 设置在浏览器运行的文件和模式列表
    files: [
        // 'test-main.js',
        {pattern: 'test/**/*Spec.js', included: false}
    ],
    // 排除的文件
    exclude: [
    ],
    // 运行前对匹配文件进行预处理
    preprocessors: {
    },
    // 测试结果报告
    // possible values: 'dots', 'progress'
    reporters: ['progress'],
    // 服务器端口
    port: 9876,
    // 输出信息（包括测试报告和日志）是否显示彩色
    colors: true,
    // 日志等级
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // 是否自动监测测试用例改动
    autoWatch: true,
    // 运行浏览器
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // 并发等级
    // 设置浏览器同时进行的数量
    concurrency: Infinity
};